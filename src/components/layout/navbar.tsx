"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, Info, Wrench, AlertTriangle, Phone, Menu, X } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navLinks = [
  { title: "About", href: "/about", icon: <Info className="mr-2 h-4 w-4" /> },
  { title: "Services", href: "/services", icon: <Wrench className="mr-2 h-4 w-4" /> },
  { title: "Black Swan", href: "/black-swan", icon: <AlertTriangle className="mr-2 h-4 w-4" /> },
  { title: "Contact", href: "/contact", icon: <Phone className="mr-2 h-4 w-4" /> },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/20 bg-black/70 backdrop-blur-md supports-[backdrop-filter]:bg-black/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-16 items-center">
        <div className="mr-4 hidden md:flex items-center">
          <Link href="/" className="flex items-center">
            <div className="transition-all duration-200 hover:scale-110 py-2">
              <Image 
                src="/kojinfox-logo.png" 
                alt="KojinFox Logo" 
                width={120} 
                height={40} 
                className="invert translate-y-3" 
              />
            </div>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between">
          <div className="md:hidden">
            <Link href="/" className="flex items-center">
              <div className="transition-all duration-200 hover:scale-110 py-1">
                <Image 
                  src="/kojinfox-logo.png" 
                  alt="KojinFox Logo" 
                  width={100} 
                  height={32} 
                  className="invert translate-y-3" 
                />
              </div>
            </Link>
          </div>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link 
                    href={link.href}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800/50 hover:text-amber-500 focus:bg-zinc-800/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-zinc-800/50 data-[state=open]:bg-zinc-800/50"
                  >
                    {link.icon}
                    {link.title}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center gap-2 md:flex">
            <Link 
              href="/contact"
              className="rounded-md bg-amber-600 px-4 py-2 text-sm font-semibold text-black hover:bg-amber-500 transition-colors"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-300 hover:text-amber-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-md z-40">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center px-4 py-3 text-zinc-100 hover:text-amber-500 hover:bg-zinc-800/80 rounded-md transition-colors bg-zinc-900/80"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon}
                  {link.title}
                </Link>
              ))}
              <Link
                href="/contact"
                className="flex items-center justify-center px-4 py-3 bg-amber-600 text-black font-semibold rounded-md hover:bg-amber-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Me
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 