import { Navigation } from "@/components/home/Navigation";
import { Hero } from "@/components/home/Hero";
import { WhyMicrogrids } from "@/components/home/WhyMicrogrids";
import { Platform } from "@/components/home/Platform";
import { Solutions } from "@/components/home/Solutions";
import { EVCharging } from "@/components/home/EVCharging";
import { Partners } from "@/components/home/Partners";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/home/Footer";
import { getSiteSettings, getTeamMembers, getSolutions } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/client";
import type { TeamMemberDisplay, SolutionItem } from "@/lib/sanity/displayTypes";

export default async function Home() {
  const [settings, teamMembers, solutions] = await Promise.all([
    getSiteSettings(),
    getTeamMembers(),
    getSolutions(),
  ]);

  const teamProps: TeamMemberDisplay[] | undefined =
    teamMembers.length > 0
      ? teamMembers.map((m) => ({
          name: m.name,
          role: m.role,
          initials: m.initials,
          focus: m.focus,
          bio: m.bio,
          photoUrl: m.photo ? urlFor(m.photo).width(400).url() : undefined,
        }))
      : undefined;

  const solutionProps: SolutionItem[] | undefined =
    solutions.length > 0
      ? solutions.map((s) => ({
          id: s.siteType.current,
          label: s.label,
          title: s.title,
          summary: s.summary,
          bullets: s.bullets,
          img: urlFor(s.image).width(1600).url(),
          credit: s.label,
        }))
      : undefined;

  return (
    <div className="overflow-x-hidden">
      <Navigation phone={settings?.phone} />
      <main className="flex-1">
        <Hero
          headline={settings?.heroHeadline}
          body={settings?.heroBody}
        />
        <WhyMicrogrids
          heading={settings?.whyHeading}
          intro={settings?.whyIntro}
          pillars={settings?.whyPillars}
        />
        <Platform
          heading={settings?.platformHeading}
          intro={settings?.platformIntro}
          stack={settings?.platformStack}
        />
        <Solutions solutions={solutionProps} />
        <EVCharging
          heading={settings?.evHeading}
          body={settings?.evBody}
          layers={settings?.evLayers}
        />
        <Partners
          heading={settings?.partnersHeading}
          intro={settings?.partnersIntro}
          steps={settings?.partnersSteps}
          segments={settings?.partnersSegments}
        />
        <About
          team={teamProps}
          missionStatement={settings?.missionStatement}
        />
        <Contact
          phone={settings?.phone}
          email={settings?.email}
          hours={settings?.hours}
        />
      </main>
      <Footer />
    </div>
  );
}
