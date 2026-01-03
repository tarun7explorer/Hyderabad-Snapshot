import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { sections } from "@/data/hyderabadContent";
import FeatureCard from "./FeatureCard";

interface GlowRoadProps {
  onCardClick: (sectionId: string) => void;
  activeSection: string | null;
}

const GlowRoad = ({ onCardClick, activeSection }: GlowRoadProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pathLength, setPathLength] = useState(0);
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

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  // Current section's glow color
  const currentGlowColor = useMemo(() => {
    return sections[currentSectionIndex]?.glowColor || "hsl(45, 90%, 53%)";
  }, [currentSectionIndex]);

  // Extended organic path for 6 sections (removed Infrastructure)
  const pathD = `
    M 50 0
    C 25 80, 75 120, 50 200
    Q 20 280, 50 360
    C 80 440, 85 520, 50 600
    Q 15 680, 45 760
    C 80 840, 75 920, 50 1000
    Q 20 1080, 50 1160
    C 80 1240, 70 1320, 50 1400
    Q 25 1480, 50 1560
    C 75 1640, 80 1720, 50 1800
    Q 20 1880, 50 1960
    L 50 2100
  `;

  // Position cards along the road - 6 sections
  const cardPositions = [
    { y: 150 },
    { y: 480 },
    { y: 810 },
    { y: 1140 },
    { y: 1470 },
    { y: 1800 },
  ];

  return (
    <div ref={containerRef} className="relative w-full pt-0 pb-12 sm:pb-16 md:pb-32 overflow-x-hidden px-4 sm:px-6">
      {/* Ambient background glow that follows scroll - reduced on mobile */}
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

      <div className="max-w-6xl mx-auto relative px-4" style={{ height: "2200px" }}>
        {/* The Eternal Glow Road SVG */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2" style={{ height: "2100px", width: "200px" }}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 2100"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Dynamic gradient based on current section */}
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                {sections.map((section, i) => (
                  <stop
                    key={section.id}
                    offset={`${(i / (sections.length - 1)) * 100}%`}
                    stopColor={section.glowColor}
                  />
                ))}
              </linearGradient>

              {/* Intense neon glow filter */}
              <filter id="neonGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="4" result="blur1" />
                <feGaussianBlur stdDeviation="8" result="blur2" />
                <feGaussianBlur stdDeviation="16" result="blur3" />
                <feMerge>
                  <feMergeNode in="blur3" />
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Animated energy pulse */}
              <linearGradient id="energyPulse" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="transparent">
                  <animate attributeName="offset" values="-0.3;1.3" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="10%" stopColor="white" stopOpacity="0.9">
                  <animate attributeName="offset" values="-0.2;1.4" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="20%" stopColor="transparent">
                  <animate attributeName="offset" values="-0.1;1.5" dur="3s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>

              {/* Road bed (dark shadow) - ALWAYS VISIBLE - thinner on mobile */}
            <path
              d={pathD}
              fill="none"
              stroke="hsl(0 0% 8%)"
              strokeWidth="16"
              strokeLinecap="round"
              className="md:[stroke-width:24]"
            />

            {/* Outer glow layer - ALWAYS LIT - reduced glow on mobile */}
            <path
              d={pathD}
              fill="none"
              stroke="url(#roadGradient)"
              strokeWidth="10"
              strokeLinecap="round"
              style={{ filter: "blur(8px)" }}
              opacity={0.3}
              className="md:[stroke-width:16] md:opacity-40"
            />

            {/* Main glowing road - core - ALWAYS LIT - thinner on mobile */}
            <path
              ref={pathRef}
              d={pathD}
              fill="none"
              stroke="url(#roadGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#neonGlow)"
              className="md:[stroke-width:8]"
            />

            {/* Bright center line - ALWAYS LIT */}
            <path
              d={pathD}
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              opacity={0.5}
              className="md:[stroke-width:2] md:opacity-60"
            />

            {/* Energy pulse traveling along the road */}
            <motion.path
              d={pathD}
              fill="none"
              stroke="url(#energyPulse)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Floating particles along the path */}
            {[0.1, 0.25, 0.4, 0.55, 0.7, 0.85].map((offset, i) => (
              <motion.circle
                key={i}
                r="5"
                fill="white"
                filter="url(#neonGlow)"
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              >
                <animateMotion dur={`${5 + i}s`} repeatCount="indefinite" path={pathD} />
              </motion.circle>
            ))}

            {/* Section markers (glowing nodes with pulsing halos) */}
            {cardPositions.map((pos, i) => {
              const pathProgress = pos.y / 2100;
              const isReached = scrollProgress >= pathProgress - 0.05;
              const isActive = currentSectionIndex === i;
              const section = sections[i];
              if (!section) return null;

              return (
                <g key={i}>
                  {/* Outer pulsing halo - for active node */}
                  {isActive && (
                    <>
                      <motion.circle
                        cx="50"
                        cy={pos.y + 50}
                        r="30"
                        fill="none"
                        stroke={section.glowColor}
                        strokeWidth="2"
                        initial={{ scale: 0.8, opacity: 0.8 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.circle
                        cx="50"
                        cy={pos.y + 50}
                        r="25"
                        fill="none"
                        stroke={section.glowColor}
                        strokeWidth="1.5"
                        initial={{ scale: 0.9, opacity: 0.6 }}
                        animate={{ scale: 1.3, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                      />
                    </>
                  )}
                  
                  {/* Reached pulse ring */}
                  {isReached && !isActive && (
                    <motion.circle
                      cx="50"
                      cy={pos.y + 50}
                      r="20"
                      fill="none"
                      stroke={section.glowColor}
                      strokeWidth="1"
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{ scale: 1.8, opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  
                  {/* Main node */}
                  <motion.circle
                    cx="50"
                    cy={pos.y + 50}
                    r={isActive ? 14 : isReached ? 10 : 6}
                    fill={isReached ? section.glowColor : "hsl(0 0% 15%)"}
                    filter={isReached ? "url(#neonGlow)" : undefined}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Inner bright core */}
                  {isReached && (
                    <circle 
                      cx="50" 
                      cy={pos.y + 50} 
                      r={isActive ? 6 : 4} 
                      fill="white" 
                      opacity="0.95" 
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Feature Cards positioned along the road */}
        {sections.map((section, index) => {
          const isEven = index % 2 === 0;
          const position = cardPositions[index];
          if (!position) return null;
          
          const pathProgress = position.y / 2100;
          const isActive = scrollProgress >= pathProgress - 0.05;

          return (
            <div
              key={section.id}
              className="absolute w-full"
              style={{
                top: position.y,
                paddingLeft: isEven ? "0" : "50%",
                paddingRight: isEven ? "50%" : "0",
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
