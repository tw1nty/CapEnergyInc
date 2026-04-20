export type SanityImage = {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number; width: number; height: number };
};

export type SiteSettings = {
  // General
  companyName: string;
  phone: string;
  email: string;
  hours?: string;

  // Hero
  heroHeadline?: string;
  heroBody?: string;

  // Why Microgrids
  whyHeading?: string;
  whyIntro?: string;
  whyPillars?: { title: string; body: string }[];

  // Platform
  platformHeading?: string;
  platformIntro?: string;
  platformStack?: { label: string; desc: string }[];

  // EV Charging
  evHeading?: string;
  evBody?: string;
  evLayers?: { label: string; value: string }[];

  // Partners
  partnersHeading?: string;
  partnersIntro?: string;
  partnersSteps?: { title: string; body: string }[];
  partnersSegments?: string[];

  // About
  missionStatement?: string;

  // SEO
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
