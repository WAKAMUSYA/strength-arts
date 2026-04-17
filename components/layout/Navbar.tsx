import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tighter text-gray-900">
          STRENGTH <span className="text-gray-400">ARTS</span>
        </Link>
        <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors md:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <Link href="/academy" className="hover:text-blue-600 transition-colors">ACADEMY</Link>
          <Link href="/training" className="hover:text-red-600 transition-colors">TRAINING</Link>
          <Link href="/lab" className="hover:text-purple-600 transition-colors">LAB</Link>
        </nav>
      </div>
    </header>
  );
}
