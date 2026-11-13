import { useEffect, useState } from "react";
import { resolveTheme, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    let saved: string | null = null;
    try { saved = localStorage.getItem(THEME_STORAGE_KEY); } catch { /* Storage may be blocked. */ }
    const apply = (next: Theme) => {
      document.documentElement.classList.toggle("dark", next === "dark");
      setTheme(next);
    };
    apply(resolveTheme(saved, preference.matches));
    const onChange = () => { if (saved !== "light" && saved !== "dark") apply(resolveTheme(null, preference.matches)); };
    const onStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY) {
        saved = event.newValue;
        apply(resolveTheme(saved, preference.matches));
      }
    };
    preference.addEventListener("change", onChange);
    window.addEventListener("storage", onStorage);
    const onChoice = () => { saved = document.documentElement.classList.contains("dark") ? "dark" : "light"; };
    window.addEventListener("ondas-theme-choice", onChoice);
    return () => {
      preference.removeEventListener("change", onChange);
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("ondas-theme-choice", onChoice);
    };
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    setTheme(next);
    try { localStorage.setItem(THEME_STORAGE_KEY, next); } catch { /* Keep the choice for this visit. */ }
    window.dispatchEvent(new Event("ondas-theme-choice"));
  }

  return { theme, toggleTheme };
}