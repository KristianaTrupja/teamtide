import HeroSlider from "../__components/layout/heroSlider";
import { DashboardNav } from "../__components/layout/dashboardNav";
import { RecentIdeasSection } from "../__components/sections/recentIdeasSection";

import HeroImage from "@/assets/heroImage.png";
import teamImage from "@/assets/teamImage.png";
import meetings from "@/assets/meetings.png";

const heroSlides = [
  {
    eyebrow: "Collaborative event space",
    title: "Plan better together",
    description: "Create and manage events with your team.",
    image: HeroImage,
  },
  {
    eyebrow: "Bring ideas to life",
    title: "Create moments",
    description: "Collaborate, organize, and share experiences.",
    image: teamImage,
  },
  {
    eyebrow: "Make work fun again",
    title: "Discover team ideas",
    description: "Engage your team with interactive event boards.",
    image: meetings,
  },
];

export default function DashboardPage() {
  return (
    <>
      <HeroSlider slides={heroSlides}>
      <DashboardNav />
      </HeroSlider>
      <RecentIdeasSection />
    </>
  );
}