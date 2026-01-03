import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { sections } from "@/data/hyderabadContent";
import PathNode from "./PathNode";

interface HeritagePathProps {
  onNodeClick: (sectionId: string) => void;
  activeSection: string | null;
}

const HeritagePath = ({ onNodeClick, activeSection }: HeritagePathProps) => {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerTop = rect.top;
      const containerHeight = rect.height;
      
      // Calculate progress based on how much of the container has been scrolled through
      const scrolled = windowHeight - containerTop;
      const totalScrollable = containerHeight + windowHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // More organic, river-like winding path coordinates
  const pathD = `
    M 50 0
    C 30 50, 70 80, 55 120
    Q 35 160, 50 200
    C 75 240, 80 280, 55 320
    Q 25 360, 45 400
    C 70 440, 75 500, 50 550
    Q 20 600, 40 650
    C 65 700, 70 760, 50 800
    Q 25 840, 45 890
    C 70 940, 65 1000, 50 1050
    Q 30 1100, 45 1150
    C 60 1200, 50 1250, 50 1280
  `;

  // Node positions along the path (percentage-based)
  const nodePositions = [
    { x: 55, y: 120 },
    { x: 50, y: 300 },
    { x: 50, y: 480 },
    { x: 50, y: 660 },
    { x: 48, y: 840 },
    { x: 50, y: 1020 },
    { x: 48, y: 1180 },
  ];

  return (
    <div ref={containerRef} className="relative w-full py-20">
      {/* Background glow following progress */}
      <motion.div
        className="fixed left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          top: `${30 + scrollProgress * 40}%`,
          opacity: 0.2 + scrollProgress * 0.3,
          background: `radial-gradient(circle, hsl(var(--nizam-gold) / 0.4) 0%, hsl(var(--cyber-blue) / 0.2) 50%, transparent 70%)`,
        }}
      />

      <div className="max-w-lg mx-auto relative" style={{ height: "1350px" }}>
        {/* SVG Path */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 1280"
          preserveAspectRatio="none"
        >
          {/* Gradient definitions */}
          <defs>
            {/* Main river gradient */}
            <linearGradient id="riverGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(45, 90%, 55%)" />
              <stop offset="25%" stopColor="hsl(195, 100%, 50%)" />
              <stop offset="50%" stopColor="hsl(45, 90%, 60%)" />
              <stop offset="75%" stopColor="hsl(195, 100%, 45%)" />
              <stop offset="100%" stopColor="hsl(45, 90%, 55%)" />
            </linearGradient>
            
            {/* Glow filter */}
            <filter id="riverGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood floodColor="hsl(45, 90%, 55%)" floodOpacity="0.6" />
              <feComposite in2="blur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Animated shimmer */}
            <linearGradient id="shimmer" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent">
                <animate attributeName="offset" values="-0.5;1.5" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="25%" stopColor="hsl(45, 100%, 70%)">
                <animate attributeName="offset" values="-0.25;1.75" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="transparent">
                <animate attributeName="offset" values="0;2" dur="3s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>

          {/* Background path (river bed) */}
          <path
            d={pathD}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.3"
          />
          
          {/* Main animated river path */}
          <motion.path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="url(#riverGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength * (1 - scrollProgress)}
            filter="url(#riverGlow)"
          />

          {/* Shimmer overlay */}
          <motion.path
            d={pathD}
            fill="none"
            stroke="url(#shimmer)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength * (1 - scrollProgress)}
            opacity={0.7}
          />

          {/* Flowing particles along the path */}
          {[0.1, 0.3, 0.5, 0.7, 0.9].map((offset, i) => (
            <motion.circle
              key={i}
              r="3"
              fill="hsl(45, 90%, 70%)"
              filter="url(#riverGlow)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: scrollProgress > offset ? [0, 1, 0] : 0,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              <animateMotion
                dur={`${3 + i}s`}
                repeatCount="indefinite"
                path={pathD}
              />
            </motion.circle>
          ))}
        </svg>

        {/* Nodes */}
        {sections.map((section, index) => {
          const position = nodePositions[index];
          const nodeProgress = (index + 1) / sections.length;
          const isActive = scrollProgress >= nodeProgress - 0.1;
          const isSelected = activeSection === section.id;

          return (
            <PathNode
              key={section.id}
              section={section}
              position={position}
              isActive={isActive}
              isSelected={isSelected}
              onClick={() => onNodeClick(section.id)}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeritagePath;
