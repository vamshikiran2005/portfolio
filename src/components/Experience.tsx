import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-navy-900/20">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">Education & <span className="text-gradient">Experience</span></h2>
          <p className="text-slate-400">My academic journey and professional milestones.</p>
        </motion.div>

        <div className="relative border-l-2 border-gold/30 ml-4 md:ml-8 space-y-12">
          {/* Internship */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-gold rounded-full border-4 border-navy-950 shadow-[0_0_10px_rgba(205,173,125,0.5)]" />
            
            <div className="glass p-6 md:p-8 rounded-3xl hover:border-gold/30 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gold/10 rounded-lg">
                    <Briefcase className="text-gold w-5 h-5" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">{portfolioData.internship.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-gold bg-gold/5 px-3 py-1 rounded-full border border-gold/10">
                  <Calendar size={14} />
                  {portfolioData.internship.period}
                </div>
              </div>
              <p className="text-gold font-medium mb-4">{portfolioData.internship.company}</p>
              <ul className="space-y-3">
                {portfolioData.internship.details.map((detail, i) => (
                  <li key={i} className="text-slate-400 text-sm flex gap-2">
                    <span className="text-gold mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Education */}
          {portfolioData.education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-gold rounded-full border-4 border-navy-950" />
              
              <div className="glass p-6 md:p-8 rounded-3xl border border-white/5">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <GraduationCap className="text-blue-400 w-5 h-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">{item.degree}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400 bg-white/5 px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    {item.period}
                  </div>
                </div>
                <p className="text-slate-200 font-medium mb-2">{item.institution}</p>
                <p className="text-slate-400 text-sm italic">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
