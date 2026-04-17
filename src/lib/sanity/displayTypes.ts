export type TeamMemberDisplay = {
  name: string;
  role: string;
  initials: string;
  focus?: string;
  bio?: string;
  photoUrl?: string;
};

export type SolutionItem = {
  id: string;
  label: string;
  title: string;
  summary: string;
  bullets: string[];
  img: string;
  credit: string;
};
