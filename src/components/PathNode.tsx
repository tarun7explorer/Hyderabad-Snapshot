import { motion } from "framer-motion";
import { Section } from "@/data/hyderabadContent";
import { useMemo } from "react";

interface PathNodeProps {
  section: Section;
  position: { x: number; y: number };
  isActive: boolean;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

// Generate random particles around the node
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    angle: (360 / count) * i,
    distance: 35 + Math.random() * 20,
    size: 2 + Math.random() * 3,
    duration: 2 + Math.random() * 2,
    delay: Math.random() * 2,
  }));
};

const PathNode = ({ section, position, isActive, isSelected, onClick, index }: PathNodeProps) => {
  const isEven = index % 2 === 0;
  const particles = useMemo(() => generateParticles(8), []);

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isActive ? 1 : 0.4, 
        scale: isActive ? 1 : 0.8 
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
    >
      <div className="relative flex items-center gap-4">
        {/* Node circle */}
        <div className="relative">
          {/* Orbiting particles */}
          {isActive && particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                backgroundColor: section.accentColor,
                left: "50%",
                top: "50%",
                marginLeft: -particle.size / 2,
                marginTop: -particle.size / 2,
                boxShadow: `0 0 ${particle.size * 2}px ${section.accentColor}`,
              }}
              animate={{
                x: [
                  Math.cos((particle.angle * Math.PI) / 180) * particle.distance,
                  Math.cos(((particle.angle + 360) * Math.PI) / 180) * particle.distance,
                ],
                y: [
                  Math.sin((particle.angle * Math.PI) / 180) * particle.distance,
                  Math.sin(((particle.angle + 360) * Math.PI) / 180) * particle.distance,
                ],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "linear",
              }}
            />
          ))}

          {/* Floating sparkles */}
          {isActive && [0, 1, 2].map((i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-nizam-gold"
              style={{
                left: "50%",
                top: "50%",
                boxShadow: "0 0 4px hsl(var(--nizam-gold))",
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 60],
                y: [-10, -50 - Math.random() * 30],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.7,
              }}
            />
          ))}

          {/* Pulse rings for active */}
          {isActive && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full border border-nizam-gold/50"
                animate={{
                  scale: [1, 1.8],
                  opacity: [0.6, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ margin: "-2px" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-cyber-blue/50"
                animate={{
                  scale: [1, 2],
                  opacity: [0.4, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                style={{ margin: "-2px" }}
              />
            </>
          )}

          {/* Selected pulse ring */}
          {isSelected && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-nizam-gold"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ margin: "-4px" }}
            />
          )}

          {/* Main node */}
          <motion.div
            className={`
              w-16 h-16 rounded-full flex items-center justify-center text-2xl
              transition-all duration-300 border-2 relative overflow-hidden
              ${isActive 
                ? "bg-background border-nizam-gold shadow-lg shadow-nizam-gold/30" 
                : "bg-muted border-muted-foreground/30"
              }
              ${isSelected ? "ring-4 ring-nizam-gold/50" : ""}
            `}
            whileTap={{ scale: 0.95 }}
          >
            {/* Inner glow */}
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle at center, ${section.accentColor}20 0%, transparent 70%)`,
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            <span className="relative z-10">{section.icon}</span>
          </motion.div>

          {/* Outer glow effect */}
          {isActive && (
            <motion.div 
              className="absolute inset-0 rounded-full blur-xl -z-10"
              style={{ backgroundColor: section.accentColor }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </div>

        {/* Label card */}
        <motion.div
          className={`
            absolute whitespace-nowrap px-4 py-2 rounded-lg
            bg-card/90 backdrop-blur-sm border border-border
            shadow-lg
            ${isEven ? "left-full ml-4" : "right-full mr-4"}
          `}
          initial={{ opacity: 0, x: isEven ? -10 : 10 }}
          animate={{ opacity: isActive ? 1 : 0, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 
            className="font-serif font-semibold text-lg"
            style={{ color: isActive ? section.accentColor : undefined }}
          >
            {section.title}
          </h3>
          <p className="text-xs text-muted-foreground">
            Click to explore
          </p>

          {/* Arrow pointer */}
          <div
            className={`
              absolute top-1/2 -translate-y-1/2 w-0 h-0
              border-t-8 border-b-8 border-transparent
              ${isEven 
                ? "-left-2 border-r-8 border-r-card/90" 
                : "-right-2 border-l-8 border-l-card/90"
              }
            `}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PathNode;
