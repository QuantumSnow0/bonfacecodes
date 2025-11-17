"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { X, Moon, Sparkles } from "lucide-react";

export default function DarkModeHint() {
  const [isDismissed, setIsDismissed] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // Check if user has dismissed this hint before
    const dismissed = localStorage.getItem("dark-mode-hint-dismissed");
    if (dismissed === "true") {
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem("dark-mode-hint-dismissed", "true");
  };

  // Only show in light mode, when mounted, and not dismissed
  const shouldShow = mounted && resolvedTheme === "light" && !isDismissed;

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.4, delay: 1.5 }}
        className="fixed z-50 right-2 md:right-6"
        style={{ 
          top: '4.5rem', // 72px - just below navbar (h-16 = 64px)
        }}
      >
        <div className="relative">
          {/* Pointing Hand - positioned to point at moon icon */}
          <motion.div
            animate={{
              y: [0, -6, 0],
              rotate: [-15, -25, -15],
              x: [0, 2, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-6 md:-top-8 right-[4.5rem] md:right-[3rem] z-10"
            style={{
              transformOrigin: 'bottom center',
            }}
          >
            <div className="text-3xl md:text-5xl filter drop-shadow-lg">👉</div>
          </motion.div>

          {/* Main Card - Super design for mobile */}
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 blur-xl -z-10"></div>
            
            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 md:top-3 md:right-3 p-1.5 rounded-full bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover:scale-110 z-20"
              aria-label="Dismiss hint"
            >
              <X size={14} className="text-gray-500 dark:text-gray-400" />
            </button>

            {/* Mobile: Horizontal compact layout */}
            <div className="md:hidden p-3.5 pr-10">
              <div className="flex items-center gap-2.5">
                <div className="flex-shrink-0 p-2 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-md">
                  <Moon size={16} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight mb-0.5">
                    Dark Mode
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
                    Better for your eyes
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop: Vertical layout */}
            <div className="hidden md:block p-4 pr-10">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                    <Moon size={16} className="text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                    Try Dark Mode
                  </h4>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  Better readability and easier on the eyes
                </p>
              </div>

              {/* Sparkle decoration */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-1 -right-1"
              >
                <Sparkles size={16} className="text-blue-400 opacity-60" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

