import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import GlowRoad from "@/components/GlowRoad";
import MobileTimeline from "@/components/MobileTimeline";
import DetailView from "@/components/DetailView";
import { sections, Section } from "@/data/hyderabadContent";

const Index = () => {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleCardClick = (sectionId: string) => {
    const section = sections.find((s) => s.id === sectionId);
    if (section) {
      setSelectedSection(section);
      setIsDetailOpen(true);
    }
  };

  const handleNavigate = (direction: "prev" | "next") => {
    if (!selectedSection) return;

    const currentIndex = sections.findIndex((s) => s.id === selectedSection.id);
    const newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;

    if (newIndex >= 0 && newIndex < sections.length) {
      setSelectedSection(sections[newIndex]);
    }
  };

  return (
    <main className="min-h-screen" style={{ background: "hsl(0 0% 2%)" }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Glow Road - Desktop */}
      <section className="hidden md:block">
        <GlowRoad
          onCardClick={handleCardClick}
          activeSection={selectedSection?.id || null}
        />
      </section>

      {/* Mobile Timeline */}
      <section className="md:hidden">
        <MobileTimeline
          onNodeClick={handleCardClick}
          activeSection={selectedSection?.id || null}
        />
      </section>

      {/* Footer */}
      <footer 
        className="py-20 text-center"
        style={{
          borderTop: "1px solid hsla(0, 0%, 100%, 0.1)",
        }}
      >
        <p className="text-muted-foreground text-sm tracking-wider">
          Discover the pearl of the Deccan
        </p>
        <p 
          className="text-nizam-gold font-serif text-xl mt-3"
          style={{
            textShadow: "0 0 20px hsl(45 90% 53% / 0.3)",
          }}
        >
          Hyderabad Snapshot
        </p>
      </footer>

      {/* Detail View with Shared Element Transitions */}
      <DetailView
        section={selectedSection}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onNavigate={handleNavigate}
      />
    </main>
  );
};

export default Index;
