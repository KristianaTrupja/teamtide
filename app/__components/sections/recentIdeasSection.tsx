import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "../ui/button";
import bgImage from "@/assets/HeroBg.png";
import { getRecentIdeas } from "@/src/infrastructure/api/ideas/server";

import { RecentIdeasClient } from "./recentIdeasClient";

export async function RecentIdeasSection() {
  const recentIdeas = await getRecentIdeas();

  return (
    <section className="relative isolate overflow-hidden px-4 py-20 text-white">
      <Image
        src={bgImage}
        alt=""
        fill
        priority
        sizes="100vw"
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

        <RecentIdeasClient initialIdeas={recentIdeas} />
      </div>
    </section>
  );
}
