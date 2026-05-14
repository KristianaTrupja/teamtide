"use client";

import { useEffect, useState } from "react";

import { Card } from "../ui/card";
import fallbackImage from "@/assets/cardImage.png";
import { deleteIdea } from "@/src/infrastructure/api/ideas/client";
import type { IdeaResponseDto } from "@/src/infrastructure/api/ideas/types";
import { fetchCurrentUser } from "@/src/infrastructure/api/auth/client";
import { getAccessToken } from "@/src/infrastructure/auth/session";

type Props = {
  initialIdeas: IdeaResponseDto[];
};

export function RecentIdeasClient({ initialIdeas }: Props) {
  const [ideas, setIdeas] = useState(initialIdeas);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [canDelete, setCanDelete] = useState(false);

  useEffect(() => {
    if (!getAccessToken()) {
      setCanDelete(false);
      return;
    }
    let cancelled = false;
    void (async () => {
      try {
        await fetchCurrentUser();
        if (!cancelled) setCanDelete(true);
      } catch {
        if (!cancelled) setCanDelete(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  async function onDeleteIdea(id: string) {
    if (
      !window.confirm(
        "Delete this idea for everyone? This cannot be undone.",
      )
    ) {
      return;
    }
    setDeletingId(id);
    try {
      await deleteIdea(id);
      setIdeas((prev) => prev.filter((i) => i.id !== id));
    } catch (e) {
      window.alert(
        e instanceof Error ? e.message : "Could not delete this idea.",
      );
    } finally {
      setDeletingId(null);
    }
  }

  if (ideas.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {ideas.slice(0, 3).map((idea) => (
        <Card
          key={idea.id}
          title={idea.title}
          description={idea.shortDescription}
          image={idea.coverImageUrl || fallbackImage}
          createdAt={new Date(idea.createdAt).toLocaleDateString()}
          author={idea.createdBy.fullName || idea.createdBy.username}
          href={`/dashboard/ideas/${idea.id}`}
          variant="dark"
          showDelete={canDelete}
          deleteBusy={deletingId === idea.id}
          onDelete={() => onDeleteIdea(idea.id)}
        />
      ))}
    </div>
  );
}
