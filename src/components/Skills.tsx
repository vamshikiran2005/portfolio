import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { Code2, Braces, Database, Layers, PenTool, Users } from "lucide-react";

const getIcon = (category: string) => {
  switch (category) {
    case "Languages": return <Code2 className="text-gold w-6 h-6" />;
    case "Frontend": return <Braces className="text-gold w-6 h-6" />;
    case "Backend & Database": return <Database className="text-gold w-6 h-6" />;
    case "Concepts": return <Layers className="text-gold w-6 h-6" />;
    case "Tools": return <PenTool className="text-gold w-6 h-6" />;
    case "Soft Skills": return <Users className="text-gold w-6 h-6" />;
    default: return <Code2 className="text-gold w-6 h-6" />;
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl mb-6">Technical <span className="text-gradient">Skillset</span></h2>
        <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-8 glass rounded-3xl group border-transparent hover:border-gold/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-navy-900 rounded-2xl group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-300">
                {getIcon(skill.category)}
              </div>
              <h3 className="text-xl font-bold">{skill.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span key={item} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-sm text-slate-400 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
