import { buildProxyPath } from "../core/proxy-path";

export function ideasListPath(status?: string): string {
  return buildProxyPath(["ideas"], status ? { status } : undefined);
}

export function ideasCreatePath(): string {
  return buildProxyPath(["ideas"]);
}

export function ideasDetailPath(id: string): string {
  return buildProxyPath(["ideas", id]);
}
