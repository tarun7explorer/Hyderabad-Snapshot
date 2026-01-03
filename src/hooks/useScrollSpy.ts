import { useState, useEffect } from "react";
import { sections } from "@/data/hyderabadContent";

export const useScrollSpy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Calculate overall scroll progress
      const progress = scrollTop / (docHeight - windowHeight);
      setScrollProgress(Math.min(1, Math.max(0, progress)));
      
      // Determine active section based on scroll position
      const sectionProgress = progress * sections.length;
      const newIndex = Math.min(
        sections.length - 1,
        Math.max(0, Math.floor(sectionProgress))
      );
      
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    activeIndex,
    activeSection: sections[activeIndex],
    scrollProgress,
  };
};
