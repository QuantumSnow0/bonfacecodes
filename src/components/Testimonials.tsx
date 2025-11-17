"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Business Owner",
      company: "FreshGroceries Ltd",
      content:
        "Bonface delivered an exceptional e-commerce platform that exceeded our expectations. The M-Pesa integration was seamless, and the admin dashboard is incredibly user-friendly. Highly recommended!",
      rating: 5,
      project: "E-commerce Platform",
    },
    {
      name: "James K.",
      role: "Hotel Manager",
      company: "Grand Hotel Nairobi",
      content:
        "The inventory management system Bonface built for us has transformed how we track stock. It's intuitive, reliable, and has saved us countless hours. The mobile app works perfectly on all devices.",
      rating: 5,
      project: "Hotel Inventory System",
    },
    {
      name: "Mary W.",
      role: "Entrepreneur",
      company: "Startup Founder",
      content:
        "Working with Bonface was a pleasure. He understood our vision, communicated clearly throughout the project, and delivered on time. The React Native app he built is exactly what we needed.",
      rating: 5,
      project: "Mobile Application",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it - hear from clients who've worked with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={48} className="text-blue-600 dark:text-blue-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Project Badge */}
              <div className="mb-4">
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonial.project}
                </span>
              </div>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join These Happy Clients?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's work together to bring your project to life. I'm here to help
              you succeed!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get Started Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

