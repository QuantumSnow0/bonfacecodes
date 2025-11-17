import Navbar from "@/components/Navbar";
import DarkModeHint from "@/components/DarkModeHint";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Statistics from "@/components/Statistics";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import AISection from "@/components/AISection";
import HireMe from "@/components/HireMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <DarkModeHint />
      <main>
        <Hero />
        <About />
        <Statistics />
        <Skills />
        <Projects />
        <Testimonials />
        <AISection />
        <HireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
