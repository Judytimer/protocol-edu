import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Box, Cog, Lock, Users } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  price: string;
  creator: string;
  students: number;
  icon: "box" | "cog";
  difficulty: "beginner" | "intermediate" | "advanced";
}

const difficultyColors = {
  beginner: "text-primary",
  intermediate: "text-warning",
  advanced: "text-destructive",
};

export function CourseCard({ id, title, price, creator, students, icon, difficulty }: CourseCardProps) {
  const IconComponent = icon === "box" ? Box : Cog;

  return (
    <Card variant="terminal" className="group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(110_100%_55%/0.15)]">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xs">COURSE_ID: {id}</CardTitle>
          <span className={`text-xs uppercase tracking-wider ${difficultyColors[difficulty]}`}>
            [{difficulty}]
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Course Visual */}
        <div className="aspect-video bg-background border border-border/50 flex items-center justify-center relative overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `
              linear-gradient(hsl(110 100% 55% / 0.2) 1px, transparent 1px),
              linear-gradient(90deg, hsl(110 100% 55% / 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
          
          {/* Icon */}
          <div className="relative z-10 p-6 border border-primary/30 bg-background-secondary/80">
            <IconComponent className="w-12 h-12 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-primary/50" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-primary/50" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-primary/50" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-primary/50" />
        </div>

        {/* Course Title */}
        <h3 className="text-lg font-bold text-foreground uppercase tracking-wide leading-tight">
          {title}
        </h3>

        {/* Metadata */}
        <div className="space-y-2 text-xs text-muted-foreground font-mono">
          <div className="flex items-center justify-between">
            <span>Read:</span>
            <span className="text-foreground">1x/x</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Smapits:</span>
            <span className="text-foreground">{students.toLocaleString()}</span>
          </div>
        </div>

        {/* Creator */}
        <div className="pt-2 border-t border-border/50">
          <div className="text-xs text-muted-foreground">
            <span>Creator: </span>
            <span className="text-primary">{creator}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Lock className="w-3 h-3 text-accent" />
          <span className="text-sm font-bold text-accent">{price} YD</span>
        </div>
        <Button variant="terminal" size="sm" className="text-xs">
          {'>'}_ ENROLL
        </Button>
      </CardFooter>
    </Card>
  );
}
