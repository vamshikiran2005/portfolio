import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { ArrowRight } from "lucide-react";
import profilePhoto from "../assets/profile.jpg";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-navy-900 rounded-full blur-3xl" />

      <div className="section-padding text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gold font-medium mb-4 tracking-widest uppercase text-sm">
            Welcome to my Portfolio
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12">
            <img src={profilePhoto} alt="Vamshi Kiran Reddy" className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-gold shadow-[0_0_50px_rgba(212,175,55,0.4)] object-cover" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight">
              I'm <span className="text-gradient">{portfolioData.name}</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {portfolioData.role}
          </p>
          <p className="text-slate-500 max-w-xl mx-auto mb-12 italic">
            "{portfolioData.intro}"
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gold text-navy-950 rounded-full font-bold flex items-center gap-2 hover:bg-gold-hover shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all duration-300"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-slate-700 text-slate-300 rounded-full font-bold flex items-center gap-2 hover:bg-white/5 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
