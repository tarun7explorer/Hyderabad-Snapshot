import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sections, Section } from "@/data/hyderabadContent";
import ChameleonHomeButton from "./ChameleonHomeButton";

interface DetailViewProps {
  section: Section | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
}

const DetailView = ({ section, isOpen, onClose, onNavigate }: DetailViewProps) => {
  if (!section) return null;

  const currentIndex = sections.findIndex((s) => s.id === section.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < sections.length - 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50"
            style={{ background: "hsl(0 0% 2% / 0.98)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Full Page Detail View */}
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Chameleon Home Button - Contextual Glow */}
            <ChameleonHomeButton 
              accentColor={section.accentColor} 
              onClick={onClose} 
            />

            {/* Navigation Controls - Bottom */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex gap-3">
              <motion.button
                onClick={() => onNavigate("prev")}
                disabled={!hasPrev}
                className="p-3 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  background: "hsla(0, 0%, 100%, 0.08)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid hsla(0, 0%, 100%, 0.15)",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={() => onNavigate("next")}
                disabled={!hasNext}
                className="p-3 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  background: "hsla(0, 0%, 100%, 0.08)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid hsla(0, 0%, 100%, 0.15)",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Hero Image with shared element transition */}
            <motion.div
              className="relative h-[40vh] sm:h-[50vh] overflow-hidden"
              layoutId={`image-${section.id}`}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover object-center"
              />
              {/* Gradient overlays */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, hsl(0 0% 2%) 0%, transparent 60%)`,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, hsl(0 0% 2% / 0.6) 0%, transparent 30%)`,
                }}
              />
              
              {/* Color accent glow */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${section.accentColor}30, transparent)`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
            </motion.div>

            {/* Content */}
            <div className="relative -mt-16 sm:-mt-24 px-4 sm:px-6 md:px-12 lg:px-24 pb-24 sm:pb-20">
              {/* Icon and Title */}
              <div className="mb-12">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl text-4xl mb-6"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.05)",
                    backdropFilter: "blur(12px)",
                    border: `2px solid ${section.accentColor}50`,
                    boxShadow: `0 0 40px ${section.accentColor}30`,
                  }}
                  layoutId={`icon-${section.id}`}
                >
                  {section.icon}
                </motion.div>

                <motion.h1
                  className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4"
                  style={{ color: section.accentColor }}
                  layoutId={`title-${section.id}`}
                >
                  {section.title}
                </motion.h1>

                <motion.p
                  className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {section.tagline}
                </motion.p>

                {/* Decorative line */}
                <motion.div
                  className="h-1 w-32 rounded-full mt-8"
                  style={{ backgroundColor: section.accentColor }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </div>

              {/* Masonry Grid - 10-15 Items */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                {section.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="break-inside-avoid relative overflow-hidden rounded-2xl group"
                    style={{
                      background: "hsla(0, 0%, 100%, 0.03)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid hsla(0, 0%, 100%, 0.1)",
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.08 }}
                    whileHover={{
                      borderColor: `${section.accentColor}50`,
                      boxShadow: `0 0 40px ${section.accentColor}20`,
                    }}
                  >
                    {/* Item Image - varying heights for masonry effect */}
                    <div 
                      className="relative overflow-hidden"
                      style={{ 
                        height: `${140 + (index % 3) * 40}px` 
                      }}
                    >
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to top, hsl(0 0% 2%) 0%, transparent 60%)`,
                        }}
                      />
                    </div>

                    {/* Item Content */}
                    <div className="p-5">
                      <h3
                        className="font-serif text-lg font-bold mb-2"
                        style={{ color: section.accentColor }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Hover glow */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        boxShadow: `inset 0 0 60px ${section.accentColor}10`,
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Section Navigation Dots */}
              <div className="flex justify-center gap-3 mt-16">
                {sections.map((s, i) => (
                  <motion.div
                    key={s.id}
                    className="h-2 rounded-full transition-all cursor-pointer"
                    style={{
                      width: s.id === section.id ? 32 : 8,
                      backgroundColor:
                        s.id === section.id ? section.accentColor : "hsl(0 0% 30%)",
                      boxShadow:
                        s.id === section.id
                          ? `0 0 10px ${section.accentColor}`
                          : "none",
                    }}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => {
                      const diff = i - currentIndex;
                      if (diff < 0) {
                        for (let j = 0; j < Math.abs(diff); j++) {
                          setTimeout(() => onNavigate("prev"), j * 100);
                        }
                      } else if (diff > 0) {
                        for (let j = 0; j < diff; j++) {
                          setTimeout(() => onNavigate("next"), j * 100);
                        }
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DetailView;
