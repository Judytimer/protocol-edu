import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Database, Cpu, HardDrive } from "lucide-react";

const statusItems = [
  { label: "Network", value: "65.036Mgas", icon: Activity },
  { label: "N22 corred", value: "10.00", icon: Database },
  { label: "Metcon metric", value: "29.04MB/s", icon: Cpu },
  { label: "Local most", value: "229 MB/s", icon: HardDrive },
  { label: "M1c scots", value: "12", icon: Activity },
];

const buildLogs = [
  "Build rouging BoS105.",
  "Build building scorees...",
  "Build chane 3x10f3",
  "Build kocket at 3x157s",
  "Build luge/repos13882s",
  "Build locking 2e4860",
  "Build uuit comars tbits...",
  "Build loading woosas...",
  "Build logging eo1d8s...",
  "Build builotng cox818s",
  "Build ioprewentation 00:05",
  "Oaileging-usog hardhat/foundry",
  "1benternals",
  "Creating build test apalsce",
];

export function SystemStatus() {
  return (
    <Card variant="terminal" className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="w-2 h-2 bg-primary animate-pulse" />
          SYSTEM STATUS
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Status Metrics */}
        <div className="space-y-2">
          {statusItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{item.label}:</span>
              <span className="text-primary font-bold">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-muted-foreground">Build Log:</span>
            <span className="text-primary">16/18</span>
          </div>
          <div className="flex items-center justify-between text-xs mb-4">
            <span className="text-muted-foreground">Cool Length:</span>
            <span className="text-primary">55</span>
          </div>
        </div>

        {/* Build Logs */}
        <div className="space-y-1">
          <span className="text-xs text-accent font-bold">Build Logs:</span>
          <div className="bg-background p-3 border border-border max-h-48 overflow-y-auto">
            <div className="space-y-0.5">
              {buildLogs.map((log, index) => (
                <div 
                  key={index} 
                  className={`text-xs font-mono ${
                    log.includes("hardhat/foundry") || log.includes("Creating") 
                      ? "text-accent" 
                      : "text-primary"
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Status */}
        <div className="pt-2 border-t border-border space-y-1 text-xs">
          <div className="text-accent">Buildsing muid Ssyste</div>
          <div className="text-primary">Restauring courses setup sleay</div>
          <div className="text-muted-foreground">ooont</div>
          <div className="text-primary">Caded log Bulling statu5</div>
        </div>
      </CardContent>
    </Card>
  );
}
