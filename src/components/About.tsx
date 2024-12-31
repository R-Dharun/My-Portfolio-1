import { Code2} from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - Web Development */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
            <Code2 className="mx-auto mb-4 text-teal-400" size={32} />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Web Development</h3>
            <p className="text-gray-300">
              Passionate about creating responsive and performant web applications using modern technologies.
            </p>
          </div>

          {/* Card 2 - UI/UX Design */}

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
            <Code2 className="mx-auto mb-4 text-teal-400" size={32} />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">UI/UX Design</h3>
            <p className="text-gray-300">
            Focused on creating beautiful and intuitive user interfaces with great user experience.
            </p>
          </div>
          
          {/* Card 3 - Problem Solving */}

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
            <Code2 className="mx-auto mb-4 text-teal-400" size={32} />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Problem Solving</h3>
            <p className="text-gray-300">
            Love tackling complex problems and finding elegant solutions through code.
            </p>
          </div>

        
       

        </div>
      </div>
    </section>
  );
}
