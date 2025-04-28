import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  imageSrc?: string;
  index?: number;
}

export function TestimonialCard({ 
  quote, 
  name, 
  role, 
  company, 
  imageSrc, 
  index = 0
}: TestimonialCardProps) {
  return (
    <Card className="relative rounded-2xl border border-zinc-800 bg-black/50 backdrop-blur-sm p-8 h-full">
      {index > 0 && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2 rounded-full bg-amber-600 text-black p-2 z-10">
          <div className="w-6 h-6 flex items-center justify-center">
            <span className="text-sm font-semibold">{index}</span>
          </div>
        </div>
      )}
      <CardContent className="p-0">
        <div className="mb-6">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-amber-500 inline-block mr-1">★</span>
          ))}
        </div>
        <blockquote className="mb-6 text-zinc-200 relative">
          <span className="text-amber-600 absolute -top-3 -left-1 text-4xl opacity-20">"</span>
          <p className="relative z-10">{quote}</p>
        </blockquote>
      </CardContent>
      <CardFooter className="p-0 flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800 mr-4">
          {imageSrc ? (
            <Image 
              src={imageSrc} 
              alt={name} 
              width={48} 
              height={48} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-zinc-800" />
          )}
        </div>
        <div className="flex-1">
          <p className="text-zinc-200 font-semibold">{name}</p>
          {role && <p className="text-xs text-amber-500">{role}</p>}
          {company && <p className="text-sm text-zinc-400">{company}</p>}
        </div>
      </CardFooter>
    </Card>
  );
} 