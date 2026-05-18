import { proxyDelete, proxyGetJson, proxyPostJson, proxyPutJson } from "../core/fetch-client";
import { getAccessToken } from "../../auth/session";
import { ideasBoardPath, ideasCreatePath, ideasDetailPath, ideasListPath } from "./paths";
import type { CreateIdeaBody, IdeaResponseDto, SaveIdeaBoardBody } from "./types";

export type { CreateIdeaBody, IdeaResponseDto };

export async function getIdeas(
  status?: string,
): Promise<IdeaResponseDto[]> {
  return proxyGetJson<IdeaResponseDto[]>(ideasListPath(status), {
    errorMessage: "Failed to fetch ideas",
  });
}

export async function createIdea(
  body: CreateIdeaBody,
): Promise<IdeaResponseDto> {
  const token = getAccessToken();
  if (!token) {
    throw new Error("Not authenticated");
  }
  return proxyPostJson<IdeaResponseDto, CreateIdeaBody>(
    ideasCreatePath(),
    body,
    {
      errorMessage: "Could not create idea",
      init: { headers: { Authorization: `Bearer ${token}` } },
    },
  );
}

export async function deleteIdea(id: string): Promise<void> {
  const token = getAccessToken();
  if (!token) {
    throw new Error("Not authenticated");
  }
  return proxyDelete(ideasDetailPath(id), {
    errorMessage: "Could not delete idea",
    init: { headers: { Authorization: `Bearer ${token}` } },
  });
}

export async function saveIdeaBoard(
  id: string,
  body: SaveIdeaBoardBody,
): Promise<void> {
  const token = getAccessToken();
  if (!token) {
    throw new Error("Not authenticated");
  }
  await proxyPutJson<{ success: boolean }, SaveIdeaBoardBody>(
    ideasBoardPath(id),
    body,
    {
      errorMessage: "Could not save idea board",
      init: { headers: { Authorization: `Bearer ${token}` } },
    },
  );
}
