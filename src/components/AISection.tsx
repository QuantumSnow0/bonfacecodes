"use client";

import { motion } from "framer-motion";
import { Bot, Zap, Rocket, Brain, Coffee, Code2 } from "lucide-react";

export default function AISection() {
  const aiBenefits = [
    {
      icon: Zap,
      title: "Faster Development",
      description:
        "AI helps me write boilerplate code, debug issues, and implement features 3x faster",
    },
    {
      icon: Brain,
      title: "Better Problem Solving",
      description:
        "AI suggests creative solutions and helps me think through complex technical challenges",
    },
    {
      icon: Rocket,
      title: "Ship Faster",
      description:
        "With AI assistance, I can deliver projects in record time without compromising quality",
    },
    {
      icon: Code2,
      title: "Code Quality",
      description:
        "AI reviews my code, suggests improvements, and helps me write cleaner, more maintainable code",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Bot
              size={48}
              className="text-purple-600 dark:text-purple-400 mr-4"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Is AI Going to Take My Job?
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Short answer: Nope! Long answer: I'm using AI to become an even
            better developer. Here's how I'm turning AI into my superpower
            instead of my replacement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - The Reality */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Coffee size={24} className="text-yellow-500 mr-3" />
                The Reality Check
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AI isn't replacing developers - it's making us more powerful!
                Think of it like having a super-smart coding buddy who never
                gets tired, never forgets syntax, and always has fresh ideas.
              </p>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  "AI doesn't replace creativity, problem-solving, or
                  understanding client needs. It just makes me faster at the
                  boring stuff so I can focus on the fun parts!"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {aiBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                      <Icon
                        size={20}
                        className="text-purple-600 dark:text-purple-400"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {benefit.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Section - The Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">My Promise to You</h3>
            <p className="text-lg mb-6 opacity-90">
              I'm not just using AI to make my life easier - I'm using it to
              make YOUR project better. Faster delivery, cleaner code, and more
              innovative solutions. AI is my co-pilot, but I'm still the captain
              of this ship! 🚀
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">
                ⚡ 3x Faster Development
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                🎯 Better Problem Solving
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                🚀 Quicker Ship Times
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                💡 More Creative Solutions
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
