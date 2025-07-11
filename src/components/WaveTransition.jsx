"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const WaveTransition = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex flex-col justify-center gap-4">
            <motion.div
              className="h-12 bg-white/30"
              initial={{ x: "-100%", opacity: 0.8 }}
              animate={{
                x: "100%",
                opacity: 0.2,
                transition: { duration: 1.2, ease: "easeInOut", repeat: Infinity },
              }}
            />
            <motion.div
              className="h-12 bg-white/40"
              initial={{ x: "-100%", opacity: 0.8 }}
              animate={{
                x: "100%",
                opacity: 0.2,
                transition: { duration: 1.2, ease: "easeInOut", repeat: Infinity, delay: 0.2 },
              }}
            />
            <motion.div
              className="h-12 bg-white/50"
              initial={{ x: "-100%", opacity: 0.8 }}
              animate={{
                x: "100%",
                opacity: 0.2,
                transition: { duration: 1.2, ease: "easeInOut", repeat: Infinity, delay: 0.4 },
              }}
            />
          </div>

          <motion.div
            className="h-screen w-screen fixed top-0 pointer-events-none bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600"
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              opacity: 0,
              scale: 1.05,
              transition: { delay: 1, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
            }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-white text-2xl font-semibold tracking-wide"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.4 },
                }}
                exit={{ opacity: 0 }}
              >
                En cours...
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WaveTransition;