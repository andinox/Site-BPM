import { describe, expect, it } from "vitest";
import { clamp } from "@/shared/lib/math/clamp";

describe("clamp", () => {
  it("returns the value when it is inside bounds", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it("returns the min when the value is lower than min", () => {
    expect(clamp(-4, 0, 10)).toBe(0);
  });

  it("returns the max when the value is higher than max", () => {
    expect(clamp(12, 0, 10)).toBe(10);
  });
});
