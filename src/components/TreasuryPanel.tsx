import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Coins, Wallet, ArrowUpRight } from "lucide-react";

const treasuryAssets = [
  { asset: "YD Token", deposited: "12,500", yield: "+2.4%", protocol: "AAVE v3" },
  { asset: "ETH", deposited: "5.2", yield: "+1.8%", protocol: "AAVE v3" },
  { asset: "USDT", deposited: "8,750", yield: "+3.1%", protocol: "AAVE v3" },
];

export function TreasuryPanel() {
  return (
    <Card variant="glow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-accent" />
            TREASURY MODULE
          </CardTitle>
          <span className="text-xs px-2 py-1 bg-accent/20 text-accent border border-accent/30">
            AAVE INTEGRATED
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Total Value */}
        <div className="p-4 border border-primary/30 bg-background-secondary">
          <div className="text-xs text-muted-foreground mb-1">TOTAL VALUE LOCKED</div>
          <div className="text-3xl font-bold text-primary text-glow">$47,892.50</div>
          <div className="flex items-center gap-1 text-xs text-primary mt-2">
            <ArrowUpRight className="w-3 h-3" />
            <span>+5.2% (24h)</span>
          </div>
        </div>

        {/* Asset List */}
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
            Staked Assets
          </div>
          {treasuryAssets.map((item) => (
            <div
              key={item.asset}
              className="flex items-center justify-between p-3 border border-border bg-background hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Coins className="w-4 h-4 text-accent" />
                <div>
                  <div className="text-sm font-bold text-foreground">{item.asset}</div>
                  <div className="text-xs text-muted-foreground">{item.protocol}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-foreground">{item.deposited}</div>
                <div className="text-xs text-primary">{item.yield}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button variant="terminal" size="sm" className="flex-1">
            <Wallet className="w-4 h-4" />
            DEPOSIT
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            WITHDRAW
          </Button>
        </div>

        {/* Protocol Note */}
        <div className="text-xs text-muted-foreground italic border-t border-border pt-3">
          "Course revenue is managed like protocol treasury"
        </div>
      </CardContent>
    </Card>
  );
}
