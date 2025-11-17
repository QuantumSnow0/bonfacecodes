"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Users, Rocket, Award, Coffee } from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      icon: Code,
      value: "50+",
      label: "Projects Built",
      description: "Web & mobile applications",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Smartphone,
      value: "15+",
      label: "Mobile Apps",
      description: "React Native & Expo",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      value: "30+",
      label: "Happy Clients",
      description: "Satisfied customers",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Rocket,
      value: "5+",
      label: "Years Experience",
      description: "Self-taught developer",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Award,
      value: "100%",
      label: "Client Satisfaction",
      description: "Quality guaranteed",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Coffee,
      value: "24/7",
      label: "Support Available",
      description: "Always here to help",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            By The Numbers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A quick look at my journey and achievements as a developer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className="space-y-2"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              These numbers represent more than just statistics - they represent
              real projects, real clients, and real solutions. Every number tells
              a story of dedication, learning, and growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

