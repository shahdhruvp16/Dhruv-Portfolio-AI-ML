import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-5 z-50 p-2 rounded-full max-sm:hidden transition-colors duration-300 outline-none"
      )}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 transition-transform duration-300 hover:rotate-90" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900 transition-transform duration-300 hover:rotate-90" />
      )}
    </button>
  );
};
