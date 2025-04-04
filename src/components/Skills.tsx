export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C/C++', 'Python', 'Java', 'HTML/CSS', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Frameworks',
      skills: ['Angular', 'Spring Framework']
    },
    {
      title: 'Developer Tools',
      skills: ['GitHub', 'Visual Studio Code', 'Postman',]
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Cloud',
      skills: ['Microsoft Azure']
    }
  ];

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-8xl mx-auto grid md:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 border border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
