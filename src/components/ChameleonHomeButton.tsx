import { motion } from "framer-motion";
import { Home } from "lucide-react";

interface ChameleonHomeButtonProps {
  accentColor: string;
  onClick: () => void;
}

const ChameleonHomeButton = ({ accentColor, onClick }: ChameleonHomeButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[60] flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-full cursor-pointer"
      style={{
        background: "hsla(0, 0%, 100%, 0.1)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `2px solid ${accentColor}`,
        boxShadow: `
          0 0 15px ${accentColor}90,
          0 0 30px ${accentColor}60,
          0 0 50px ${accentColor}40,
          inset 0 0 15px ${accentColor}20
        `,
      }}
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        boxShadow: `
          0 0 15px ${accentColor}90,
          0 0 30px ${accentColor}60,
          0 0 50px ${accentColor}40,
          inset 0 0 15px ${accentColor}20
        `,
        borderColor: accentColor,
      }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      whileHover={{ 
        scale: 1.08, 
        boxShadow: `
          0 0 20px ${accentColor},
          0 0 40px ${accentColor}80,
          0 0 70px ${accentColor}50,
          inset 0 0 20px ${accentColor}30
        `,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <Home 
        className="w-4 h-4 sm:w-5 sm:h-5" 
        style={{ 
          color: accentColor,
          filter: `drop-shadow(0 0 6px ${accentColor})`,
        }}
      />
      <span 
        className="text-xs sm:text-sm font-semibold tracking-wide hidden sm:inline"
        style={{ 
          color: accentColor,
          textShadow: `0 0 10px ${accentColor}80`,
        }}
      >
        Return to Home
      </span>
    </motion.button>
  );
};

export default ChameleonHomeButton;
