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
        background: "hsla(0, 0%, 100%, 0.08)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid ${accentColor}50`,
        boxShadow: `0 0 30px ${accentColor}30`,
      }}
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        boxShadow: `0 0 30px ${accentColor}30`,
        borderColor: `${accentColor}50`,
      }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: `0 0 40px ${accentColor}50`,
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
        style={{ color: accentColor }}
      />
      <span 
        className="text-xs sm:text-sm font-medium tracking-wide hidden sm:inline"
        style={{ color: accentColor }}
      >
        Return to Home
      </span>
    </motion.button>
  );
};

export default ChameleonHomeButton;
