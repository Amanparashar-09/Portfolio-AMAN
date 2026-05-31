import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { AmbientBackground } from "@/components/AmbientBackground";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MouseTracker } from "@/components/MouseTracker";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aman Parashar — Full-Stack · Blockchain · AI Builder" },
      {
        name: "description",
        content:
          "Portfolio of Aman Parashar — Full-Stack Developer from Agra, India. Building real-time collaborative platforms, AI-powered assessment tools, and blockchain systems.",
      },
      { property: "og:title", content: "Aman Parashar — Portfolio" },
      {
        property: "og:description",
        content:
          "Full-Stack Developer · Blockchain Specialist · AI Builder. Real projects, real systems.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Aman Parashar",
          jobTitle: "Full-Stack Developer",
          email: "amanparashar0911@gmail.com",
          telephone: "+91-83939-09033",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Agra",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "GLA University, Mathura",
          },
          url: "https://github.com/AmanParashar09",
          sameAs: ["https://github.com/AmanParashar09"],
          knowsAbout: [
            "Blockchain",
            "Solidity",
            "React",
            "Node.js",
            "AI",
            "TensorFlow",
            "Smart Contracts",
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-void text-frost min-h-screen"
      >
        <ScrollProgress />
        <CustomCursor />
        <MouseTracker />
        <AmbientBackground />

        <div className="relative" style={{ zIndex: 1 }}>
          <Navbar />
          <Hero />
          <div className="section-divider" />
          <About />
          <div className="section-divider" />
          <Skills />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <Experience />
          <div className="section-divider" />
          <Certifications />
          <div className="section-divider" />
          <Contact />
          <Footer />
        </div>
      </motion.main>
    </AnimatePresence>
  );
}
