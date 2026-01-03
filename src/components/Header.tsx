import { Button } from "@/components/ui/button";
import { Wallet, Terminal, Zap } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-border bg-background-secondary/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-accent font-bold tracking-widest">ACID INDUSTRIAL</span>
              <span className="text-primary font-bold text-lg tracking-wide text-glow">WEB3 UNIVERSITY</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Button variant="terminal" size="sm">
              <Terminal className="w-4 h-4" />
              BUILD
            </Button>
            <Button variant="terminal" size="sm">
              DEPLOY
            </Button>
            <Button variant="terminal" size="sm">
              AUDIT
            </Button>
          </nav>

          {/* Wallet Connect */}
          <Button variant="hazard" size="default" className="group">
            <Wallet className="w-4 h-4" />
            <span>ACCESS TERMINAL</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
