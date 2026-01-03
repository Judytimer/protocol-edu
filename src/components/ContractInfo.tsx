import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contracts = [
  {
    name: "YD Token",
    address: "0x7F3a8B2c...9E4d",
    fullAddress: "0x7F3a8B2c4D1f9E4d5A6b7C8d9E0f1A2B",
    type: "ERC-20",
    network: "Sepolia Testnet",
  },
  {
    name: "Course Registry",
    address: "0x9E2b4D1f...3C8d",
    fullAddress: "0x9E2b4D1f5A6b7C8d9E0f1A2B3C4D5E6F",
    type: "Registry",
    network: "Sepolia Testnet",
  },
  {
    name: "Purchase Handler",
    address: "0x3C8d9A5e...1A4f",
    fullAddress: "0x3C8d9A5e7B0c2D3E4F5A6B7C8D9E0F1A",
    type: "Handler",
    network: "Sepolia Testnet",
  },
];

export function ContractInfo() {
  const { toast } = useToast();

  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    toast({
      title: "Address Copied",
      description: "Contract address copied to clipboard",
    });
  };

  return (
    <Card variant="terminal">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="w-2 h-2 bg-accent" />
          DEPLOYMENT LAYER
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {contracts.map((contract) => (
          <div
            key={contract.name}
            className="p-3 border border-border bg-background hover:border-primary/30 transition-colors group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-foreground">{contract.name}</span>
              <span className="text-xs px-2 py-0.5 border border-primary/50 text-primary">
                {contract.type}
              </span>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <code className="text-xs text-muted-foreground font-mono flex-1">
                {contract.address}
              </code>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => copyAddress(contract.fullAddress)}
              >
                <Copy className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
              <span className="text-xs text-primary">{contract.network}</span>
            </div>
          </div>
        ))}

        {/* Token Info */}
        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-muted-foreground">Token Symbol:</span>
            <span className="text-accent font-bold">YD</span>
          </div>
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-muted-foreground">Total Supply:</span>
            <span className="text-foreground">1,000,000 YD</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Decimals:</span>
            <span className="text-foreground">18</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
