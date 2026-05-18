export type CreateIdeaBody = {
  title: string;
  shortDescription: string;
  coverImageUrl?: string;
  tagIds: string[];
};

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
  board?: {
    id: string;
    stickers: {
      id: string;
      type: string;
      content: string;
      x: number;
      y: number;
      width?: number | null;
      height?: number | null;
      color?: string | null;
      isPinned: boolean;
    }[];
  } | null;
};

export type SaveIdeaBoardBody = {
  notes: unknown[];
  funItems: unknown[];
  pinnedNoteIds: string[];
  summaryPreview: string;
  postedDecisionId: string | null;
};
