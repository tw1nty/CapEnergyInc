export type SanityImage = {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; width: number; height: number };
};

export type SiteSettings = {
  companyName: string;
  tagline?: string;
  heroSubcopy?: string;
  phone: string;
  email: string;
  hours?: string;
  missionStatement?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImage;
  };
};

export type TeamMember = {
  _id: string;
  name: string;
  role: string;
  initials: string;
  photo?: SanityImage;
  focus?: string;
  bio?: string;
  order: number;
};

export type Solution = {
  _id: string;
  label: string;
  siteType: { current: string };
  title: string;
  summary: string;
  bullets: string[];
  image: SanityImage;
  order: number;
};

export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  category?: string;
  coverImage?: SanityImage;
  excerpt?: string;
};
