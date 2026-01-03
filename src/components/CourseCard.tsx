import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  price: string;
  creator: string;
  students: number;
  image: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  gasInfo?: string;
}

const difficultyColors = {
  beginner: "text-primary",
  intermediate: "text-warning",
  advanced: "text-destructive",
};

export function CourseCard({ id, title, price, creator, students, image, difficulty, gasInfo }: CourseCardProps) {
  return (
    <Card variant="terminal" className="group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(110_100%_55%/0.15)] overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xs">COURSE_ID: {id}</CardTitle>
          <span className={`text-xs uppercase tracking-wider ${difficultyColors[difficulty]}`}>
            [{difficulty}]
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Course Visual - Using the chalk drawing image */}
        <div className="aspect-video bg-background border border-border/50 relative overflow-hidden">
          {/* Course Image */}
          <img 
            src={image} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
          />
          
          {/* Overlay gradient for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          
          {/* Corner Decorations */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-primary/50" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-primary/50" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-primary/50" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-primary/50" />
          
          {/* Gas Info Overlay */}
          {gasInfo && (
            <div className="absolute bottom-2 left-2 right-2 text-xs text-primary/80 font-mono truncate">
              {gasInfo}
            </div>
          )}
        </div>

        {/* Course Title */}
        <h3 className="text-lg font-bold text-foreground uppercase tracking-wide leading-tight">
          {title}
        </h3>

        {/* Metadata */}
        <div className="space-y-2 text-xs text-muted-foreground font-mono">
          <div className="flex items-center justify-between">
            <span>Read:</span>
            <span className="text-foreground">3w/x</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Snapits:</span>
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
