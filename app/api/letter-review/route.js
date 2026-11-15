// Motivation-letter review (see lib/assistant/reviewRoute.js).
import { reviewHandler } from "@/lib/assistant/reviewRoute";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 45;
export const POST = reviewHandler("letter");
