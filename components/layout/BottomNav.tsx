"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Dumbbell, FlaskConical } from "lucide-react";

export default function BottomNav({ isLoggedIn }: { isLoggedIn?: boolean }) {
  const pathname = usePathname();

  const navItems = isLoggedIn ? [
    { href: "/dashboard", label: "Home", icon: Home, match: /^\/dashboard$/ },
    { href: "/dashboard/academy", label: "Academy", icon: BookOpen, match: /^\/dashboard\/academy/ },
    { href: "/dashboard/training", label: "Training", icon: Dumbbell, match: /^\/dashboard\/training/ },
    { href: "/dashboard/lab", label: "Lab", icon: FlaskConical, match: /^\/dashboard\/lab/ },
  ] : [
    { href: "/", label: "Home", icon: Home, match: /^\/$/ },
    { href: "/academy", label: "Academy", icon: BookOpen, match: /^\/academy/ },
    { href: "/training", label: "Training", icon: Dumbbell, match: /^\/training/ },
    { href: "/lab", label: "Lab", icon: FlaskConical, match: /^\/lab/ },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 z-50 w-full bg-white border-t border-gray-100 pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = item.match.test(pathname);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                isActive ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5px]" : ""}`} />
              <span className={`text-[10px] ${isActive ? "font-bold" : "font-medium"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
