import { motion } from "framer-motion";
import { Section } from "@/data/hyderabadContent";
import SectionGallery from "./SectionGallery";

interface FeatureCardProps {
  section: Section;
  index: number;
  onClick: () => void;
  isActive: boolean;
}

const FeatureCard = ({ section, index, onClick, isActive }: FeatureCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative ${isEven ? "" : ""}`}>
      <motion.div
        className={`relative flex items-start gap-8 ${isEven ? "flex-row" : "flex-row-reverse"}`}
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Card */}
        <motion.div
          className="relative w-full max-w-md cursor-pointer group"
          onClick={onClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          layoutId={`card-${section.id}`}
        >
          {/* Glassmorphic container */}
          <div 
            className="relative overflow-hidden rounded-2xl border transition-all duration-500"
            style={{
              background: "hsla(0, 0%, 100%, 0.03)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderColor: isActive ? section.accentColor : "hsla(0, 0%, 100%, 0.1)",
              boxShadow: isActive 
                ? `0 0 40px ${section.accentColor}40, 0 0 80px ${section.accentColor}20`
                : "0 4px 30px hsla(0, 0%, 0%, 0.3)",
            }}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <motion.img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                layoutId={`image-${section.id}`}
              />
              {/* Enhanced gradient overlay for text readability */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, hsl(0 0% 2%) 0%, hsl(0 0% 2% / 0.6) 40%, transparent 70%, ${section.accentColor}15 100%)`,
                }}
              />
              
              {/* Icon badge */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{
                  background: "hsla(0, 0%, 0%, 0.5)",
                  backdropFilter: "blur(8px)",
                  border: `1px solid ${section.accentColor}50`,
                  boxShadow: `0 0 20px ${section.accentColor}30`,
                }}
                layoutId={`icon-${section.id}`}
              >
                {section.icon}
              </motion.div>
            </div>

            {/* Content with enhanced readability */}
            <div 
              className="p-6 relative"
              style={{
                background: "linear-gradient(to top, hsl(0 0% 4% / 0.95) 0%, hsl(0 0% 4% / 0.8) 100%)",
              }}
            >
              <motion.h3
                className="font-serif text-2xl font-bold mb-3"
                style={{ 
                  color: section.accentColor,
                  textShadow: `0 0 20px ${section.accentColor}60`,
                }}
                layoutId={`title-${section.id}`}
              >
                {section.title}
              </motion.h3>
              <p 
                className="text-sm leading-relaxed line-clamp-2"
                style={{
                  color: "hsl(0, 0%, 100%)",
                  lineHeight: 1.7,
                }}
              >
                {section.tagline}
              </p>

              {/* Explore indicator */}
              <motion.div
                className="mt-4 flex items-center gap-2 text-xs uppercase tracking-wider"
                style={{ color: section.accentColor }}
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
              >
                <span>Explore</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.div>
            </div>

            {/* Border glow effect on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                border: `2px solid ${section.accentColor}`,
                opacity: 0,
              }}
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Connector to road (invisible spacer for alignment) */}
        <div className="flex-1" />
      </motion.div>

      {/* Gallery Section - Full width below the card */}
      <motion.div
        className="mt-6 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <SectionGallery
          items={section.items}
          accentColor={section.accentColor}
          glowColor={section.glowColor}
        />
      </motion.div>
    </div>
  );
};

export default FeatureCard;
