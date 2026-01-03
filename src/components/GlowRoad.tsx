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

  // More organic, winding path
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
    C 75 2040, 70 2120, 50 2200
    Q 30 2280, 50 2340
  `;

  // Position cards along the road
  const cardPositions = [
    { y: 150 },
    { y: 480 },
    { y: 810 },
    { y: 1140 },
    { y: 1470 },
    { y: 1800 },
    { y: 2130 },
  ];

  return (
    <div ref={containerRef} className="relative w-full py-32">
      {/* Ambient background glow that follows scroll */}
      <motion.div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle, ${currentGlowColor}15 0%, ${currentGlowColor}05 40%, transparent 70%)`,
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative px-4" style={{ height: "2500px" }}>
        {/* The Glow Road SVG */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2" style={{ height: "2400px", width: "200px" }}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 2340"
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

              {/* Intense neon glow */}
              <filter id="neonGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="4" result="blur1" />
                <feGaussianBlur stdDeviation="8" result="blur2" />
                <feGaussianBlur stdDeviation="12" result="blur3" />
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
                  <animate attributeName="offset" values="-0.3;1.3" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="15%" stopColor="white" stopOpacity="0.8">
                  <animate attributeName="offset" values="-0.15;1.45" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="30%" stopColor="transparent">
                  <animate attributeName="offset" values="0;1.6" dur="2s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>

            {/* Road bed (dark shadow) */}
            <path
              d={pathD}
              fill="none"
              stroke="hsl(0 0% 5%)"
              strokeWidth="20"
              strokeLinecap="round"
            />

            {/* Main glowing road - outer glow */}
            <motion.path
              d={pathD}
              fill="none"
              stroke={currentGlowColor}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={pathLength}
              strokeDashoffset={pathLength * (1 - scrollProgress)}
              style={{ filter: "blur(8px)" }}
              opacity={0.6}
            />

            {/* Main glowing road - core */}
            <motion.path
              ref={pathRef}
              d={pathD}
              fill="none"
              stroke="url(#roadGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={pathLength}
              strokeDashoffset={pathLength * (1 - scrollProgress)}
              filter="url(#neonGlow)"
            />

            {/* Bright center line */}
            <motion.path
              d={pathD}
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={pathLength}
              strokeDashoffset={pathLength * (1 - scrollProgress)}
              opacity={0.8}
            />

            {/* Energy pulse traveling along the road */}
            <motion.path
              d={pathD}
              fill="none"
              stroke="url(#energyPulse)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={pathLength}
              strokeDashoffset={pathLength * (1 - scrollProgress)}
            />

            {/* Floating particles along the path */}
            {[0.15, 0.35, 0.55, 0.75, 0.95].map((offset, i) => (
              <motion.circle
                key={i}
                r="4"
                fill="white"
                filter="url(#neonGlow)"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: scrollProgress > offset - 0.1 ? [0, 1, 0] : 0,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                <animateMotion dur={`${4 + i}s`} repeatCount="indefinite" path={pathD} />
              </motion.circle>
            ))}

            {/* Section markers (glowing nodes on the path) */}
            {cardPositions.map((pos, i) => {
              const pathProgress = pos.y / 2340;
              const isReached = scrollProgress >= pathProgress - 0.1;
              const section = sections[i];

              return (
                <g key={i}>
                  {/* Outer pulse ring */}
                  {isReached && (
                    <motion.circle
                      cx="50"
                      cy={pos.y + 50}
                      r="20"
                      fill="none"
                      stroke={section.glowColor}
                      strokeWidth="2"
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                  {/* Main node */}
                  <motion.circle
                    cx="50"
                    cy={pos.y + 50}
                    r={isReached ? 10 : 6}
                    fill={isReached ? section.glowColor : "hsl(0 0% 20%)"}
                    filter={isReached ? "url(#neonGlow)" : undefined}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Inner bright core */}
                  {isReached && (
                    <circle cx="50" cy={pos.y + 50} r="4" fill="white" opacity="0.9" />
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
          const pathProgress = position.y / 2340;
          const isActive = scrollProgress >= pathProgress - 0.1;

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
