import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
}

export function TestimonialCard({ quote, name, company }: TestimonialCardProps) {
  return (
    <Card className="h-full bg-background-light border-border">
      <CardContent className="pt-6">
        <div className="mb-4 inline-block rounded-full bg-primary/10 p-2 text-primary">
          <Quote className="h-5 w-5" />
        </div>
        <blockquote className="mb-4 text-text">
          "{quote}"
        </blockquote>
      </CardContent>
      <CardFooter className="border-t border-border pt-4">
        <div>
          <p className="font-medium text-text">{name}</p>
          <p className="text-sm text-text-muted">{company}</p>
        </div>
      </CardFooter>
    </Card>
  );
} 