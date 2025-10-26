import { useEffect, useState } from "react";

/**
 * useTheme Hook
 * Handles light/dark theme toggling and persistence using localStorage.
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check local storage first
    return localStorage.getItem("theme") || "light";
  });

  // Apply theme to <body> on change
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
