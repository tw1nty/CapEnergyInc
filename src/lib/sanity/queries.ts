import { client } from "./client";
import type { SiteSettings, TeamMember, Solution, Post } from "./types";

async function safeFetch<T>(query: string): Promise<T | null> {
  try {
    return await client.fetch<T>(query);
  } catch {
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return safeFetch<SiteSettings>(
    `*[_type == "siteSettings"][0]{
      companyName, tagline, heroSubcopy,
      phone, email, hours, missionStatement,
      seo { metaTitle, metaDescription, ogImage }
    }`
  );
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return (
    (await safeFetch<TeamMember[]>(
      `*[_type == "teamMember"] | order(order asc) {
        _id, name, role, initials, photo, focus, bio, order
      }`
    )) ?? []
  );
}

export async function getSolutions(): Promise<Solution[]> {
  return (
    (await safeFetch<Solution[]>(
      `*[_type == "solution"] | order(order asc) {
        _id, label, siteType, title, summary, bullets, image, order
      }`
    )) ?? []
  );
}

export async function getRecentPosts(): Promise<Post[]> {
  return (
    (await safeFetch<Post[]>(
      `*[_type == "post"] | order(publishedAt desc)[0...3] {
        _id, title, slug, publishedAt, category, coverImage, excerpt
      }`
    )) ?? []
  );
}
