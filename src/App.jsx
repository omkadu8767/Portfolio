import { About } from './components/About.jsx';
import { Certifications } from './components/Certifications.jsx';
import { Contact } from './components/Contact.jsx';
import { Education } from './components/Education.jsx';
import { Hackathons } from './components/Hackathons.jsx';
import { Hero } from './components/Hero.jsx';
import { Internships } from './components/Internships.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Projects } from './components/Projects.jsx';

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
        {/* <ParticlesBackground /> */}
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Internships />
        <Education />
        <Hackathons />
        <Contact />
      </div>
      <div className="w-full bg-gray-900 flex justify-center items-center py-6">
        <a href='https://www.linkedin.com/in/om-kadu-53305425a/' target='_blank'><span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold text-sm">
          Made with love <span style={{ color: 'red' }}>❤️</span> by OK
        </span></a>
      </div>
    </>
  );
};

export default App;