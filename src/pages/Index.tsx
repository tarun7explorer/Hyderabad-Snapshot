import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
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
      {/* Hero Section with Begin Journey anchor */}
      <div className="relative">
        <HeroSection />
        
        {/* Begin Journey Button - Absolutely anchored at hero bottom, flush with black section */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 z-30"
          style={{ bottom: "0", transform: "translateX(-50%) translateY(50%)" }}
        >
          <motion.button
            className="flex flex-col items-center gap-3 cursor-pointer group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.8 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <span 
              className="text-sm sm:text-base tracking-[0.2em] uppercase font-semibold"
              style={{
                color: "hsl(50 100% 60%)",
                textShadow: `
                  0 0 5px hsl(50 100% 70% / 1),
                  0 0 10px hsl(50 100% 60% / 1),
                  0 0 20px hsl(50 100% 55% / 0.9),
                  0 0 40px hsl(50 100% 50% / 0.8),
                  0 0 80px hsl(50 100% 50% / 0.5)
                `,
              }}
            >
              Begin Journey
            </span>
            <motion.div
              className="p-3 rounded-full relative"
              style={{
                background: "hsla(50, 100%, 55%, 0.15)",
                border: "2px solid hsl(50, 100%, 55%)",
                boxShadow: `
                  0 0 15px hsl(50 100% 55% / 0.9),
                  0 0 30px hsl(50 100% 55% / 0.6),
                  0 0 50px hsl(50 100% 55% / 0.4),
                  0 0 80px hsl(50 100% 55% / 0.3),
                  inset 0 0 15px hsl(50 100% 55% / 0.3)
                `,
              }}
              animate={{ 
                y: [0, 8, 0],
                boxShadow: [
                  `0 0 15px hsl(50 100% 55% / 0.9), 0 0 30px hsl(50 100% 55% / 0.6), 0 0 50px hsl(50 100% 55% / 0.4), 0 0 80px hsl(50 100% 55% / 0.3), inset 0 0 15px hsl(50 100% 55% / 0.3)`,
                  `0 0 20px hsl(50 100% 55% / 1), 0 0 40px hsl(50 100% 55% / 0.8), 0 0 70px hsl(50 100% 55% / 0.5), 0 0 100px hsl(50 100% 55% / 0.4), inset 0 0 20px hsl(50 100% 55% / 0.4)`,
                  `0 0 15px hsl(50 100% 55% / 0.9), 0 0 30px hsl(50 100% 55% / 0.6), 0 0 50px hsl(50 100% 55% / 0.4), 0 0 80px hsl(50 100% 55% / 0.3), inset 0 0 15px hsl(50 100% 55% / 0.3)`,
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
            >
              {/* Pulse ring animation */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "2px solid hsl(50, 100%, 55%)",
                }}
                animate={{
                  scale: [1, 1.8, 2],
                  opacity: [0.6, 0.3, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              />
              <ChevronDown 
                className="w-6 h-6 relative z-10" 
                style={{ 
                  color: "hsl(50 100% 60%)",
                  filter: "drop-shadow(0 0 8px hsl(50 100% 55%))",
                }}
              />
            </motion.div>
            
            {/* Connecting glow line to path */}
            <motion.div
              className="w-0.5 h-8"
              style={{
                background: "linear-gradient(to bottom, hsl(50 100% 55%), hsl(45 90% 53%))",
                boxShadow: "0 0 10px hsl(50 100% 55% / 0.8), 0 0 20px hsl(50 100% 55% / 0.5)",
              }}
              animate={{
                opacity: [0.6, 1, 0.6],
                scaleY: [0.9, 1.1, 0.9],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.button>
        </div>
      </div>

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
      <footer className="relative min-h-[50vh] sm:min-h-[60vh] flex items-end justify-center text-center overflow-hidden px-4 sm:px-6 pb-10 sm:pb-14">
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${footerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dark gradient overlay at bottom for text clarity */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, hsl(0 0% 0% / 0.4) 0%, hsl(0 0% 0% / 0.6) 50%, hsl(0 0% 0% / 0.85) 100%)",
          }}
        />
        
        {/* Content - Bottom aligned stack */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Discover tagline - Subtle white with elegant glow */}
          <p 
            className="text-xs sm:text-sm md:text-base tracking-wider mb-2 sm:mb-3"
            style={{
              color: "hsl(0, 0%, 100%)",
              textShadow: "0 0 20px hsla(0, 0%, 100%, 0.4), 0 0 40px hsla(0, 0%, 100%, 0.2)",
            }}
          >
            Discover the pearl of the Deccan
          </p>
          
          {/* Hyderabad Snapshot - Medium yellow with soft glow */}
          <h2 
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5"
            style={{
              color: "hsl(50 100% 55%)",
              textShadow: "0 0 25px hsla(50, 100%, 55%, 0.5), 0 0 50px hsla(50, 100%, 55%, 0.25)",
            }}
          >
            Hyderabad Snapshot
          </h2>
          
          {/* Creator Credit with LinkedIn - Sleek white with elegant glow */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <span 
              className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wide"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 400,
                color: "hsl(0, 0%, 100%)",
                textShadow: "0 0 20px hsla(0, 0%, 100%, 0.4), 0 0 40px hsla(0, 0%, 100%, 0.2)",
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
