import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import HeritagePath from "@/components/HeritagePath";
import MobileTimeline from "@/components/MobileTimeline";
import DetailModal from "@/components/DetailModal";
import { sections, Section } from "@/data/hyderabadContent";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const Index = () => {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { activeSection } = useScrollSpy();

  const handleNodeClick = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (section) {
      setSelectedSection(section);
      setIsModalOpen(true);
    }
  };

  const handleNavigate = (direction: "prev" | "next") => {
    if (!selectedSection) return;
    
    const currentIndex = sections.findIndex(s => s.id === selectedSection.id);
    const newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;
    
    if (newIndex >= 0 && newIndex < sections.length) {
      setSelectedSection(sections[newIndex]);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Heritage Path - Desktop */}
      <section className="hidden md:block">
        <div className="container mx-auto">
          <HeritagePath
            onNodeClick={handleNodeClick}
            activeSection={selectedSection?.id || null}
          />
        </div>
      </section>

      {/* Mobile Timeline */}
      <section className="md:hidden">
        <MobileTimeline
          onNodeClick={handleNodeClick}
          activeSection={selectedSection?.id || null}
        />
      </section>

      {/* Footer */}
      <footer className="py-16 text-center border-t border-border">
        <p className="text-muted-foreground text-sm">
          Discover the pearl of the Deccan
        </p>
        <p className="text-nizam-gold font-serif text-lg mt-2">
          Hyderabad Snapshot
        </p>
      </footer>

      {/* Detail Modal */}
      <DetailModal
        section={selectedSection}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNavigate={handleNavigate}
      />
    </main>
  );
};

export default Index;
