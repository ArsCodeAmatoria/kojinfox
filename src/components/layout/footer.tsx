import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-background-light text-text">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: [-2, 2, -2, 0], transition: { duration: 0.5 } }}
                className="font-bold text-2xl"
              >
                <span className="text-amber-500">Kojin</span>
                <span className="text-white">Fox</span>
              </motion.div>
            </Link>
            <p className="mt-4 text-sm">
              Highrise Safety Specialist & Incident Prevention Expert
            </p>
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
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-background" />
        
        <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-xs text-text-dark">
            © {new Date().getFullYear()} Kojin Fox. All rights reserved.
          </p>
          <p className="text-xs text-primary">
            Safety Expert. Incident Prevention Specialist.
          </p>
        </div>
      </div>
    </footer>
  );
} 