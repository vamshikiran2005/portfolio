import { portfolioData } from "../data";
import { Github, Linkedin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-navy-950 text-slate-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-slate-300 mb-2">{portfolioData.name}</p>
          <p className="text-sm">AI & Machine Learning Student</p>
        </div>

        <div className="flex items-center gap-6">
          <a href={portfolioData.contact.linkedin} className="hover:text-gold transition-colors">
            <Linkedin />
          </a>
          <a href={portfolioData.contact.github} className="hover:text-gold transition-colors">
            <Github />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs flex items-center justify-center md:justify-end gap-2">
            Built with <Heart className="w-4 h-4 text-gold fill-gold" /> using React & Tailwind
          </p>
          <p className="text-[10px] mt-2 uppercase tracking-widest opacity-50">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
