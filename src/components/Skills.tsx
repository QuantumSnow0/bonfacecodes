"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Database,
  Cloud,
  Palette,
  Zap,
  Globe,
  Cpu,
  CreditCard,
  Smartphone as Mobile,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "JavaScript", level: "Expert" },
        { name: "React", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "TailwindCSS", level: "Expert" },
        { name: "Framer Motion", level: "Advanced" },
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: "Expert" },
        { name: "Expo", level: "Advanced" },
        { name: "iOS Development", level: "Intermediate" },
        { name: "Android Development", level: "Intermediate" },
      ],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", level: "Expert" },
        { name: "Express", level: "Expert" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Supabase", level: "Expert" },
        { name: "REST APIs", level: "Expert" },
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "Firebase", level: "Advanced" },
        { name: "Vercel", level: "Expert" },
        { name: "Netlify", level: "Advanced" },
        { name: "AWS", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      skills: [
        { name: "Figma", level: "Advanced" },
        { name: "Adobe XD", level: "Intermediate" },
        { name: "Responsive Design", level: "Expert" },
        { name: "User Experience", level: "Advanced" },
      ],
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Payment Integration",
      icon: CreditCard,
      skills: [
        { name: "M-Pesa API", level: "Expert" },
        { name: "Stripe", level: "Advanced" },
        { name: "PayPal", level: "Intermediate" },
        { name: "Payment Gateways", level: "Advanced" },
      ],
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-gradient-to-r from-green-500 to-green-600";
      case "Advanced":
        return "bg-gradient-to-r from-blue-500 to-blue-600";
      case "Intermediate":
        return "bg-gradient-to-r from-yellow-500 to-yellow-600";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels across different domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                              width:
                                skill.level === "Expert"
                                  ? "100%"
                                  : skill.level === "Advanced"
                                  ? "80%"
                                  : "60%",
                            }}
                            transition={{
                              duration: 1,
                              delay:
                                categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                            }}
                            className={`h-full ${getLevelColor(
                              skill.level
                            )} rounded-full`}
                          />
                        </div>
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded-full ${
                            skill.level === "Expert"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : skill.level === "Advanced"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with
              the latest technologies. My passion for learning drives me to
              explore new frameworks, tools, and methodologies to deliver the
              best solutions for my clients.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
