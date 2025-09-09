"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, Zap } from "lucide-react";

export default function HireMe() {
  const scrollToSection = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: CheckCircle,
      title: "Full-Stack Development",
      description:
        "Complete web and mobile applications from concept to deployment",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description:
        "Fast delivery without compromising on quality and attention to detail",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description:
        "Working closely with clients to understand and exceed expectations",
    },
    {
      icon: Zap,
      title: "Modern Technologies",
      description:
        "Using the latest frameworks and tools for optimal performance",
    },
  ];

  return (
    <section
      id="hire"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            I'm Available for Hire
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Looking for a developer to bring your ideas to life? Let's build
            something amazing together.
          </p>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-6 py-3 rounded-full font-semibold mb-8"
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span>Available for New Projects</span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              What I Can Do For You
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <Icon
                          size={20}
                          className="text-blue-600 dark:text-blue-400"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {service.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Whether you need a complete web application, mobile app, or want
                to buy FreshBusket, I'm here to help bring your vision to life.
              </p>

              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Work With Me
                </motion.button>

                <div className="text-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    or
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("#contact")}
                  className="w-full border-2 border-green-600 text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white dark:hover:bg-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                >
                  Buy FreshBusket
                </motion.button>
              </div>
            </div>

            {/* Testimonial/Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white"
            >
              <h4 className="text-lg font-semibold mb-4">Why Choose Me?</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm opacity-90">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-90">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Support Available</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

