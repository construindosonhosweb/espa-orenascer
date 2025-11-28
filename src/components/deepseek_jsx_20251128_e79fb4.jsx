import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <p className="text-sm uppercase tracking-wider text-[#777] mb-4">Stay Connected</p>
          <h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl mb-6 max-w-2xl">
            Subscribe for early collection access and studio insights
          </h2>
          <div className="w-full max-w-md mt-6 flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 border-t border-l border-b border-black bg-transparent text-sm focus:outline-none"
            />
            <button className="px-6 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/90 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;