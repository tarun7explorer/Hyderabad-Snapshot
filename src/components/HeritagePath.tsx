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

  // Organic winding path coordinates
  const pathD = `
    M 50 0
    C 50 100, 80 150, 50 200
    S 20 300, 50 350
    C 80 400, 80 500, 50 550
    S 20 650, 50 700
    C 80 750, 80 850, 50 900
    S 20 1000, 50 1050
    C 80 1100, 50 1200, 50 1250
  `;

  // Node positions along the path (percentage-based)
  const nodePositions = [
    { x: 50, y: 100 },
    { x: 50, y: 275 },
    { x: 50, y: 450 },
    { x: 50, y: 625 },
    { x: 50, y: 800 },
    { x: 50, y: 975 },
    { x: 50, y: 1150 },
  ];

  return (
    <div ref={containerRef} className="relative w-full py-20">
      {/* Background glow following progress */}
      <motion.div
        className="fixed left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-nizam-gold/20 blur-3xl pointer-events-none z-0"
        style={{
          top: `${30 + scrollProgress * 40}%`,
          opacity: 0.3 + scrollProgress * 0.4,
        }}
      />

      <div className="max-w-lg mx-auto relative" style={{ height: "1300px" }}>
        {/* SVG Path */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 1250"
          preserveAspectRatio="none"
        >
          {/* Background path */}
          <path
            d={pathD}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Animated path */}
          <motion.path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength * (1 - scrollProgress)}
            style={{
              filter: "drop-shadow(0 0 8px hsl(45, 90%, 45%))",
            }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(45, 90%, 55%)" />
              <stop offset="50%" stopColor="hsl(195, 100%, 50%)" />
              <stop offset="100%" stopColor="hsl(45, 90%, 55%)" />
            </linearGradient>
          </defs>
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
