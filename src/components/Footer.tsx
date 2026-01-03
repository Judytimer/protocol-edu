import { Zap, Github, MessageCircle, Book } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border border-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="text-primary font-bold tracking-wide">WEB3 UNIVERSITY</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              On-chain education protocol. Learning as a verifiable asset. 
              No intermediaries. Pure knowledge transfer.
            </p>
          </div>

          {/* Protocol */}
          <div className="space-y-4">
            <h4 className="text-xs text-foreground font-bold uppercase tracking-widest">Protocol</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Smart Contracts</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Token Economics</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Governance</li>
            </ul>
          </div>

          {/* Developers */}
          <div className="space-y-4">
            <h4 className="text-xs text-foreground font-bold uppercase tracking-widest">Developers</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">API Reference</li>
              <li className="hover:text-primary transition-colors cursor-pointer">SDK</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Integration Guide</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Bug Bounty</li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="text-xs text-foreground font-bold uppercase tracking-widest">Community</h4>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <Book className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground">
            © 2025 WEB3 UNIVERSITY PROTOCOL. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary animate-pulse" />
              NETWORK: SEPOLIA
            </span>
            <span>|</span>
            <span>BLOCK: 18,247,892</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
