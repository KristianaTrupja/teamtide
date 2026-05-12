"use client";

import { useState } from "react";
import { Card } from "../__components/ui/card";
import { Button } from "../__components/ui/button";
import cardImage from "@/assets/heroImage1.png";
import HeroSlider from "../__components/layout/heroSlider";
import HeroImage from "@/assets/heroImage.png";
import teamImage from "@/assets/teamImage.png";
import meetings from "@/assets/meetings.png";
import bgImage from "@/assets/teamImage.png";
import bgIdeaImage from "@/assets/ideas.png";
import background from "@/assets/ideaBg.png";

const mockIdeas = [
  {
    id: "1",
    title: "Team offsite planning",
    description:
      "Organize a creative offsite with activities, agenda, and team voting.",
    createdAt: "Jan 18, 2026",
    author: "Kristiana",
    href: "/dashboard/ideas/team-offsite-planning",
    image: bgImage,
  },
  {
    id: "2",
    title: "Monthly game night",
    description:
      "Bring the team together with casual games, snacks, and challenges.",
    createdAt: "Jan 16, 2026",
    author: "TeamTide",
    href: "/dashboard/ideas/monthly-game-night",
    image: bgIdeaImage,
  },
  {
    id: "3",
    title: "Product launch meetup",
    description:
      "Plan a collaborative launch moment with clear tasks and ownership.",
    createdAt: "Jan 12, 2026",
    author: "Alex Morgan",
    href: "/dashboard/ideas/product-launch-meetup",
    image: background,
  },
  {
    id: "4",
    title: "Quarterly review session",
    description:
      "Host a structured review to celebrate wins and plan improvements.",
    createdAt: "Jan 10, 2026",
    author: "Jordan Smith",
    href: "/dashboard/ideas/quarterly-review",
    image: meetings,
  },
  {
    id: "5",
    title: "Innovation workshop",
    description:
      "Facilitate brainstorming sessions to generate breakthrough ideas.",
    createdAt: "Jan 8, 2026",
    author: "Sarah Lee",
    href: "/dashboard/ideas/innovation-workshop",
    image: background,
  },
  {
    id: "6",
    title: "Team building retreat",
    description:
      "Plan an immersive experience to strengthen team bonds and culture.",
    createdAt: "Jan 5, 2026",
    author: "Marcus Johnson",
    href: "/dashboard/ideas/team-building-retreat",
    image: bgIdeaImage,
  },
  {
    id: "7",
    title: "Product roadmap planning",
    description:
      "Align the team on priorities and milestones for the next quarter.",
    createdAt: "Dec 28, 2025",
    author: "Priya Patel",
    href: "/dashboard/ideas/product-roadmap",
    image: bgIdeaImage,
  },
  {
    id: "8",
    title: "Customer success summit",
    description: "Bring customers and team together to share success stories.",
    createdAt: "Dec 25, 2025",
    author: "Emily Chen",
    href: "/dashboard/ideas/customer-summit",
    image: cardImage,
  },
  {
    id: "9",
    title: "Hackathon event",
    description:
      "Organize a 24-hour coding challenge with prizes and recognition.",
    createdAt: "Dec 20, 2025",
    author: "David Brown",
    href: "/dashboard/ideas/hackathon",
    image: bgImage,
  },
  {
    id: "10",
    title: "Leadership training program",
    description: "Develop emerging leaders through workshops and mentorship.",
    createdAt: "Dec 15, 2025",
    author: "Lisa Wong",
    href: "/dashboard/ideas/leadership-training",
    image: bgIdeaImage,
  },
  {
    id: "11",
    title: "Community outreach day",
    description: "Organize volunteer activities to give back to the community.",
    createdAt: "Dec 10, 2025",
    author: "Michael Torres",
    href: "/dashboard/ideas/community-outreach",
    image: cardImage,
  },
  {
    id: "12",
    title: "Tech talk series",
    description: "Host regular sessions for team members to share knowledge.",
    createdAt: "Dec 5, 2025",
    author: "Samantha Kumar",
    href: "/dashboard/ideas/tech-talk-series",
    image: bgImage,
  },
  {
    id: "13",
    title: "User feedback sprint",
    description:
      "Collect and prioritize customer feedback for product improvements.",
    createdAt: "Nov 28, 2025",
    author: "James Wilson",
    href: "/dashboard/ideas/user-feedback-sprint",
    image: cardImage,
  },
  {
    id: "14",
    title: "Design thinking workshop",
    description:
      "Apply design methodology to solve complex business challenges.",
    createdAt: "Nov 20, 2025",
    author: "Rachel Green",
    href: "/dashboard/ideas/design-thinking",
    image: cardImage,
  },
  {
    id: "15",
    title: "Annual celebration gala",
    description:
      "End the year with a memorable celebration for the entire team.",
    createdAt: "Nov 15, 2025",
    author: "Christopher Lee",
    href: "/dashboard/ideas/annual-gala",
    image: cardImage,
  },
  {
    id: "16",
    title: "Community outreach day",
    description: "Organize volunteer activities to give back to the community.",
    createdAt: "Dec 10, 2025",
    author: "Michael Torres",
    href: "/dashboard/ideas/community-outreach",
    image: cardImage,
  },
  {
    id: "17",
    title: "Tech talk series",
    description: "Host regular sessions for team members to share knowledge.",
    createdAt: "Dec 5, 2025",
    author: "Samantha Kumar",
    href: "/dashboard/ideas/tech-talk-series",
    image: cardImage,
  },
  {
    id: "18",
    title: "User feedback sprint",
    description:
      "Collect and prioritize customer feedback for product improvements.",
    createdAt: "Nov 28, 2025",
    author: "James Wilson",
    href: "/dashboard/ideas/user-feedback-sprint",
    image: cardImage,
  },
  {
    id: "19",
    title: "Design thinking workshop",
    description:
      "Apply design methodology to solve complex business challenges.",
    createdAt: "Nov 20, 2025",
    author: "Rachel Green",
    href: "/dashboard/ideas/design-thinking",
    image: cardImage,
  },
  {
    id: "20",
    title: "Annual celebration gala",
    description:
      "End the year with a memorable celebration for the entire team.",
    createdAt: "Nov 15, 2025",
    author: "Christopher Lee",
    href: "/dashboard/ideas/annual-gala",
    image: cardImage,
  },
];

const heroSlides = [
  {
    title: "Plan better together",
    description: "Create and manage events with your team.",
    image: HeroImage,
  },
  {
    title: "Create moments",
    description: "Collaborate, organize, and share experiences.",
    image: teamImage,
  },
  {
    title: "Discover team ideas",
    description: "Engage your team with interactive event boards.",
    image: meetings,
  },
];

export default function DiscoverIdeasPage() {
  const [displayCount, setDisplayCount] = useState(9);

  const visibleIdeas = mockIdeas.slice(0, displayCount);
  const latestIdeas = visibleIdeas.slice(0, 6);
  const otherIdeas = visibleIdeas.slice(6);
  const hasMore = displayCount < mockIdeas.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 6, mockIdeas.length));
  };

  return (
    <>
      <HeroSlider slides={heroSlides} height="small" />
      <main className="min-h-screen bg-slate-950 px-4 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-20">
            {/* Recent Ideas */}
            <section>
              <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                    Fresh ideas
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">Recent Ideas</h2>
                </div>

                <p className="hidden text-sm text-white/50 md:block">
                  Recently created collaborations and events
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {latestIdeas.map((idea) => (
                  <Card
                    key={idea.id}
                    title={idea.title}
                    description={idea.description}
                    image={idea.image}
                    createdAt={idea.createdAt}
                    author={idea.author}
                    href={idea.href}
                    variant="dark"
                  />
                ))}
              </div>
            </section>

            {/* Older Ideas */}
            {otherIdeas.length > 0 && (
              <section>
                <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                      Archive
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">More Ideas</h2>
                  </div>

                  <p className="hidden text-sm text-white/50 md:block">
                    Explore older community ideas and inspiration
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {otherIdeas.map((idea) => (
                    <Card
                      key={idea.id}
                      title={idea.title}
                      description={idea.description}
                      image={idea.image}
                      createdAt={idea.createdAt}
                      author={idea.author}
                      href={idea.href}
                      variant="dark"
                    />
                  ))}
                </div>
              </section>
            )}
          </div>

          {hasMore && (
            <div className="mt-16 flex justify-center">
              <Button onClick={handleLoadMore} rounded size="lg">
                Load More Ideas
              </Button>
            </div>
          )}

          {!hasMore && mockIdeas.length > 0 && (
            <div className="mt-16 text-center">
              <p className="text-lg text-white/60">
                Showing all {mockIdeas.length} ideas
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
