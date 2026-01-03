import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CourseCatalog } from "@/components/CourseCatalog";
import { SystemStatus } from "@/components/SystemStatus";
import { ContractInfo } from "@/components/ContractInfo";
import { TreasuryPanel } from "@/components/TreasuryPanel";
import { WalletProfile } from "@/components/WalletProfile";
import { PurchaseFlow } from "@/components/PurchaseFlow";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-mono">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Main Content Grid - Courses + System Status */}
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column - Course Catalog */}
              <div className="lg:col-span-8">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide mb-2">
                      Course Registry
                    </h2>
                    <p className="text-sm text-muted-foreground font-mono">
                      Browse on-chain educational assets
                    </p>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground border border-border px-4 py-2 bg-background-secondary">
                    <span className="w-2 h-2 bg-primary animate-pulse" />
                    <span>INDEXING: LIVE</span>
                  </div>
                </div>
                
                {/* Course Cards Grid */}
                <CourseCatalog />
              </div>

              {/* Right Column - System Status */}
              <div className="lg:col-span-4">
                <SystemStatus />
              </div>
            </div>
          </div>
        </section>

        {/* Protocol Dashboard Section */}
        <section className="py-16 border-t border-border bg-background-secondary/30">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide mb-2">
                Protocol Dashboard
              </h2>
              <p className="text-sm text-muted-foreground font-mono">
                Smart contract layer & treasury management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Contract Info */}
              <ContractInfo />

              {/* Treasury Panel */}
              <TreasuryPanel />

              {/* Purchase Flow */}
              <PurchaseFlow />
            </div>
          </div>
        </section>

        {/* User Profile Section */}
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide mb-2">
                Wallet Terminal
              </h2>
              <p className="text-sm text-muted-foreground font-mono">
                Identity verification & course access
              </p>
            </div>

            <div className="max-w-md">
              <WalletProfile />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
