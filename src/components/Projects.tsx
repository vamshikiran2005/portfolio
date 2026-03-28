import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data";
import { ExternalLink, Github, Code, Rocket, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (!selectedProject?.gallery) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
  };

  const prevImage = () => {
    if (!selectedProject?.gallery) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
  };

  return (
    <section id="projects" className="section-padding bg-navy-900/40">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
        <div>
          <h2 className="text-3xl md:text-5xl mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-slate-400 max-w-lg">
            A collection of projects showcasing my skills in full-stack development and system design.
          </p>
        </div>
        <div className="hidden md:block">
           <Rocket className="text-gold w-16 h-16 animate-pulse" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative p-8 glass rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-gold/5 transition-all duration-500 flex flex-col h-full ${
              (project as any).isPlaceholder ? "border-dashed border-2 border-slate-700" : ""
            }`}
          >
            {/* Visual Header */}
            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-gold to-yellow-200 transition-all duration-500" />
            
            {!(project as any).isPlaceholder && project.gallery && project.gallery.length > 0 && (
              <div 
                className="relative h-48 -mx-8 -mt-8 mb-8 overflow-hidden cursor-pointer"
                onClick={() => openGallery(project)}
              >
                <img 
                  src={project.gallery[0].src} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 bg-gold/90 text-navy-950 rounded-full">
                    <ImageIcon size={20} />
                  </div>
                </div>
              </div>
            )}

            <div className="mb-8">
               <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-navy-900 rounded-xl">
                    <Code className="text-gold w-6 h-6" />
                  </div>
                  {!(project as any).isPlaceholder && (
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="text-slate-500 hover:text-gold cursor-pointer transition-colors" />
                        </a>
                      )}
                      <ExternalLink className="text-slate-500 hover:text-gold cursor-pointer transition-colors" />
                    </div>
                  )}
               </div>
               <h3 className="text-2xl font-bold mb-2 group-hover:text-gold transition-colors">{project.title}</h3>
               {(project as any).subtitle && <p className="text-gold text-sm font-medium mb-2">{(project as any).subtitle}</p>}
               <p className="text-slate-400 text-sm leading-relaxed mb-6">
                 {project.description}
               </p>
               
               {project.features && (
                 <ul className="space-y-2 mb-6">
                   {project.features.map(f => (
                     <li key={f} className="text-xs text-slate-500 flex items-center gap-2">
                       <span className="w-1 h-1 bg-gold rounded-full" /> {f}
                     </li>
                   ))}
                 </ul>
               )}

               {project.gallery && project.gallery.length > 0 && (
                 <button 
                  onClick={() => openGallery(project)}
                  className="mt-4 flex items-center gap-2 text-gold text-sm font-bold hover:underline"
                 >
                   <ImageIcon size={16} /> View Project Screenshots
                 </button>
               )}
            </div>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-navy-900 rounded-full text-[10px] font-bold tracking-wider text-gold uppercase border border-gold/10">
                    {t}
                  </span>
                ))}
              </div>
              
              {!(project as any).isPlaceholder && (project as any).highlights && (
                <div className="pt-4 border-t border-white/5 italic text-xs text-slate-500">
                  {(project as any).highlights}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 backdrop-blur-xl p-4 md:p-10"
          >
            <button 
              onClick={closeGallery}
              className="absolute top-6 right-6 p-3 glass rounded-full text-gold hover:scale-110 transition-transform"
            >
              <X size={24} />
            </button>

            <div className="max-w-6xl w-full grid md:grid-cols-3 gap-10 items-center">
              {/* Image Section */}
              <div className="md:col-span-2 relative group">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="aspect-video glass rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img 
                    src={selectedProject.gallery[currentImageIndex].src} 
                    alt="Project Screenshot"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Navigation Buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass rounded-full text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass rounded-full text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {selectedProject.gallery.map((_: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "w-8 bg-gold" : "bg-white/20"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Info Section */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-100">{selectedProject.title}</h3>
                <div className="w-12 h-1 bg-gold rounded-full" />
                <div className="p-6 glass rounded-2xl">
                  <p className="text-slate-300 leading-relaxed italic">
                    "{selectedProject.gallery[currentImageIndex].description}"
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t: string) => (
                    <span key={t} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-bold text-gold uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10">
                   <p className="text-xs text-slate-500">
                    Viewing {currentImageIndex + 1} of {selectedProject.gallery.length} screenshots
                   </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
