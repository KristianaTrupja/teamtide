import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "../ui/button";
import { Card } from "../ui/card";

import bgImage from "@/assets/teamImage.png";
import fallbackImage from "@/assets/cardImage.png";

export type IdeaResponseDto = {
  id: string;
  title: string;
  shortDescription: string;
  coverImageUrl?: string | null;
  status: string;
  createdAt: string;
  createdBy: {
    id: string;
    username: string;
    fullName?: string | null;
  };
  tags: {
    id: string;
    name: string;
    color?: string | null;
  }[];
};

export async function getRecentIdeas(): Promise<IdeaResponseDto[]> {
  const res = await fetch("http://localhost:3001/api/ideas", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch ideas");
  }

  return res.json();
}

export async function RecentIdeasSection() {
  const recentIdeas = await getRecentIdeas();

  return (
    <section className="relative isolate overflow-hidden px-4 py-20 text-white">
      <Image
        src={bgImage}
        alt=""
        fill
        priority
        className="absolute inset-0 z-0 object-cover"
      />

      <div className="absolute inset-0 z-10 bg-slate-950/70 backdrop-blur-[2px]" />

      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-2xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Top Recent
            <br />
            Ideas
          </h2>

          <Link href="/discover-ideas">
            <Button rounded size="lg">
              See all ideas
              <ArrowUpRight size={18} />
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {recentIdeas.slice(0, 3).map((idea) => (
            <Card
              key={idea.id}
              title={idea.title}
              description={idea.shortDescription}
              image={idea.coverImageUrl || fallbackImage}
              createdAt={new Date(idea.createdAt).toLocaleDateString()}
              author={idea.createdBy.fullName || idea.createdBy.username}
              href={`/dashboard/ideas/${idea.id}`}
              variant="dark"
            />
          ))}
        </div>
      </div>
    </section>
  );
}