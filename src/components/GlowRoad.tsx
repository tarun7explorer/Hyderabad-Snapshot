import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { sections } from "@/data/hyderabadContent";
import FeatureCard from "./FeatureCard";
import UnifiedGlowPath from "./UnifiedGlowPath";

interface GlowRoadProps {
  onCardClick: (sectionId: string) => void;
  activeSection: string | null;
}

const GlowRoad = ({ onCardClick, activeSection }: GlowRoadProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // Calculate which section we're in based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
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

  // Current section's glow color
  const currentGlowColor = useMemo(() => {
    return sections[currentSectionIndex]?.glowColor || "hsl(45, 90%, 53%)";
  }, [currentSectionIndex]);

  // Card positions aligned with unified path - increased spacing for galleries
  const cardPositions = [
    { y: 180 },
    { y: 700 },
    { y: 1220 },
    { y: 1740 },
    { y: 2260 },
    { y: 2780 },
  ];

  return (
    <div ref={containerRef} className="relative w-full pt-0 pb-12 sm:pb-16 md:pb-32 overflow-x-hidden px-4 sm:px-6">
      {/* Ambient background glow that follows scroll */}
      <motion.div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle, ${currentGlowColor}10 0%, ${currentGlowColor}03 40%, transparent 70%)`,
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative px-4" style={{ height: "3400px" }}>
        {/* Feature Cards positioned along the road */}
        {sections.map((section, index) => {
          const isEven = index % 2 === 0;
          const position = cardPositions[index];
          if (!position) return null;
          
          const pathProgress = position.y / 2200;
          const isActive = scrollProgress >= pathProgress - 0.05;

          return (
            <div
              key={section.id}
              className="absolute w-full"
              style={{
                top: position.y,
                paddingLeft: isEven ? "0" : "50%",
                paddingRight: isEven ? "50%" : "0",
                zIndex: 10,
              }}
            >
              <div className={`px-4 ${isEven ? "pr-24" : "pl-24"}`}>
                <FeatureCard
                  section={section}
                  index={index}
                  onClick={() => onCardClick(section.id)}
                  isActive={isActive}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlowRoad;
