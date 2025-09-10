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
                <span className="font-semibold">Jul 2025 - Present</span>
              </div>
              
              <p className="text-xl font-bold mb-2"> Infosys</p>
              <h3 className="text-gray-600 mb-2">Associate</h3>
              <ul className="list-disc list-outside pl-5 text-gray-600 leading-relaxed">
                <li>Upgraded the Infosys LEX learning platform, improving accessibility for employees.</li>
                <li>Built responsive frontend features with ReactJS to enhance UI/UX.</li>
                <li>Supported backend development in Spring Boot, focusing on APIs and performance.</li>
                <li>Collaborated with the team to deliver smooth platform upgrades.</li>
              </ul>
            </div>


            <div className="mb-8">
              <div className="flex items-center gap-2 text-blue-500 mb-2">
                <Briefcase size={20} />
                <span className="font-semibold">Feb 2025 - Jun 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Revature </h3>
              <p className="text-gray-600 mb-2">Java React Full Stack Developer</p>
              <ul className="list-disc list-outside pl-5 text-gray-600 leading-relaxed">
                <li>Trained in Java, Spring Boot, Hibernate, and AngularJS for full react full stack web development.</li>
                <li>Built and deployed scalable apps using TypeScript, SQL Server, and Azure Services.</li>
                <li>Integrated RESTful APIs with React.js for dynamic front-end experiences.</li>
                <li>Improved problem-solving through coding challenges and real-world projects.</li>
                <li>Collaborated in Agile teams using Jira for sprint planning and task tracking.</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center gap-2 text-blue-500 mb-2">
                <Briefcase size={20} />
                <span className="font-semibold">Jun 2024 - Dec 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-2 ">DHL</h3>
              <p className="text-gray-600 mb-2">Associate Software Engineer</p>
              <ul className="list-disc list-outside pl-5 text-gray-600 leading-relaxed">
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
