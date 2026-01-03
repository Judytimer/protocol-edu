import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Shield, BookOpen, Edit3, Check } from "lucide-react";

export function WalletProfile() {
  return (
    <Card variant="terminal">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="w-4 h-4" />
          WALLET IDENTITY
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Wallet Address */}
        <div className="p-4 border border-primary/30 bg-background">
          <div className="text-xs text-muted-foreground mb-2">CONNECTED WALLET</div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border border-primary flex items-center justify-center bg-primary/10">
              <User className="w-4 h-4 text-primary" />
            </div>
            <code className="text-sm text-foreground font-mono">0x7F3a8B2c...9E4d</code>
          </div>
        </div>

        {/* Display Name */}
        <div className="p-3 border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">DISPLAY NAME</span>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Edit3 className="w-3 h-3" />
            </Button>
          </div>
          <div className="text-sm text-foreground font-bold">anon_builder_42</div>
          <div className="text-xs text-muted-foreground mt-1">
            Set via signed message
          </div>
        </div>

        {/* Verification Status */}
        <div className="flex items-center gap-2 p-3 border border-primary/30 bg-primary/5">
          <Shield className="w-4 h-4 text-primary" />
          <div>
            <div className="text-xs text-primary font-bold">SIGNATURE VERIFIED</div>
            <div className="text-xs text-muted-foreground">Ownership verified by signature</div>
          </div>
        </div>

        {/* Purchased Courses */}
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
            Owned Courses
          </div>
          <div className="space-y-2">
            {[
              { id: "0x7F3a", title: "Hardhat Internals" },
              { id: "0x1A4f", title: "ERC-20 Development" },
            ].map((course) => (
              <div
                key={course.id}
                className="flex items-center justify-between p-2 border border-border bg-background"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3 h-3 text-primary" />
                  <span className="text-xs text-foreground">{course.title}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-primary">
                  <Check className="w-3 h-3" />
                  <span>OWNED</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Backend Trust Notice */}
        <div className="text-xs text-center text-muted-foreground italic border-t border-border pt-3">
          "No backend trust - verification on-chain"
        </div>
      </CardContent>
    </Card>
  );
}
