"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <Link href="/" className="text-lg font-semibold">
        Booking Tool
      </Link>
      <ThemeToggle />
    </nav>
  );
}
