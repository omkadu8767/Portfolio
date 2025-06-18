import { Box, Code, Palette, Rocket } from 'lucide-react';

export const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React.js', 'JavaScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js','Java', 'Python', 'MySQL', 'MongoDB', 'Express', 'Firebase'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'VS Code', 'Google Cloud (Basic)'] },
  ];

  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for clean, efficient code. With experience in modern web technologies, I enjoy creating digital experiences that are both beautiful and functional.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">I'm also a Java enthusiast and regularly practice Data Structures and Algorithms (DSA) to sharpen my problem-solving skills and stay technically strong.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or participating in hackathons. I believe in continuous learning and staying
              up-to-date with the latest industry trends.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300">
              <Code className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-400">Writing maintainable, scalable, and efficient code that stands the test of time.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors duration-300">
              <Box className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Product-Oriented Development</h3>
              <p className="text-gray-400">Creating user-focused digital tools that solve real-world problems with clean code and seamless UX</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition-colors duration-300">
              <Rocket className="text-pink-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-400">Always exploring new technologies and pushing the boundaries of what's possible.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition-colors duration-200"
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
};