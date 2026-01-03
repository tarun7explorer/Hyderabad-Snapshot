import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { sections } from "@/data/hyderabadContent";

interface UnifiedGlowPathProps {
  scrollProgress: number;
  currentSectionIndex: number;
}

const UnifiedGlowPath = ({ scrollProgress, currentSectionIndex }: UnifiedGlowPathProps) => {
  const pathRef = useRef<SVGPathElement>(null);

  // Single continuous path from start (Begin Journey) through all sections to finale
  // Total height: 200 (bridge) + 2100 (main road) + 150 (finale) = 2450
  const unifiedPathD = `
    M 50 0
    L 50 200
    C 50 220, 35 260, 35 310
    S 65 410, 50 480
    C 35 550, 30 610, 50 680
    S 70 750, 65 820
    C 60 890, 35 960, 50 1030
    S 65 1100, 50 1170
    C 35 1240, 40 1310, 50 1380
    S 60 1450, 65 1520
    C 70 1590, 35 1660, 50 1730
    S 65 1800, 50 1870
    C 35 1940, 45 2010, 50 2080
    L 50 2300
    L 50 2450
  `;

  // Card positions aligned with path curves
  const cardPositions = [
    { y: 380 },
    { y: 700 },
    { y: 1020 },
    { y: 1340 },
    { y: 1660 },
    { y: 1980 },
  ];

  return (
    <div 
      className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
      style={{ 
        top: 0,
        height: "2450px", 
        width: "200px", 
        zIndex: 0 
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 100 2450"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Extended gradient from golden start through all sections to pink finale */}
          <linearGradient id="unifiedRoadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            {/* Golden/Yellow start (Begin Journey) */}
            <stop offset="0%" stopColor="hsl(50 100% 55%)" />
            <stop offset="4%" stopColor="hsl(45 100% 52%)" />
            <stop offset="8%" stopColor="hsl(30 100% 50%)" />
            {/* Section colors */}
            {sections.map((section, i) => (
              <stop
                key={section.id}
                offset={`${10 + (i / (sections.length - 1)) * 80}%`}
                stopColor={section.glowColor}
              />
            ))}
            {/* Pink finale */}
            <stop offset="95%" stopColor="hsl(330 100% 55%)" />
            <stop offset="100%" stopColor="hsl(330 100% 55%)" />
          </linearGradient>

          {/* Intense neon glow filter */}
          <filter id="unifiedNeonGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="6" result="blur2" />
            <feGaussianBlur stdDeviation="12" result="blur3" />
            <feMerge>
              <feMergeNode in="blur3" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Animated energy pulse */}
          <linearGradient id="unifiedEnergyPulse" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent">
              <animate attributeName="offset" values="-0.15;1.15" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="5%" stopColor="white" stopOpacity="0.95">
              <animate attributeName="offset" values="-0.1;1.2" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="10%" stopColor="transparent">
              <animate attributeName="offset" values="-0.05;1.25" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>

        {/* Road bed (dark shadow) - continuous */}
        <path
          d={unifiedPathD}
          fill="none"
          stroke="hsl(0 0% 6%)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Outer glow layer - continuous */}
        <path
          d={unifiedPathD}
          fill="none"
          stroke="url(#unifiedRoadGradient)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "blur(10px)" }}
          opacity={0.35}
        />

        {/* Main glowing road - continuous core */}
        <path
          ref={pathRef}
          d={unifiedPathD}
          fill="none"
          stroke="url(#unifiedRoadGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#unifiedNeonGlow)"
        />

        {/* Bright white center line - continuous */}
        <path
          d={unifiedPathD}
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.6}
        />

        {/* Energy pulse traveling along entire road */}
        <motion.path
          d={unifiedPathD}
          fill="none"
          stroke="url(#unifiedEnergyPulse)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Floating particles along the entire path */}
        {[0.08, 0.2, 0.35, 0.5, 0.65, 0.8, 0.92].map((offset, i) => (
          <motion.circle
            key={i}
            r="4"
            fill="white"
            filter="url(#unifiedNeonGlow)"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <animateMotion dur={`${6 + i * 0.8}s`} repeatCount="indefinite" path={unifiedPathD} />
          </motion.circle>
        ))}

        {/* Start node (Begin Journey anchor) */}
        <motion.circle
          cx="50"
          cy="10"
          r="8"
          fill="hsl(50 100% 55%)"
          filter="url(#unifiedNeonGlow)"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx="50" cy="10" r="3" fill="white" opacity="0.9" />

        {/* Section markers (glowing nodes with pulsing halos) */}
        {cardPositions.map((pos, i) => {
          const pathProgress = pos.y / 2450;
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
                    r="25"
                    fill="none"
                    stroke={section.glowColor}
                    strokeWidth="2"
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 1.6, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.circle
                    cx="50"
                    cy={pos.y + 50}
                    r="20"
                    fill="none"
                    stroke={section.glowColor}
                    strokeWidth="1.5"
                    initial={{ scale: 0.9, opacity: 0.6 }}
                    animate={{ scale: 1.4, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  />
                </>
              )}
              
              {/* Reached pulse ring */}
              {isReached && !isActive && (
                <motion.circle
                  cx="50"
                  cy={pos.y + 50}
                  r="18"
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
                r={isActive ? 12 : isReached ? 9 : 6}
                fill={isReached ? section.glowColor : "hsl(0 0% 15%)"}
                filter={isReached ? "url(#unifiedNeonGlow)" : undefined}
                transition={{ duration: 0.3 }}
              />
              
              {/* Inner bright core */}
              {isReached && (
                <circle 
                  cx="50" 
                  cy={pos.y + 50} 
                  r={isActive ? 5 : 3.5} 
                  fill="white" 
                  opacity="0.95" 
                />
              )}
            </g>
          );
        })}

        {/* Finale terminal node */}
        <motion.circle
          cx="50"
          cy="2350"
          r="12"
          fill="hsl(330 100% 60%)"
          filter="url(#unifiedNeonGlow)"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="50"
          cy="2350"
          r="20"
          fill="none"
          stroke="hsl(330 100% 60%)"
          strokeWidth="2"
          animate={{ scale: [1, 2], opacity: [0.8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
        <circle cx="50" cy="2350" r="5" fill="white" opacity="0.9" />
      </svg>
    </div>
  );
};

export default UnifiedGlowPath;
