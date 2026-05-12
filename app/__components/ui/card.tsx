import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "./utils";
import { Button } from "./button";

type CardVariant = "dark" | "light";

type CardProps = {
  title: string;
  description: string;
  createdAt: string;
  author: string;
  href: string;
  image?: string | StaticImageData;
  variant?: CardVariant;
  className?: string;
};

const variantClasses: Record<CardVariant, string> = {
  dark: "bg-slate-950 text-white",
  light: "bg-white text-slate-950"
};

export function Card({
  title,
  description,
  createdAt,
  author,
  href,
  image,
  variant = "dark",
  className,
}: CardProps) {
  return (
    <article
      className={cn(
        "group relative min-h-112 overflow-hidden rounded-3xl p-8",
        variantClasses[variant],
        className,
      )}
    >
      {image && (
        <Image src={image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" />
      )}

      {/* Full overlay on hover */}
      <div className="absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/20 to-black/70" />

      <div className="relative z-10 flex h-full min-h-88 flex-col justify-center items-center text-center">
        <div className="transition-opacity duration-300 group-hover:opacity-0">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            {createdAt}
          </p>

          <h3 className="mt-4 max-w-xs text-3xl font-extrabold uppercase leading-tight tracking-tight">
            {title}
          </h3>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-sm font-semibold text-white/70">By {author}</p>

          <p className="mt-3 max-w-sm text-base leading-7 text-white/85">
            {description}
          </p>

          <Link
            href={href}
            className="mt-6"
          >
            <Button rounded size="sm">
              View idea
              <ArrowUpRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}