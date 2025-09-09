"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ShoppingCart,
  Code,
  Smartphone,
  Globe,
  Cpu,
} from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  const scrollToSection = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "E-commerce":
        return ShoppingCart;
      case "Web App":
        return Globe;
      case "Mobile App":
        return Smartphone;
      case "IoT":
        return Cpu;
      default:
        return Code;
    }
  };

  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, including production-ready
            applications and innovative solutions
          </p>
        </motion.div>

        {/* Featured Project - FreshBusket */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800 relative overflow-hidden">
              {/* For Sale Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-6 right-6 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg"
              >
                <span>🚀</span>
                <span>For Sale</span>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Project Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {featuredProject.title}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {featuredProject.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection("#contact")}
                      className="border-2 border-green-600 text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white dark:hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <Code size={20} />
                      <span>Hire Me to Build Yours</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection("#contact")}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart size={20} />
                      <span>Contact to Buy</span>
                    </motion.button>
                  </div>
                </div>

                {/* Project Image Placeholder */}
                <div className="relative">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-80 flex items-center justify-center">
                    <div className="text-center">
                      <Globe
                        size={64}
                        className="text-gray-400 dark:text-gray-500 mx-auto mb-4"
                      />
                      <p className="text-gray-500 dark:text-gray-400">
                        FreshBusket.co.ke Preview
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Other Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  {/* Project Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <CategoryIcon
                        size={20}
                        className="text-blue-600 dark:text-blue-400"
                      />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {project.category}
                      </span>
                    </div>
                    {project.forSale && (
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-bold px-2 py-1 rounded-full">
                        For Sale
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h4>

                  {/* Project Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 dark:text-gray-400 text-xs px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors duration-200 text-center"
                      >
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded text-sm font-medium transition-colors duration-200 text-center"
                      >
                        <Github size={16} className="inline mr-1" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
