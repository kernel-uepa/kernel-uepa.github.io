import { describe, it, expect } from "vitest";
import { community } from "@/config/community";

describe("community config", () => {
  it("has a non-empty name", () => {
    expect(community.name).toBeTruthy();
  });

  it("has a valid accentColor HSL string (three parts)", () => {
    const parts = community.accentColor.trim().split(/\s+/);
    expect(parts).toHaveLength(3);
  });

  it("has at least one social link that starts with https://", () => {
    const links = Object.values(community.socials);
    expect(links.some((l) => l.startsWith("https://"))).toBe(true);
  });

  it("has at least one member stat", () => {
    expect(community.members.stats.length).toBeGreaterThan(0);
  });

  it("has a valid location venue", () => {
    expect(community.location.venue).toBeTruthy();
  });
});
