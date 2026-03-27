import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { User, GraduationCap } from "lucide-react";
import profilePhoto from "../assets/profile.jpg";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-navy-900/50">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-full aspect-square border-2 border-gold/30 rounded-3xl overflow-hidden glass relative z-10 p-2">
            <img src={profilePhoto} alt="About Me" className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className="absolute -top-6 -right-6 w-full h-full border-2 border-gold/10 rounded-3xl -z-1" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl mb-8 flex items-center gap-4">
            <span className="p-3 glass rounded-2xl"><User className="text-gold" /></span>
             About Me
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4 p-6 glass rounded-2xl hover:bg-white/10 transition-colors">
              <GraduationCap className="text-gold w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-slate-400">{portfolioData.about.education}</p>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed text-slate-400">
              {portfolioData.about.description}
            </p>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gold">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.about.interests.map((interest) => (
                  <span key={interest} className="px-5 py-2 glass rounded-full text-sm text-slate-300">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
