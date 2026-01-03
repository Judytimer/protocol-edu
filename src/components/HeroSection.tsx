import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Database, Code2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(110 100% 55% / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(110 100% 55% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-accent/50 bg-accent/10 mb-8">
            <span className="w-2 h-2 bg-accent animate-pulse" />
            <span className="text-xs text-accent uppercase tracking-widest font-bold">Protocol v1.0.0</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-accent text-glow-accent">FORGING</span>
            <br />
            <span className="text-foreground">THE FUTURE OF</span>
            <br />
            <span className="text-primary text-glow">DECENTRALIZED SYSTEMS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-mono">
            On-chain education protocol. Courses as assets. Learning verified by smart contracts.
            <span className="text-primary cursor-blink"> _</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button variant="default" size="lg" className="group">
              EXPLORE COURSES
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              BECOME CREATOR
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="border border-border p-4 bg-background-secondary/50">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Database className="w-4 h-4 text-primary" />
                <span className="text-2xl font-bold text-primary text-glow">247</span>
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">On-Chain Courses</span>
            </div>
            <div className="border border-border p-4 bg-background-secondary/50">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-2xl font-bold text-primary text-glow">1.2K</span>
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Active Builders</span>
            </div>
            <div className="border border-border p-4 bg-background-secondary/50">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-2xl font-bold text-primary text-glow">99.9%</span>
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
