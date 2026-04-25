import { describe, it, expect } from "vitest";
import { EXAM_CONFIG } from "@/lib/act/config";

describe("ACT Config", () => {
  it("has correct slug", () => {
    expect(EXAM_CONFIG.slug).toBeDefined();
    expect(typeof EXAM_CONFIG.slug).toBe("string");
  });

  it("has valid theme colors", () => {
    expect(EXAM_CONFIG.themeColor).toMatch(/^#[0-9A-Fa-f]{6}$/);
    expect(EXAM_CONFIG.themeColorDark).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });

  it("has freemium gate configured", () => {
    expect(EXAM_CONFIG.freemiumGate.dailyQuestions).toBe(10);
  });
});
