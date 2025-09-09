"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Heart } from "lucide-react";

export default function About() {
  const skills: string[] = [
    "JavaScript",
    "React",
    "React Native",
    "Next.js",
    "Supabase",
    "Axios",
    "Tailwind",
    "Framer Motion",
    "Firebase",
    "Cloudinary",
    "Expo",
    "IoT with Arduino",
    "M-Pesa API integrations",
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-3 text-gray-600 dark:text-gray-400"
            >
              <MapPin size={20} />
              <span className="text-lg">Self-taught developer from Kenya</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              I'm Bonface, a passionate self-taught developer who loves turning
              ideas into reality through code. With a strong foundation in
              modern web and mobile technologies, I specialize in building
              scalable applications that solve real-world problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              My journey in development has been driven by curiosity and a
              desire to create meaningful solutions. I'm particularly passionate
              about e-commerce platforms, mobile applications, and IoT projects
              that make a difference in people's lives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center space-x-3 text-gray-600 dark:text-gray-400"
            >
              <Heart size={20} className="text-red-500" />
              <span className="text-lg">
                Available for hire and collaboration
              </span>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2"
            >
              <Code2 size={24} />
              <span>Technical Skills</span>
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-center transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What I Do Best
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                I excel at building full-stack applications, integrating payment
                systems like M-Pesa, and creating responsive user interfaces
                that provide exceptional user experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
