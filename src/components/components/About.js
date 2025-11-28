import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-[#2c2c2c] text-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-2/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <p className="text-sm uppercase tracking-wider text-[#aaa] mb-4">About</p>
            <h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl mb-6">Our approach to fashion</h2>
          </motion.div>
          <motion.div 
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <p className="font-light text-lg leading-relaxed mb-8">
              Founded in 2018, moda.studio began with a simple premise: fashion should inspire without excess. Our design philosophy embraces deliberate minimalism—each piece considered in its purpose, material, and longevity.
            </p>
            <p className="font-light text-lg leading-relaxed mb-8">
              Working with a select group of ethical manufacturers across Europe, we create collections that balance contemporary aesthetics with lasting quality. These relationships, built on shared values and transparency, allow us to maintain exceptional standards while reducing environmental impact.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider border-b border-white pb-1 hover:opacity-70 transition-opacity"
            >
              Learn More About Our Story
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
