import { NextResponse } from "next/server";
import { getLegitsPage } from "@/lib/discord";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const before = url.searchParams.get("before") || undefined;
  const limitValue = url.searchParams.get("limit");
  if (before && !/^\d{1,30}$/.test(before)) return NextResponse.json({ error: { code: "invalid_cursor", message: "Invalid message cursor." } }, { status: 400 });
  const limit = limitValue ? Number(limitValue) : 50;
  if (!Number.isInteger(limit) || limit < 1 || limit > 50) return NextResponse.json({ error: { code: "invalid_cursor", message: "Invalid page size." } }, { status: 400 });
  const result = await getLegitsPage(before, limit);
  if (result.page) return NextResponse.json(result.page, { headers: { "Cache-Control": "no-store" } });
  const messages = { configuration: "Legits is not configured.", rate_limited: "Legits is temporarily rate limited.", timeout: "Legits took too long to respond.", upstream: "Legits is temporarily unavailable." } as const;
  const code = result.error || "upstream";
  return NextResponse.json({ error: { code, message: messages[code], ...(result.retryAfter ? { retryAfterSeconds: result.retryAfter } : {}) } }, { status: result.status, headers: result.retryAfter ? { "Retry-After": String(result.retryAfter) } : undefined });
}
