import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-navy-950/80">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            I'm always open to new opportunities, collaborations, or just a friendly chat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {[
                { icon: <Mail className="text-gold" />, title: "EMAIL ME", value: portfolioData.contact.email },
                { icon: <Phone className="text-gold" />, title: "CALL ME", value: portfolioData.contact.phone },
                { icon: <MapPin className="text-gold" />, title: "LOCATION", value: portfolioData.contact.location }
              ].map((info, i) => (
                <div key={i} className="flex items-center gap-6 p-6 glass rounded-2xl hover:bg-white/5 transition-all group">
                  <div className="p-4 bg-navy-900 rounded-xl group-hover:scale-110 transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{info.title}</h4>
                    <p className="text-slate-200">{info.value}</p>
                  </div>
                </div>
              ))}
              
              <div className="flex items-center gap-4 pt-8">
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:bg-gold hover:text-navy-950 transition-all hover:-translate-y-2">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-full hover:bg-gold hover:text-navy-950 transition-all hover:-translate-y-2">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="p-8 glass rounded-[2rem] space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-navy-900/50 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
                  <input type="email" placeholder="Your Email" className="w-full bg-navy-900/50 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea rows={4} placeholder="Your Message" className="w-full bg-navy-900/50 border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all resize-none"></textarea>
                </div>
              </div>
              <button className="w-full py-4 bg-linear-to-r from-gold to-yellow-500 text-navy-950 rounded-2xl font-bold flex items-center justify-center gap-3 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-gold/20 transition-all duration-300">
                 Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


