import { motion } from "framer-motion";
import { Section } from "@/data/hyderabadContent";

interface PathNodeProps {
  section: Section;
  position: { x: number; y: number };
  isActive: boolean;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

const PathNode = ({ section, position, isActive, isSelected, onClick, index }: PathNodeProps) => {
  const isEven = index % 2 === 0;

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
          {/* Pulse ring for selected */}
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
              transition-all duration-300 border-2
              ${isActive 
                ? "bg-background border-nizam-gold shadow-lg shadow-nizam-gold/30" 
                : "bg-muted border-muted-foreground/30"
              }
              ${isSelected ? "ring-4 ring-nizam-gold/50" : ""}
            `}
            whileTap={{ scale: 0.95 }}
          >
            <span>{section.icon}</span>
          </motion.div>

          {/* Glow effect */}
          {isActive && (
            <div 
              className="absolute inset-0 rounded-full blur-md -z-10"
              style={{ backgroundColor: section.accentColor, opacity: 0.3 }}
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
