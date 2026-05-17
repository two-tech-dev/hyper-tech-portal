import { NextResponse } from "next/server";
import { getOrgContributors } from "@/lib/github";

export const revalidate = 120;

export async function GET() {
  const contributors = await getOrgContributors("two-tech-dev");
  return NextResponse.json(contributors);
}
