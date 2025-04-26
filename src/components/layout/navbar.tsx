import Link from "next/link";
import { Home, Info, Wrench, AlertTriangle, Phone } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { title: "About", href: "/about", icon: <Info className="mr-2 h-4 w-4" /> },
  { title: "Services", href: "/services", icon: <Wrench className="mr-2 h-4 w-4" /> },
  { title: "Black Swan", href: "/black-swan", icon: <AlertTriangle className="mr-2 h-4 w-4" /> },
  { title: "Contact", href: "/contact", icon: <Phone className="mr-2 h-4 w-4" /> },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/20 bg-black/70 backdrop-blur-md supports-[backdrop-filter]:bg-black/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <div
              className="font-bold text-2xl transition-all duration-200 hover:rotate-6 hover:scale-110"
            >
              <span className="text-amber-500">Kojin</span>
              <span className="text-white">Fox</span>
            </div>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between">
          <div className="md:hidden">
            <Link href="/" className="flex items-center space-x-2">
              <div
                className="font-bold text-2xl transition-all duration-200 hover:rotate-6 hover:scale-110"
              >
                <span className="text-amber-500">Kojin</span>
                <span className="text-white">Fox</span>
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
        </div>
      </div>
    </header>
  );
} 