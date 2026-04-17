"use server";

import { z } from "zod";
import { Resend } from "resend";

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your full name.").max(120),
  email: z.email("Please enter a valid email."),
  company: z.string().max(160).optional().or(z.literal("")),
  phone: z.string().max(40).optional().or(z.literal("")),
  siteType: z
    .enum(["commercial", "multifamily", "small-business", "standalone", "partner", "other"])
    .default("other"),
  inquiry: z.enum(["site-review", "partner", "microgrid-assessment", "general"]).default("general"),
  message: z.string().min(10, "Please share a few details about your site.").max(4000),
  // Honeypot
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof ContactSchema>, string>>;
};

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = ContactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof ContactSchema>;
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { ok: false, message: "Please fix the highlighted fields.", fieldErrors };
  }

  // Honeypot — silently accept bots
  if (parsed.data.website) {
    return { ok: true, message: "Thanks — we'll be in touch shortly." };
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "info@capenergyinc.com";
  const from = process.env.CONTACT_FROM || "Capital Energy Solutions <notifications@capenergyinc.com>";

  const subject = `New ${data.inquiry.replace("-", " ")} inquiry — ${data.name}`;
  const html = buildEmailHtml(data);
  const text = buildEmailText(data);

  if (!apiKey) {
    // Dev fallback — log the submission to the server console so we can inspect during iteration.
    console.log("[contact] RESEND_API_KEY not set — form submission logged only", {
      to,
      subject,
      data,
    });
    return {
      ok: true,
      message: "Thanks — your message was captured. (Email delivery is in staging.)",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject,
      html,
      text,
    });
    if (error) {
      console.error("[contact] Resend error", error);
      return { ok: false, message: "We couldn't deliver your message. Please try again or email info@capenergyinc.com directly." };
    }
    return { ok: true, message: "Thanks — we'll be in touch shortly." };
  } catch (err) {
    console.error("[contact] unexpected", err);
    return { ok: false, message: "Something went wrong. Please email info@capenergyinc.com." };
  }
}

function buildEmailText(d: z.infer<typeof ContactSchema>) {
  return [
    `Inquiry: ${d.inquiry}`,
    `Site type: ${d.siteType}`,
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Company: ${d.company || "—"}`,
    `Phone: ${d.phone || "—"}`,
    "",
    "Message:",
    d.message,
  ].join("\n");
}

function buildEmailHtml(d: z.infer<typeof ContactSchema>) {
  const row = (k: string, v: string) =>
    `<tr><td style="padding:6px 12px;color:#4f6475;font-size:12px;text-transform:uppercase;letter-spacing:0.08em">${k}</td><td style="padding:6px 12px;color:#0d1b2a;font-size:14px">${escapeHtml(v)}</td></tr>`;
  return `<!doctype html><html><body style="font-family:Inter,system-ui,sans-serif;background:#f3f5f7;padding:24px;margin:0">
  <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e6ebef;border-radius:16px;overflow:hidden">
    <div style="background:#0d1b2a;color:#fff;padding:24px 28px">
      <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#8fd3ff">Capital Energy Solutions</div>
      <div style="font-size:22px;margin-top:8px">New ${escapeHtml(d.inquiry.replace("-", " "))} inquiry</div>
    </div>
    <table style="width:100%;border-collapse:collapse;padding:8px">
      ${row("Name", d.name)}
      ${row("Email", d.email)}
      ${row("Company", d.company || "—")}
      ${row("Phone", d.phone || "—")}
      ${row("Site type", d.siteType)}
      ${row("Inquiry", d.inquiry)}
    </table>
    <div style="padding:20px 28px;border-top:1px solid #e6ebef">
      <div style="font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#4f6475;margin-bottom:8px">Message</div>
      <div style="font-size:14px;color:#0d1b2a;white-space:pre-wrap;line-height:1.6">${escapeHtml(d.message)}</div>
    </div>
  </div>
</body></html>`;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}
