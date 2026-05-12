"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";

import teamTideLogo from "@/assets/timetideLogo.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "../ui/utils";

export default function Header() {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/85 shadow-lg backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/dashboard"
          className="group flex items-center gap-3 rounded-full pr-2"
        >
          <Image
            src={teamTideLogo}
            alt="TeamTide"
            className="h-9 w-9"
            priority
          />

          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-white transition group-hover:text-white/90">
              TeamTide
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/72">
              collaborative event space
            </span>
          </span>
        </Link>

        <div className="ml-auto hidden min-w-55 flex-1 md:block lg:max-w-xl">
          <Input
            variant="glass"
            type="search"
            placeholder="Search ideas, events, people..."
            leadingIcon={
              <Search
                size={14}
                strokeWidth={1.9}
                aria-hidden="true"
                className="text-white/66"
              />
            }
          />
        </div>

        <button
          type="button"
          onClick={() => setMobileSearchOpen(true)}
          className="flex md:hidden"
          aria-label="Open search"
        >
          <Search className="h-5 w-5 text-white" />
        </button>

        {mobileSearchOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden">
            <div className="flex h-20 items-center gap-3 px-4">
              <button
                type="button"
                onClick={() => setMobileSearchOpen(false)}
                className="flex"
                aria-label="Close search"
              >
                <X className="h-5 w-5 text-white" />
              </button>

              <div className="flex-1">
                <Input
                  variant="glass"
                  type="search"
                  placeholder="Search..."
                  autoFocus
                  leadingIcon={
                    <Search
                      size={14}
                      strokeWidth={1.9}
                      aria-hidden="true"
                      className="text-white/66"
                    />
                  }
                />
              </div>
            </div>
          </div>
        )}

        <Button iconOnly rounded size="sm" aria-label="Profile">
          <UserRound size={14} />
        </Button>
      </div>
    </header>
  );
}