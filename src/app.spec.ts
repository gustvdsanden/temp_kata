import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/vue";
import app from "./App.vue";

describe("app", () => {
  beforeEach(() => {
    render(app);
  });
  afterEach(() => {
    cleanup();
  });

  it("should show the fida-prototype title", () => {
    expect(screen.getByText("fida-prototype")).toBeDefined();
  });

  it("should show a rook", () => {
    expect(screen.getAllByTestId("rook").length).toBe(2);
  });
});
