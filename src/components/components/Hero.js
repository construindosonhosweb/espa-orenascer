import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import Sustainability from "../components/Sustainability";
import Essentials from "../components/Essentials";
import About from "../components/About";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const collectionsRef = useRef(null);
  const isCollectionsInView = useInView(collectionsRef, { once: false, margin: "-100px 0px" });

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#f8f7f4]">
      <Hero scrollY={scrollY} opacity={opacity} />
      
      <div ref={collectionsRef}>
        <Collections isInView={isCollectionsInView} />
      </div>
      
      <Sustainability />
      <Essentials />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
}
