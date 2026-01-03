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
      {/* Hero Section - no margin/padding at bottom */}
      <div className="relative" style={{ marginBottom: 0, paddingBottom: 0 }}>
        <HeroSection />
      </div>

      {/* Black Section Container - zero gap from hero */}
      <div 
        className="relative"
        style={{ 
          background: "hsl(0 0% 2%)",
          marginTop: 0,
          paddingTop: 0,
        }}
      >
        {/* Unified Journey Component - Begin Journey + Bridge + Path Start */}
        <div 
          className="relative z-30 flex flex-col items-center"
          style={{ 
            marginTop: "-80px",
            position: "relative",
          }}
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
          </motion.button>
          
          {/* Physical Bridge Line - NO GAP, starts inside arrow, merges with path */}
          <motion.div
            className="w-2 relative"
            style={{
              height: "200px",
              marginTop: "-16px",
              background: "linear-gradient(to bottom, hsl(50 100% 55%) 0%, hsl(45 100% 52%) 15%, hsl(35 100% 50%) 40%, hsl(25 100% 50%) 100%)",
              borderRadius: "4px",
              boxShadow: `
                0 0 15px hsl(25 100% 50% / 1),
                0 0 30px hsl(25 100% 50% / 0.9),
                0 0 60px hsl(25 100% 50% / 0.6),
                0 0 100px hsl(25 100% 50% / 0.4),
                0 0 150px hsl(25 100% 50% / 0.25)
              `,
            }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
          >
            {/* Flowing energy pulse inside bridge */}
            <motion.div
              className="absolute left-0 right-0 h-10 rounded-full"
              style={{
                background: "linear-gradient(to bottom, transparent, hsl(50 100% 70% / 0.9), transparent)",
              }}
              animate={{
                top: ["-40px", "200px"],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
                delay: 3,
              }}
            />
          </motion.div>
        </div>

        {/* Glow Road - Desktop (zero margin, connects directly to bridge) */}
        <section className="hidden md:block" style={{ marginTop: "-8px" }}>
          <GlowRoad
            onCardClick={handleCardClick}
            activeSection={selectedSection?.id || null}
          />
        </section>

        {/* Mobile Timeline */}
        <section className="md:hidden" style={{ marginTop: "-8px" }}>
          <MobileTimeline
            onNodeClick={handleCardClick}
            activeSection={selectedSection?.id || null}
          />
        </section>

        {/* Final Destination - Unified Path + Flashcard Container (ZERO GAP, Physical Merger) */}
        <div 
          className="relative z-20 flex flex-col items-center pb-16 sm:pb-24"
          style={{ gap: 0, margin: 0, padding: 0 }}
        >
          {/* Unified Path-to-Card Connection Wrapper */}
          <div className="relative flex flex-col items-center" style={{ margin: 0, padding: 0 }}>
            {/* Pink path line - extends INTO the terminal node */}
            <div
              className="w-1.5"
              style={{
                height: "100px",
                background: "linear-gradient(to bottom, hsl(330 100% 60%) 0%, hsl(330 100% 55%) 100%)",
                borderRadius: "4px 4px 0 0",
                boxShadow: `
                  0 0 15px hsl(330 100% 60% / 1),
                  0 0 30px hsl(330 100% 55% / 0.8),
                  0 0 50px hsl(330 100% 50% / 0.5),
                  0 0 80px hsl(330 100% 50% / 0.3)
                `,
                marginBottom: "-12px", /* Extends INTO the terminal node */
                zIndex: 30,
              }}
            />
            
            {/* Energy flow animation in the line */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-1.5 h-8 rounded-full pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent, hsl(330 100% 80% / 0.9), transparent)",
                zIndex: 31,
              }}
              animate={{ top: ["-32px", "88px"] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Terminal Node - Exact center of flashcard top border */}
            <motion.div
              className="relative z-40 flex items-center justify-center"
              style={{ marginBottom: "-12px" }} /* Node overlaps INTO flashcard border */
            >
              <motion.div
                className="w-6 h-6 rounded-full"
                style={{
                  background: "radial-gradient(circle at 30% 30%, hsl(330 100% 80%), hsl(330 100% 55%))",
                  boxShadow: `
                    0 0 15px hsl(330 100% 60% / 1),
                    0 0 30px hsl(330 100% 55% / 1),
                    0 0 50px hsl(330 100% 50% / 0.7),
                    0 0 80px hsl(330 100% 50% / 0.5)
                  `,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    `0 0 15px hsl(330 100% 60% / 1), 0 0 30px hsl(330 100% 55% / 1), 0 0 50px hsl(330 100% 50% / 0.7), 0 0 80px hsl(330 100% 50% / 0.5)`,
                    `0 0 25px hsl(330 100% 60% / 1), 0 0 50px hsl(330 100% 55% / 1), 0 0 80px hsl(330 100% 50% / 0.9), 0 0 120px hsl(330 100% 50% / 0.6)`,
                    `0 0 15px hsl(330 100% 60% / 1), 0 0 30px hsl(330 100% 55% / 1), 0 0 50px hsl(330 100% 50% / 0.7), 0 0 80px hsl(330 100% 50% / 0.5)`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Outer pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: "2px solid hsl(330 100% 60%)" }}
                animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              />
            </motion.div>
            
            {/* Glassmorphism Flashcard - shares same vertical space with node */}
            <motion.div
              className="relative mx-4 sm:mx-8 max-w-xl w-full flex flex-col items-center"
              style={{ zIndex: 20 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div
                className="relative w-full px-6 py-10 sm:px-10 sm:py-14 rounded-2xl text-center overflow-hidden"
                style={{
                  background: "hsla(0, 0%, 8%, 0.75)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "2px solid hsl(330 100% 55%)", /* Exact match to path color */
                  boxShadow: `
                    0 -12px 40px hsl(330 100% 55% / 0.5),
                    0 0 50px hsl(330 100% 55% / 0.3),
                    0 0 100px hsl(330 100% 50% / 0.2),
                    inset 0 0 50px hsl(330 100% 55% / 0.1)
                  `,
                }}
              >
                {/* Glow bloom on top edge - path energy spilling into box */}
                <div
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-48 h-12 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at center top, hsl(330 100% 60% / 0.7) 0%, hsl(330 100% 55% / 0.3) 40%, transparent 70%)",
                    filter: "blur(12px)",
                  }}
                />
                
                {/* Inner glow gradient */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at center top, hsl(330 100% 60% / 0.15) 0%, transparent 50%)",
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10 pt-2">
                  <p
                    className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 font-light tracking-wide"
                    style={{
                      color: "hsl(0, 0%, 95%)",
                      textShadow: "0 0 20px hsla(0, 0%, 100%, 0.2)",
                    }}
                  >
                    Many things are yet to be explored in Hyderabad.
                  </p>
                  <p
                    className="text-xl sm:text-2xl md:text-3xl font-serif italic"
                    style={{
                      color: "hsl(0, 0%, 100%)",
                      textShadow: `
                        0 0 20px hsla(330, 100%, 70%, 0.4),
                        0 0 40px hsla(330, 100%, 60%, 0.2)
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
      </div>

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
