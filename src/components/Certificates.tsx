import { motion } from "framer-motion";
import { portfolioData } from "../data";
import { Award, ExternalLink, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="certificates" className="section-padding bg-navy-900/10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gold/5 rounded-full ring-1 ring-gold/20">
               <Award className="text-gold w-10 h-10" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl mb-4">Licenses & <span className="text-gradient">Certifications</span></h2>
          <p className="text-slate-400 font-medium">Professional credentials and specializations from industry leaders.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 glass rounded-3xl relative overflow-hidden flex flex-col items-center text-center cursor-default hover:shadow-2xl hover:shadow-gold/5 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                 <ShieldCheck className="text-gold w-6 h-6" />
              </div>
              
              <div className="p-4 bg-navy-900 rounded-2xl mb-6 ring-1 ring-white/5 group-hover:ring-gold/30 transition-all">
                <Award className="text-gold w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{cert.title}</h3>
              <p className="text-slate-300 font-medium mb-1">{cert.organization}</p>
              <p className="text-xs text-slate-500 mb-6 uppercase tracking-widest">{cert.date}</p>
              
              {cert.link && cert.link !== "#" ? (
                <button 
                  onClick={() => setSelectedCert(cert.link)}
                  className="mt-auto flex items-center gap-2 text-gold text-sm font-bold border-b border-gold/20 pb-1 hover:border-gold transition-all"
                >
                  View Certificate <ExternalLink size={14} />
                </button>
              ) : (
                <span className="mt-auto text-slate-600 text-sm italic">Verification pending</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full glass rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-navy-950"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-gold hover:text-navy-950 transition-all shadow-xl"
              >
                <X size={24} />
              </button>

              <div className="w-full h-full overflow-auto p-4 flex items-center justify-center">
                {selectedCert.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                  <img 
                    src={selectedCert} 
                    alt="Certificate" 
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                ) : (
                  <iframe 
                    src={selectedCert} 
                    className="w-full h-full"
                    title="Certificate Viewer"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
