
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 bg-green" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-blue-500">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500" />
            <div className="mb-8">
              <div className="flex items-center gap-2 text-blue-500 mb-2">
                <GraduationCap size={20} />
                <span className="font-semibold">2020 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Bachelor of Engineering</h3>
              <p className="text-gray-600 mb-2">Mepco Schlenk Engineering College</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Major in Computer Science and Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>



    


  );
}