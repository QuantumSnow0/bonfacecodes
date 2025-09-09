"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface SocialLink {
  name: string;
  icon: any;
  href: string;
}

interface QuickLink {
  name: string;
  href: string;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    { name: "GitHub", icon: Github, href: "https://github.com/QuantumSnow0" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/bonface-mbabu-9153a8159",
    },
    { name: "Email", icon: Mail, href: "mailto:bmuthuri93@gmail.com" },
  ];

  const quickLinks: QuickLink[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
            >
              BonfaceCodes
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400 mb-4"
            >
              Turning ideas into code. Available for hire.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm text-gray-500 dark:text-gray-500"
            >
              Built with Next.js + Tailwind
            </motion.p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold text-gray-900 dark:text-white mb-4"
            >
              Quick Links
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1 md:col-span-1">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold text-gray-900 dark:text-white mb-4"
            >
              Connect
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} BonfaceCodes. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2 md:mt-0">
              Made with ❤️ in Kenya
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
