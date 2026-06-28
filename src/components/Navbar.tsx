"use client";
import { useTheme } from "next-themes";
import { Moon, Sun, LayoutDashboard } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="navbar bg-base-100 shadow-lg px-6 sticky top-0 z-50">
      <div className="flex-1">
        <div className="flex items-center gap-2 text-primary">
          <LayoutDashboard size={28} />
          <span className="text-xl font-bold tracking-tight">ExpenseFlow</span>
        </div>
      </div>
      <div className="flex-none">
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
          className="btn btn-ghost btn-circle"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </div>
  );
}