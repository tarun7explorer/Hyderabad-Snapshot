import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import buddhaStatue from "@/assets/buddha-statue-night.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image - Buddha Statue at Hussain Sagar */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${buddhaStatue})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Dark overlay for text readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, hsl(0 0% 0% / 0.6) 0%, hsl(0 0% 0% / 0.7) 50%, hsl(0 0% 2% / 0.95) 100%)",
        }}
      />

      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated glow orbs - subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(50 100% 50% / 0.1) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(0 0% 100% / 0.05) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Hyderabad with Yellow Glow */}
          <motion.span
            className="block"
            style={{
              color: "hsl(50, 100%, 55%)",
              textShadow: `
                0 0 10px hsl(50 100% 50% / 0.8),
                0 0 20px hsl(50 100% 50% / 0.6),
                0 0 40px hsl(50 100% 50% / 0.4),
                0 0 80px hsl(50 100% 50% / 0.3),
                0 0 120px hsl(50 100% 50% / 0.2)
              `,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Hyderabad
          </motion.span>
          
          {/* Snapshot with White Glow */}
          <motion.span
            className="block"
            style={{
              color: "hsl(0, 0%, 100%)",
              textShadow: `
                0 0 10px hsl(0 0% 100% / 0.9),
                0 0 20px hsl(0 0% 100% / 0.7),
                0 0 40px hsl(0 0% 100% / 0.5),
                0 0 80px hsl(0 0% 100% / 0.3)
              `,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Snapshot
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-sans font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Discover Hyderabad: Where History Meets Innovation
        </motion.p>

        {/* Sub-tagline with warm glow */}
        <motion.p
          className="text-base md:text-lg font-serif italic mb-10"
          style={{
            color: "hsl(35, 100%, 65%)",
            textShadow: `
              0 0 8px hsl(35 100% 50% / 0.5),
              0 0 20px hsl(35 100% 50% / 0.3),
              0 0 40px hsl(35 100% 50% / 0.2)
            `,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          Dil se Hyderabadi
        </motion.p>

        {/* Decorative glowing line */}
        <motion.div
          className="w-40 h-[2px] mx-auto rounded-full relative"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(50 100% 55%), hsl(0 0% 100%), hsl(50 100% 55%))",
              boxShadow: "0 0 20px hsl(50 100% 55% / 0.6), 0 0 40px hsl(0 0% 100% / 0.3)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span 
          className="text-xs tracking-[0.2em] uppercase group-hover:opacity-100 transition-opacity"
          style={{
            color: "hsl(50 100% 55%)",
            opacity: 0.7,
          }}
        >
          Begin Journey
        </span>
        <motion.div
          className="p-2 rounded-full"
          style={{
            background: "hsla(0, 0%, 100%, 0.05)",
            border: "1px solid hsla(50, 100%, 55%, 0.3)",
            boxShadow: "0 0 20px hsla(50, 100%, 55%, 0.2)",
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown 
            className="w-5 h-5" 
            style={{ color: "hsl(50 100% 55%)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
