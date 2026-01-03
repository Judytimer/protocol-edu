import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";

type TransactionStep = "idle" | "approving" | "approved" | "purchasing" | "confirmed" | "error";

export function PurchaseFlow() {
  const [step, setStep] = useState<TransactionStep>("idle");

  const handleApprove = () => {
    setStep("approving");
    setTimeout(() => setStep("approved"), 2000);
  };

  const handlePurchase = () => {
    setStep("purchasing");
    setTimeout(() => setStep("confirmed"), 2000);
  };

  const reset = () => setStep("idle");

  return (
    <Card variant="terminal">
      <CardHeader>
        <CardTitle>TRANSACTION FLOW</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Course Preview */}
        <div className="p-3 border border-border bg-background">
          <div className="text-xs text-muted-foreground mb-1">SELECTED COURSE</div>
          <div className="text-sm font-bold text-foreground">Hardhat & Foundry Internals</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-accent font-bold">250 YD</span>
            <span className="text-xs text-muted-foreground">≈ $125.00</span>
          </div>
        </div>

        {/* Step 1: Approve */}
        <div className={`p-3 border transition-colors ${
          step === "idle" ? "border-primary/50 bg-primary/5" :
          step === "approving" ? "border-accent bg-accent/5" :
          ["approved", "purchasing", "confirmed"].includes(step) ? "border-primary bg-primary/10" :
          "border-border"
        }`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 border flex items-center justify-center text-xs ${
                ["approved", "purchasing", "confirmed"].includes(step) 
                  ? "border-primary bg-primary text-primary-foreground" 
                  : "border-muted-foreground text-muted-foreground"
              }`}>
                {["approved", "purchasing", "confirmed"].includes(step) ? <Check className="w-4 h-4" /> : "1"}
              </div>
              <span className="text-sm font-bold">APPROVE ALLOWANCE</span>
            </div>
            {step === "approving" && <Loader2 className="w-4 h-4 animate-spin text-accent" />}
          </div>
          <div className="text-xs text-muted-foreground mb-3">
            Allow contract to spend 250 YD tokens
          </div>
          {step === "idle" && (
            <Button variant="default" size="sm" onClick={handleApprove} className="w-full">
              APPROVE YD TOKEN
            </Button>
          )}
          {step === "approving" && (
            <div className="text-xs text-accent">Waiting for confirmation...</div>
          )}
          {["approved", "purchasing", "confirmed"].includes(step) && (
            <div className="flex items-center gap-2 text-xs text-primary">
              <Check className="w-3 h-3" />
              <span>Approved - Tx: 0x7F3a...8B2c</span>
            </div>
          )}
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90" />
        </div>

        {/* Step 2: Purchase */}
        <div className={`p-3 border transition-colors ${
          step === "approved" ? "border-primary/50 bg-primary/5" :
          step === "purchasing" ? "border-accent bg-accent/5" :
          step === "confirmed" ? "border-primary bg-primary/10" :
          "border-border"
        }`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 border flex items-center justify-center text-xs ${
                step === "confirmed" 
                  ? "border-primary bg-primary text-primary-foreground" 
                  : "border-muted-foreground text-muted-foreground"
              }`}>
                {step === "confirmed" ? <Check className="w-4 h-4" /> : "2"}
              </div>
              <span className="text-sm font-bold">PURCHASE COURSE</span>
            </div>
            {step === "purchasing" && <Loader2 className="w-4 h-4 animate-spin text-accent" />}
          </div>
          <div className="text-xs text-muted-foreground mb-3">
            Execute purchase via smart contract
          </div>
          {step === "approved" && (
            <Button variant="accent" size="sm" onClick={handlePurchase} className="w-full">
              BUY NOW
            </Button>
          )}
          {step === "purchasing" && (
            <div className="text-xs text-accent">Processing transaction...</div>
          )}
          {step === "confirmed" && (
            <div className="flex items-center gap-2 text-xs text-primary">
              <Check className="w-3 h-3" />
              <span>Confirmed - Course access granted</span>
            </div>
          )}
          {!["approved", "purchasing", "confirmed"].includes(step) && step !== "idle" && step !== "approving" && (
            <div className="text-xs text-muted-foreground">Complete Step 1 first</div>
          )}
        </div>

        {/* Transaction States Legend */}
        <div className="pt-3 border-t border-border">
          <div className="text-xs text-muted-foreground mb-2">TRANSACTION STATES:</div>
          <div className="flex flex-wrap gap-3 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-muted-foreground" />
              <span className="text-muted-foreground">Idle</span>
            </div>
            <div className="flex items-center gap-1">
              <Loader2 className="w-3 h-3 text-accent" />
              <span className="text-muted-foreground">Pending</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="w-3 h-3 text-primary" />
              <span className="text-muted-foreground">Confirmed</span>
            </div>
          </div>
        </div>

        {step === "confirmed" && (
          <Button variant="outline" size="sm" onClick={reset} className="w-full">
            RESET DEMO
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
