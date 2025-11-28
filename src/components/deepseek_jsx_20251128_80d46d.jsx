import React from "react";
import { motion } from "framer-motion";

const Sustainability = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="sustainability" className="py-24 md:py-32 px-6 md:px-12 bg-[#e9e5de] relative">
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <motion.div 
            className="md:w-1/2 aspect-[4/5] overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <img 
              src="https://images.unsplash.com/photo-1581784368651-8916092072cf?q=80&w=1887&auto=format&fit=crop" 
              alt="Sustainable fashion" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <p className="text-sm uppercase tracking-wider text-[#777] mb-4">Sustainability</p>
            <h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl mb-6">A commitment to better practices</h2>
            <p className="font-light text-lg leading-relaxed mb-6">
              We believe fashion can be both beautiful and responsible. Our production methods minimize waste and prioritize natural, renewable materials sourced from ethical partners.
            </p>
            <ul className="space-y-4 font-light">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 mt-1 rounded-full border border-black flex items-center justify-center">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                </span>
                <span>95% natural or recycled materials in every product</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 mt-1 rounded-full border border-black flex items-center justify-center">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                </span>
                <span>Carbon-neutral manufacturing practices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 mt-1 rounded-full border border-black flex items-center justify-center">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                </span>
                <span>Plastic-free packaging and shipping</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;