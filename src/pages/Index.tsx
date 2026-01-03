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
      <footer className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center text-center overflow-hidden px-4 sm:px-6">
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
        <div className="absolute inset-0 bg-black/80" />
        
        {/* Content - Vertically Centered Stack */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Discover tagline */}
          <p 
            className="text-sm sm:text-base md:text-lg tracking-wider mb-3 sm:mb-4"
            style={{
              color: "hsl(0, 0%, 90%)",
              textShadow: "0 0 10px hsl(0 0% 100% / 0.3)",
            }}
          >
            Discover the pearl of the Deccan
          </p>
          
          {/* Hyderabad Snapshot - Yellow Glow Title */}
          <h2 
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8"
            style={{
              color: "hsl(50 100% 55%)",
              textShadow: `
                0 0 5px hsl(50 100% 70% / 1),
                0 0 10px hsl(50 100% 60% / 0.9),
                0 0 20px hsl(50 100% 55% / 0.7),
                0 0 40px hsl(50 100% 50% / 0.5),
                0 0 80px hsl(50 100% 50% / 0.3)
              `,
            }}
          >
            Hyderabad Snapshot
          </h2>
          
          {/* Spacer */}
          <div className="h-5" />
          
          {/* Creator Credit with LinkedIn */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 500,
                color: "hsl(0, 0%, 100%)",
                textShadow: "0 0 15px hsl(0 0% 100% / 0.5), 0 0 30px hsl(0 0% 100% / 0.3)",
              }}
            >
              Made by Tarun Tej Gajibimkar
            </span>
            <a
              href="https://www.linkedin.com/in/tarun-tej-gajibimkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full transition-all hover:scale-110"
              style={{
                background: "hsla(210, 100%, 60%, 0.15)",
                border: "1px solid hsl(210, 100%, 60%)",
                boxShadow: "0 0 15px hsl(210 100% 60% / 0.5), 0 0 30px hsl(210 100% 60% / 0.3)",
              }}
              aria-label="LinkedIn Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[hsl(210,100%,60%)]"
                style={{
                  filter: "drop-shadow(0 0 5px hsl(210 100% 60%))",
                }}
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
