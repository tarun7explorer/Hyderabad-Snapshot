import { motion } from "framer-motion";
import { sections } from "@/data/hyderabadContent";

interface MobileTimelineProps {
  onNodeClick: (sectionId: string) => void;
  activeSection: string | null;
}

const MobileTimeline = ({ onNodeClick, activeSection }: MobileTimelineProps) => {
  return (
    <div className="relative py-12 px-4 sm:px-6 overflow-x-hidden">
      {/* Glowing timeline line - reduced glow intensity on mobile */}
      <div 
        className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 rounded-full"
        style={{
          background: "linear-gradient(to bottom, hsl(45 90% 53%), hsl(195 100% 50%), hsl(45 90% 53%))",
          boxShadow: "0 0 12px hsl(45 90% 53% / 0.4), 0 0 24px hsl(195 100% 50% / 0.2)",
        }}
      />

      <div className="space-y-8">
        {sections.map((section, index) => {
          const isSelected = activeSection === section.id;

          return (
          <motion.div
              key={section.id}
              className="relative pl-16 sm:pl-20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Glowing node */}
              <motion.div
                className="absolute left-2 sm:left-4 top-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  background: isSelected 
                    ? section.accentColor 
                    : "hsla(0, 0%, 100%, 0.05)",
                  border: `2px solid ${isSelected ? section.accentColor : "hsla(0, 0%, 100%, 0.2)"}`,
                  boxShadow: isSelected 
                    ? `0 0 20px ${section.accentColor}, 0 0 40px ${section.accentColor}50`
                    : "none",
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onNodeClick(section.id)}
              >
                <span className="text-base sm:text-lg">{section.icon}</span>
              </motion.div>

              {/* Glassmorphic content card */}
              <motion.div
                className="overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer max-w-full"
                style={{
                  background: "hsla(0, 0%, 100%, 0.03)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: isSelected 
                    ? `1px solid ${section.accentColor}50`
                    : "1px solid hsla(0, 0%, 100%, 0.1)",
                  boxShadow: isSelected 
                    ? `0 0 30px ${section.accentColor}20`
                    : "none",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNodeClick(section.id)}
              >
                {/* Image */}
                <div className="relative h-36 sm:h-40 overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Enhanced gradient overlay for readability */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, hsl(0 0% 2%) 0%, hsl(0 0% 2% / 0.7) 50%, transparent 80%)`,
                    }}
                  />
                </div>

                {/* Content with enhanced readability */}
                <div 
                  className="p-4 sm:p-5"
                  style={{
                    background: "linear-gradient(to top, hsl(0 0% 4% / 0.95) 0%, hsl(0 0% 4% / 0.8) 100%)",
                  }}
                >
                  <h3
                    className="font-serif text-lg sm:text-xl font-bold mb-2"
                    style={{ 
                      color: section.accentColor,
                      textShadow: `0 0 15px ${section.accentColor}50`,
                    }}
                  >
                    {section.title}
                  </h3>
                  <p 
                    className="text-xs sm:text-sm line-clamp-2"
                    style={{
                      color: "hsl(0, 0%, 100%)",
                      lineHeight: 1.7,
                    }}
                  >
                    {section.tagline}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileTimeline;
