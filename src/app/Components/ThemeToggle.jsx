"use client";

import { MoonStar, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 rounded-lg cursor-pointer"
    >
      {theme === "dark" ? (
        <SunIcon className={"text-amber-500"} />
      ) : (
        <MoonStar className={"text-blue-200"} />
      )}
    </button>
  );
}
