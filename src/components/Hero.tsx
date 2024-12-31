
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span className="text-blue-400">Dharun</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Full Stack Developer | UI/UX Enthusiast
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/R-Dharun" className="hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/dharun-r-1875b9246/" className="hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:dharunmax@gmail.com" className="hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <button className="animate-bounce">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}