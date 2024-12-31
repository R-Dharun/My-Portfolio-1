
import {  Github } from 'lucide-react';

const projects = [
  {
    title: "Hospital Management System",
    description: "A full-stack hospital management with React and Node.js",
    image: "https://plus.unsplash.com/premium_photo-1681842887257-297cde7affa3?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/R-Dharun/Hospital-Management-System-MEAN.git",
    
  },
  {
    title: " Online Banking Application ",
    description: "A robust and scalable Online Banking Application",
    image: "https://plus.unsplash.com/premium_photo-1680363254554-d1c63ad8d33d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/R-Dharun/Online-Banking-System.git",
    
  },
  {
    title: "SkyBokker",
    description: "An intuitive Airline Booking webpage designed for seamless flight search, booking, and travel management.",
    image: "https://plus.unsplash.com/premium_photo-1701006367868-415d98cadd87?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/R-Dharun/SkyBooker.git",
    
  }
  
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  >
                    <Github size={20} />
                    Code
                  </a>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}