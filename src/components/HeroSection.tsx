import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import buddhaStatue from "@/assets/buddha-statue-night.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Background Image - Buddha Statue at Hussain Sagar */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${buddhaStatue})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Dark overlay for text readability - enhanced contrast */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, hsl(0 0% 0% / 0.75) 0%, hsl(0 0% 0% / 0.8) 50%, hsl(0 0% 2% / 0.98) 100%)",
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
          className="font-serif font-bold mb-3 sm:mb-4 md:mb-6"
          style={{
            fontSize: "clamp(2.5rem, 10vw, 9rem)",
            lineHeight: 1.1,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Hyderabad with Intense Yellow Neon Glow */}
          <motion.span
            className="block"
            style={{
              color: "hsl(50, 100%, 60%)",
              textShadow: `
                0 0 5px hsl(50 100% 70% / 1),
                0 0 10px hsl(50 100% 60% / 1),
                0 0 20px hsl(50 100% 55% / 0.9),
                0 0 40px hsl(50 100% 50% / 0.8),
                0 0 80px hsl(50 100% 50% / 0.6),
                0 0 120px hsl(50 100% 50% / 0.4),
                0 0 180px hsl(50 100% 50% / 0.3)
              `,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Hyderabad
          </motion.span>
          
          {/* Snapshot with Intense White Neon Glow */}
          <motion.span
            className="block"
            style={{
              color: "hsl(0, 0%, 100%)",
              textShadow: `
                0 0 5px hsl(0 0% 100% / 1),
                0 0 10px hsl(0 0% 100% / 1),
                0 0 20px hsl(0 0% 100% / 0.9),
                0 0 40px hsl(0 0% 100% / 0.7),
                0 0 80px hsl(0 0% 100% / 0.5),
                0 0 120px hsl(0 0% 100% / 0.3)
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
          className="max-w-2xl mx-auto mb-3 sm:mb-4 font-sans font-light tracking-wide"
          style={{
            fontSize: "clamp(0.875rem, 2.5vw, 1.25rem)",
            color: "hsl(0, 0%, 100%)",
            textShadow: "0 0 10px hsl(0 0% 100% / 0.4), 0 0 20px hsl(0 0% 100% / 0.2)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Discover Hyderabad: Where History Meets Innovation
        </motion.p>

        {/* Sub-tagline with intense warm glow */}
        <motion.p
          className="font-serif italic mb-4 sm:mb-6"
          style={{
            fontSize: "clamp(1rem, 3vw, 1.25rem)",
            color: "hsl(0, 0%, 100%)",
            textShadow: `
              0 0 5px hsl(0 0% 100% / 0.8),
              0 0 15px hsl(35 100% 60% / 0.6),
              0 0 30px hsl(35 100% 55% / 0.4),
              0 0 50px hsl(35 100% 50% / 0.3)
            `,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          Dil se Hyderabadi
        </motion.p>

        {/* 3-line Hyderabad description */}
        <motion.p
          className="max-w-3xl mx-auto mb-6 sm:mb-8 font-sans text-center px-2"
          style={{
            fontSize: "clamp(0.8rem, 2vw, 1rem)",
            lineHeight: 1.8,
            color: "hsl(0, 0%, 95%)",
            textShadow: "0 0 8px hsl(0 0% 0% / 0.8)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Hyderabad, the "City of Pearls," is a captivating blend of 400 years of history and a rapidly growing global technology hub. As the capital of Telangana, it is world-renowned for its iconic Charminar and the aromatic Hyderabadi Biryani, reflecting a rich Nizami heritage.
          <br /><br />
          Today, the city stands as a premier destination for the IT and pharmaceutical industries. Its unique charm lies in the seamless coexistence of ancient palaces and bustling traditional bazaars with modern glass skyscrapers and a vibrant, cosmopolitan lifestyle.
        </motion.p>

        {/* Decorative glowing line */}
        <motion.div
          className="w-40 h-[2px] mx-auto rounded-full relative mb-8 sm:mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
        >
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(50 100% 55%), hsl(0 0% 100%), hsl(50 100% 55%))",
              boxShadow: "0 0 20px hsl(50 100% 55% / 0.6), 0 0 40px hsl(0 0% 100% / 0.3)",
            }}
          />
        </motion.div>

        {/* Begin Journey Button - positioned to connect with Glow Road */}
        <motion.button
          className="flex flex-col items-center gap-3 cursor-pointer group mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <span 
            className="text-sm sm:text-base tracking-[0.2em] uppercase font-semibold"
            style={{
              color: "hsl(50 100% 60%)",
              textShadow: "0 0 10px hsl(50 100% 55% / 0.8), 0 0 20px hsl(50 100% 50% / 0.5)",
            }}
          >
            Begin Journey
          </span>
          <motion.div
            className="p-3 rounded-full"
            style={{
              background: "hsla(50, 100%, 55%, 0.15)",
              border: "2px solid hsl(50, 100%, 55%)",
              boxShadow: `
                0 0 15px hsl(50 100% 55% / 0.9),
                0 0 30px hsl(50 100% 55% / 0.6),
                0 0 50px hsl(50 100% 55% / 0.4),
                0 0 80px hsl(50 100% 55% / 0.3),
                inset 0 0 15px hsl(50 100% 55% / 0.3)
              `,
            }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown 
              className="w-6 h-6" 
              style={{ 
                color: "hsl(50 100% 60%)",
                filter: "drop-shadow(0 0 5px hsl(50 100% 55%))",
              }}
            />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
