import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { Monitor, Smartphone, CheckCircle } from "lucide-react";

export const Internship = () => {
  return (
    <section id="internship" className="section-padding">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="md:w-1/2"
        >
          <div className="relative p-10 glass rounded-3xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
            <div className="p-4 bg-navy-900 rounded-2xl w-fit mb-8">
              <Smartphone className="text-gold w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold mb-4">{portfolioData.internship.title}</h3>
            <div className="w-12 h-1 bg-gold mb-8 rounded-full" />
            
            <ul className="space-y-6">
              {portfolioData.internship.details.map((detail, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <CheckCircle className="text-gold w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-400">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="md:w-1/2 flex items-center justify-center p-12 glass rounded-full aspect-square relative opacity-50 overflow-hidden"
        >
          <div className="absolute inset-x-0 bottom-0 top-0 bg-gold/5 blur-3xl rounded-full" />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl animate-pulse" />
          <Monitor className="w-48 h-48 text-gold/30" />
        </motion.div>
      </div>
    </section>
  );
};
