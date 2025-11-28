import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = ({ scrollY, opacity }) => {
  const letterAnimation = {
    hidden: { y: 100, opacity: 0 },
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.04,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <header className="h-screen flex flex-col justify-between relative overflow-hidden">
      <nav className={`w-full px-6 md:px-12 py-6 flex justify-between items-center fixed top-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-[#f8f7f4]/90 backdrop-blur-md shadow-sm" : "bg-transparent backdrop-blur-sm"
      }`}>
        <h1 className="font-['Space_Grotesk'] text-2xl tracking-tight">moda.studio</h1>
        <div className="hidden md:flex gap-8 font-light text-sm uppercase tracking-wider">
          <a href="#collections" className="hover:opacity-70 transition-opacity">Collections</a>
          <a href="#essentials" className="hover:opacity-70 transition-opacity">Essentials</a>
          <a href="#sustainability" className="hover:opacity-70 transition-opacity">Sustainability</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
        </div>
        <button className="md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M3 6H21" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M3 18H21" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </nav>
      
      <div 
        className="flex flex-col justify-center items-center h-full px-6 text-center relative bg-cover bg-center"
        style={{ 
          backgroundImage: "url(https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b05d02_2292140e-202a-45f6-b4ba-0933d55ca3fe.png)",
          backgroundSize: "110%", 
          backgroundPosition: "center 40%" 
        }}
      >
        <div className="absolute inset-0 bg-[#c4b3a3]/20 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 backdrop-blur-sm bg-white/10 px-8 py-10 rounded-lg max-w-4xl">
          <div className="overflow-hidden mb-4">
            <motion.p 
              className="uppercase tracking-[0.25em] text-sm font-light text-[#2c2c2c]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Designed with intention
            </motion.p>
          </div>
          
          <div className="mx-8 px-12 overflow-hidden">
            <motion.div 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-['Space_Grotesk'] text-5xl md:text-8xl mb-6 leading-snug max-w-3xl text-[#2c2c2c]">
                {"Contemporary fashion with purpose".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={letterAnimation}
                    style={{ display: 'inline-block', width: char === " " ? "0.25em" : "auto" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h2>
            </motion.div>
          </div>
          
          <motion.div 
            className="h-[1px] w-full bg-[#2c2c2c]/40 my-6"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          
          <motion.p 
            className="font-light text-lg md:text-xl max-w-2xl mx-auto text-[#2c2c2c]/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            Curated seasonal collections and sustainable essentials that define modern minimalism
          </motion.p>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-0 left-0 right-0 flex justify-center mb-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        style={{ opacity }}
      >
        <a 
          href="#collections" 
          className="rounded-full border border-[#2c2c2c] text-[#2c2c2c] w-10 h-10 flex items-center justify-center animate-bounce duration-slow hover:bg-[#2c2c2c]/10 transition-colors"
        >
          <ChevronDown size={20} />
        </a>
      </motion.div>
    </header>
  );
};

export default Hero;