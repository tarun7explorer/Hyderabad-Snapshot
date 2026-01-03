import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import GlowRoad from "@/components/GlowRoad";
import MobileTimeline from "@/components/MobileTimeline";
import DetailView from "@/components/DetailView";
import BackToTop from "@/components/BackToTop";
import UnifiedGlowPath from "@/components/UnifiedGlowPath";
import { sections, Section } from "@/data/hyderabadContent";
import footerBg from "@/assets/golconda-sunset.jpg";

const Index = () => {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const journeyContainerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for the unified path
  useEffect(() => {
    const handleScroll = () => {
      if (!journeyContainerRef.current) return;

      const rect = journeyContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerTop = rect.top;
      const containerHeight = rect.height;

      const scrolled = windowHeight - containerTop;
      const totalScrollable = containerHeight + windowHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      setScrollProgress(progress);

      // Determine current section
      const sectionProgress = progress * sections.length;
      const newSectionIndex = Math.min(Math.floor(sectionProgress), sections.length - 1);
      setCurrentSectionIndex(newSectionIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {/* Hero Section - flush with black section */}
      <div className="relative" style={{ marginBottom: 0, paddingBottom: 0 }}>
        <HeroSection />
      </div>

      {/* Journey Section Container - contains unified SVG path */}
      <div 
        ref={journeyContainerRef}
        className="relative"
        style={{ 
          background: "hsl(0 0% 2%)",
          marginTop: 0,
          paddingTop: 0,
        }}
      >
        {/* Unified SVG Path - spans entire journey section (hidden on mobile) */}
        <div className="hidden md:block absolute inset-0 overflow-visible" style={{ zIndex: 1 }}>
          <div className="relative w-full flex justify-center">
            <UnifiedGlowPath 
              scrollProgress={scrollProgress} 
              currentSectionIndex={currentSectionIndex} 
            />
          </div>
        </div>

        {/* Begin Journey - positioned above path start */}
        <div 
          className="relative z-30 flex flex-col items-center pt-8 sm:pt-12"
          style={{ margin: 0 }}
        >
          {/* Begin Journey Button */}
          <motion.button
            className="flex flex-col items-center gap-2 sm:gap-3 cursor-pointer group relative z-10"
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
                  0 0 80px hsl(50 100% 50% / 0.6),
                  0 0 120px hsl(50 100% 50% / 0.4)
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
                style={{ border: "2px solid hsl(50, 100%, 55%)" }}
                animate={{ scale: [1, 1.8, 2], opacity: [0.6, 0.3, 0] }}
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
          </motion.button>
        </div>

        {/* Glow Road - Desktop (cards only, path is in UnifiedGlowPath) */}
        <section className="hidden md:block" style={{ marginTop: "60px" }}>
          <GlowRoad
            onCardClick={handleCardClick}
            activeSection={selectedSection?.id || null}
          />
        </section>

        {/* Mobile Timeline */}
        <section className="md:hidden" style={{ marginTop: "0px" }}>
          <MobileTimeline
            onNodeClick={handleCardClick}
            activeSection={selectedSection?.id || null}
          />
        </section>

        {/* Final Destination - Flashcard (path is handled by UnifiedGlowPath) */}
        <div className="relative z-20 flex flex-col items-center pb-16 sm:pb-24 hidden md:flex">
          {/* Premium Glassmorphism Flashcard */}
            <motion.div
              className="relative mx-4 sm:mx-8 max-w-xl w-full"
              style={{ zIndex: 20 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div
                className="relative w-full px-8 py-12 sm:px-12 sm:py-16 rounded-2xl text-center overflow-hidden"
                style={{
                  background: "hsla(0, 0%, 5%, 0.85)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1.5px solid hsl(330 100% 55%)",
                  boxShadow: `
                    0 -15px 50px hsl(330 100% 55% / 0.6),
                    0 0 60px hsl(330 100% 55% / 0.35),
                    0 0 120px hsl(330 100% 50% / 0.2),
                    inset 0 0 60px hsl(330 100% 55% / 0.08)
                  `,
                }}
              >
                {/* Pulsing border glow animation */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ border: "1.5px solid hsl(330 100% 60%)" }}
                  animate={{
                    boxShadow: [
                      `0 0 20px hsl(330 100% 55% / 0.3), inset 0 0 20px hsl(330 100% 55% / 0.05)`,
                      `0 0 35px hsl(330 100% 55% / 0.5), inset 0 0 35px hsl(330 100% 55% / 0.1)`,
                      `0 0 20px hsl(330 100% 55% / 0.3), inset 0 0 20px hsl(330 100% 55% / 0.05)`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Glow bloom on top edge */}
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-56 h-16 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at center top, hsl(330 100% 60% / 0.8) 0%, hsl(330 100% 55% / 0.4) 40%, transparent 70%)",
                    filter: "blur(16px)",
                  }}
                />
                
                {/* Inner glow gradient */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{ background: "radial-gradient(ellipse at center top, hsl(330 100% 60% / 0.12) 0%, transparent 50%)" }}
                />
                
                {/* Content */}
                <div className="relative z-10 pt-4">
                  <p
                    className="text-base sm:text-lg md:text-xl mb-5 sm:mb-7 font-light tracking-wide"
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      color: "hsl(0, 0%, 92%)",
                      textShadow: "0 0 20px hsla(0, 0%, 100%, 0.15)",
                    }}
                  >
                    Many things are yet to be explored in Hyderabad.
                  </p>
                  <p
                    className="text-2xl sm:text-3xl md:text-4xl font-serif italic"
                    style={{
                      color: "hsl(0, 0%, 100%)",
                      textShadow: `
                        0 0 25px hsla(330, 100%, 70%, 0.5),
                        0 0 50px hsla(330, 100%, 60%, 0.25)
                      `,
                    }}
                  >
                    "Hyderabad is an emotion."
                  </p>
                </div>
              </div>
            </motion.div>
        </div>
      </div>

      {/* Footer - Text positioned at bottom 20% of Golconda image */}
      <footer className="relative min-h-[60vh] sm:min-h-[70vh] flex items-end justify-center text-center overflow-hidden px-4 sm:px-6">
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${footerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient overlay for text clarity */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, hsl(0 0% 0% / 0.3) 0%, hsl(0 0% 0% / 0.5) 60%, hsl(0 0% 0% / 0.9) 100%)",
          }}
        />
        
        {/* Content - Positioned at bottom 20% */}
        <div className="relative z-10 flex flex-col items-center pb-[8%] sm:pb-[10%]">
          {/* Discover tagline */}
          <p 
            className="text-sm sm:text-base md:text-lg tracking-wider mb-3 sm:mb-4"
            style={{
              color: "hsl(0, 0%, 100%)",
              textShadow: "0 0 20px hsla(0, 0%, 100%, 0.4), 0 0 40px hsla(0, 0%, 100%, 0.2)",
            }}
          >
            Discover the pearl of the Deccan
          </p>
          
          {/* Hyderabad Snapshot */}
          <h2 
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 sm:mb-6"
            style={{
              color: "hsl(50 100% 55%)",
              textShadow: "0 0 25px hsla(50, 100%, 55%, 0.5), 0 0 50px hsla(50, 100%, 55%, 0.25)",
            }}
          >
            Hyderabad Snapshot
          </h2>
          
          {/* Creator Credit - Uniform white, increased size */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span 
              className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide"
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
              className="p-3 sm:p-3.5 rounded-full transition-all hover:scale-110"
              style={{
                background: "hsla(210, 100%, 60%, 0.15)",
                border: "1px solid hsl(210, 100%, 60%)",
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
