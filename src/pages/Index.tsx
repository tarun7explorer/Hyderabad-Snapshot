import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import GlowRoad from "@/components/GlowRoad";
import MobileTimeline from "@/components/MobileTimeline";
import DetailView from "@/components/DetailView";
import BackToTop from "@/components/BackToTop";
import { sections, Section } from "@/data/hyderabadContent";
import footerBg from "@/assets/golconda-sunset.jpg";

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
      <footer className="relative py-12 sm:py-16 md:py-20 text-center overflow-hidden px-4 sm:px-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${footerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dark Overlay - enhanced for text visibility */}
        <div className="absolute inset-0 bg-black/75" />
        
        {/* Content */}
        <div className="relative z-10">
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg tracking-wider mb-2 sm:mb-3">
            Discover the pearl of the Deccan
          </p>
          <p 
            className="font-serif text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-10"
            style={{
              color: "hsl(50 100% 55%)",
              textShadow: "0 0 20px hsl(50 100% 55% / 0.4)",
            }}
          >
            Hyderabad Snapshot
          </p>
          
          {/* Personal Branding */}
          <div 
            className="flex items-center justify-center gap-4 pt-8"
            style={{
              borderTop: "1px solid hsla(0, 0%, 100%, 0.15)",
            }}
          >
            <span 
              className="text-lg sm:text-xl md:text-2xl tracking-wide"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 500,
                color: "hsl(0, 0%, 100%)",
                textShadow: "0 0 10px hsl(0 0% 100% / 0.3)",
              }}
            >
              Made by Tarun Tej Gajibimkar
            </span>
            <a
              href="https://www.linkedin.com/in/tarun-tej-gajibimkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all hover:scale-110"
              style={{
                background: "hsla(0, 0%, 100%, 0.1)",
                border: "1px solid hsla(0, 0%, 100%, 0.2)",
              }}
              aria-label="LinkedIn Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[hsl(210,100%,60%)]"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />

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
