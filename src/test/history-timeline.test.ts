import { describe, expect, it } from "vitest";
import { timelineProgress } from "@/lib/musicotherapy-history";

describe("Horizontal timeline follows vertical scrolling", () => {
  it("reveals the first, middle and last milestones with vertical scroll", () => {
    expect(timelineProgress(0, 3000, 1000)).toBe(0);
    expect(timelineProgress(-1000, 3000, 1000)).toBe(0.5);
    expect(timelineProgress(-2000, 3000, 1000)).toBe(1);
  });
  it("keeps the track inside its range before and after the section", () => {
    expect(timelineProgress(100, 3000, 1000)).toBe(0);
    expect(timelineProgress(-4000, 3000, 1000)).toBe(1);
    expect(timelineProgress(-100, 800, 1000)).toBe(0);
  });
});