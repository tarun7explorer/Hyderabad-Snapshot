import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { sections, Section } from "@/data/hyderabadContent";

interface DetailModalProps {
  section: Section | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
}

const DetailModal = ({ section, isOpen, onClose, onNavigate }: DetailModalProps) => {
  if (!section) return null;

  const currentIndex = sections.findIndex(s => s.id === section.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < sections.length - 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-card rounded-2xl shadow-2xl z-50 overflow-hidden border border-border"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div 
              className="relative h-48 md:h-64 flex items-end p-6 md:p-10"
              style={{
                background: `linear-gradient(135deg, ${section.accentColor}20, ${section.accentColor}40)`,
              }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              <div className="absolute top-4 left-4 flex gap-2">
                <button
                  onClick={() => onNavigate("prev")}
                  disabled={!hasPrev}
                  className="p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => onNavigate("next")}
                  disabled={!hasNext}
                  className="p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Icon and title */}
              <div className="relative z-10">
                <motion.span 
                  className="text-6xl md:text-8xl block mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  {section.icon}
                </motion.span>
                <motion.h2 
                  className="font-serif text-3xl md:text-5xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {section.title}
                </motion.h2>
                <motion.div
                  className="h-1 w-20 rounded-full mt-4"
                  style={{ backgroundColor: section.accentColor }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4 }}
                />
              </div>

              {/* Decorative elements */}
              <div 
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30"
                style={{ backgroundColor: section.accentColor }}
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 overflow-y-auto max-h-[calc(100%-12rem)] md:max-h-[calc(100%-16rem)]">
              <div className="grid gap-8 md:grid-cols-2">
                {section.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="group relative overflow-hidden rounded-xl bg-muted/50 border border-border hover:border-nizam-gold/50 transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.15 }}
                  >
                    {/* Image placeholder */}
                    <div 
                      className="h-48 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${section.accentColor}30, ${section.accentColor}10)`,
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl opacity-50">{section.icon}</span>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Text content */}
                    <div className="p-5">
                      <h3 
                        className="font-serif text-xl font-semibold mb-3"
                        style={{ color: section.accentColor }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Section indicator */}
              <div className="flex justify-center gap-2 mt-10">
                {sections.map((s, i) => (
                  <div
                    key={s.id}
                    className={`w-2 h-2 rounded-full transition-all ${
                      s.id === section.id 
                        ? "w-8 bg-nizam-gold" 
                        : "bg-muted-foreground/30"
                    }`}
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

export default DetailModal;
