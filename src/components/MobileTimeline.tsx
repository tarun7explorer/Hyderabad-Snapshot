import { motion } from "framer-motion";
import { sections } from "@/data/hyderabadContent";

interface MobileTimelineProps {
  onNodeClick: (sectionId: string) => void;
  activeSection: string | null;
}

const MobileTimeline = ({ onNodeClick, activeSection }: MobileTimelineProps) => {
  return (
    <div className="relative py-10 px-4">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-nizam-gold via-cyber-blue to-nizam-gold" />

      <div className="space-y-8">
        {sections.map((section, index) => {
          const isSelected = activeSection === section.id;

          return (
            <motion.div
              key={section.id}
              className="relative pl-16"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Node circle */}
              <div 
                className={`
                  absolute left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center
                  bg-background border-2 transition-all cursor-pointer
                  ${isSelected 
                    ? "border-nizam-gold shadow-lg shadow-nizam-gold/30 scale-110" 
                    : "border-muted-foreground/50"
                  }
                `}
                onClick={() => onNodeClick(section.id)}
              >
                <span className="text-sm">{section.icon}</span>
              </div>

              {/* Content card */}
              <motion.div
                className={`
                  p-4 rounded-xl bg-card border transition-all cursor-pointer
                  ${isSelected 
                    ? "border-nizam-gold/50 shadow-lg" 
                    : "border-border hover:border-muted-foreground/50"
                  }
                `}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNodeClick(section.id)}
              >
                <h3 
                  className="font-serif text-lg font-semibold mb-1"
                  style={{ color: section.accentColor }}
                >
                  {section.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {section.items.length} places to explore
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileTimeline;
