import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Deep dark gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, hsl(0 0% 6%) 0%, hsl(0 0% 2%) 70%)",
        }}
      />

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(45 90% 53% / 0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(195 100% 50% / 0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(0 0% 100%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span 
            className="text-nizam-gold font-sans text-sm md:text-base tracking-[0.3em] uppercase font-medium"
            style={{
              textShadow: "0 0 20px hsl(45 90% 53% / 0.5)",
            }}
          >
            Discover
          </span>
        </motion.div>

        <motion.h1
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="text-foreground">Hyderabad</span>
          <motion.span
            className="block text-nizam-gold"
            style={{
              textShadow: "0 0 40px hsl(45 90% 53% / 0.4), 0 0 80px hsl(45 90% 53% / 0.2)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Snapshot
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 font-sans font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Where Heritage Meets Tomorrow
        </motion.p>

        {/* Decorative glowing line */}
        <motion.div
          className="w-32 h-[2px] mx-auto rounded-full relative"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(45 90% 53%), hsl(195 100% 50%))",
              boxShadow: "0 0 20px hsl(45 90% 53% / 0.5), 0 0 40px hsl(195 100% 50% / 0.3)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase group-hover:text-nizam-gold transition-colors">
          Begin Journey
        </span>
        <motion.div
          className="p-2 rounded-full"
          style={{
            background: "hsla(0, 0%, 100%, 0.05)",
            border: "1px solid hsla(0, 0%, 100%, 0.1)",
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-nizam-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
