import { act, renderHook, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useTheme } from "@/hooks/use-theme";
import { resolveTheme, THEME_STORAGE_KEY } from "@/lib/theme";

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.classList.remove("dark");
  vi.restoreAllMocks();
});

describe("Theme preferences", () => {
  it("uses the system's dark preference when no choice is saved", () => {
    expect(resolveTheme(null, true)).toBe("dark");
    expect(resolveTheme(null, false)).toBe("light");
  });
  it("honors a saved choice instead of the system preference", () => {
    expect(resolveTheme("light", true)).toBe("light");
    expect(resolveTheme("dark", false)).toBe("dark");
  });
  it("persists toggles and restores the choice on a new visit", () => {
    const first = renderHook(useTheme);
    act(() => first.result.current.toggleTheme());
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    first.unmount();
    const second = renderHook(useTheme);
    expect(second.result.current.theme).toBe("dark");
    act(() => second.result.current.toggleTheme());
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});