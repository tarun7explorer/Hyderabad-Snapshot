import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ContentItem } from "@/data/hyderabadContent";

interface SectionGalleryProps {
  items: ContentItem[];
  accentColor: string;
  glowColor: string;
}

const SectionGallery = ({ items, accentColor, glowColor }: SectionGalleryProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 320;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full mt-6">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full transition-all hover:scale-110"
        style={{
          background: "hsla(0, 0%, 10%, 0.9)",
          border: `1px solid ${accentColor}`,
          boxShadow: `0 0 20px ${glowColor}40`,
        }}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5" style={{ color: accentColor }} />
      </button>
      
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full transition-all hover:scale-110"
        style={{
          background: "hsla(0, 0%, 10%, 0.9)",
          border: `1px solid ${accentColor}`,
          boxShadow: `0 0 20px ${glowColor}40`,
        }}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5" style={{ color: accentColor }} />
      </button>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-10 py-4"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex-shrink-0 w-72 rounded-xl overflow-hidden cursor-pointer group"
            style={{
              scrollSnapAlign: "start",
              background: "hsla(0, 0%, 8%, 0.95)",
              border: "1px solid hsla(0, 0%, 100%, 0.1)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{
              borderColor: accentColor,
              boxShadow: `0 0 30px ${glowColor}30`,
            }}
          >
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, hsl(0 0% 5%) 0%, transparent 60%)`,
                }}
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h4
                className="font-semibold text-sm mb-2 line-clamp-1"
                style={{ color: accentColor }}
              >
                {item.name}
              </h4>
              <p
                className="text-xs leading-relaxed line-clamp-2"
                style={{ color: "hsl(0, 0%, 75%)" }}
              >
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fade edges */}
      <div
        className="absolute left-8 top-0 bottom-0 w-8 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to right, hsl(0 0% 2%), transparent)",
        }}
      />
      <div
        className="absolute right-8 top-0 bottom-0 w-8 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to left, hsl(0 0% 2%), transparent)",
        }}
      />
    </div>
  );
};

export default SectionGallery;
