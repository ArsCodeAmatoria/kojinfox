import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <Card className={cn("transition-all hover:shadow-md hover:border-amber-200/50", className)}>
      <CardHeader className="pb-2">
        <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-md bg-amber-600/10 text-amber-600">
          {icon}
        </div>
        <CardTitle className="text-xl text-zinc-200">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-zinc-400">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
} 