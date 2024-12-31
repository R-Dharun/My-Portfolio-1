
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-blue-500">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500" />
            <div className="mb-8">
              <div className="flex items-center gap-2 text-blue-500 mb-2">
                <Briefcase size={20} />
                <span className="font-semibold">2022 - Present</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Associate Software Engineer</h3>
              <p className="text-gray-600 mb-2">DHL</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Developed and maintained web applications using modern technologies, like ReactJS, NodeJS.</li>
                <li>Worked on innovative projects utilizing the OpenAI API, demonstrating expertise in Generative AI and machine learning applications.</li>
                <li>Leveraged GitHub for version control and Microsoft Azure for deploying scalable applications, ensuring efficient deployment workflows.</li>
                <li>Designed and implemented interactive dashboards in Power BI tailored to the finance team's requirements, enhancing data visualization.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}