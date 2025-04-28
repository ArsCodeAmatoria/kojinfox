import Link from "next/link";
import { Phone, Mail, MapPin, Github, Globe, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-background-light text-text">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <div
                className="font-bold text-2xl transition-all duration-200 hover:rotate-6 hover:scale-110"
              >
                <span className="text-amber-500">Kojin</span>
                <span className="text-white">Fox</span>
              </div>
            </Link>
            <p className="mt-4 text-sm">
              Highrise Safety Specialist & Incident Prevention Expert
            </p>
            <div className="mt-4 flex space-x-3">
              <a 
                href="https://github.com/ArsCodeAmatoria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-zinc-400 hover:text-amber-500 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.arscode.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-zinc-400 hover:text-amber-500 transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-text">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">About</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">Skills</Link>
              </li>
              <li>
                <Link href="/black-swan" className="hover:text-primary">Specializations</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-text">Expertise</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primary">Risk Assessment</li>
              <li className="hover:text-primary">Vertical Transport Systems</li>
              <li className="hover:text-primary">Crisis Planning</li>
              <li className="hover:text-primary">Safety Training</li>
              <li className="hover:text-primary">Catastrophic Risk Prevention</li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-text">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                <span>236 868 1732</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-primary" />
                <span>kojinfox@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-primary" />
                <span>Surrey, BC V3T 0L3</span>
              </li>
              <li className="flex items-center mt-4">
                <Github className="mr-2 h-4 w-4 text-primary" />
                <a 
                  href="https://github.com/ArsCodeAmatoria" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 flex items-center"
                >
                  ArsCodeAmatoria
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li className="flex items-center">
                <Globe className="mr-2 h-4 w-4 text-primary" />
                <a 
                  href="https://www.arscode.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 flex items-center"
                >
                  arscode.org
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-background" />
        
        <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-xs text-text-dark">
            © {new Date().getFullYear()} Kojin Fox. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <p className="text-xs text-primary">
              Safety Expert. Incident Prevention Specialist.
            </p>
            <a 
              href="https://github.com/ArsCodeAmatoria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-amber-500 transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a 
              href="https://www.arscode.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-amber-500 transition-colors"
            >
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 