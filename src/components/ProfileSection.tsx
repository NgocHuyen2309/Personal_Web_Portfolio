import { GraduationCap, Award, Code2, Wrench } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function ProfileSection() {
  const ref = useInViewAnimation();

  const skills = {
    languages: ["JavaScript", "HTML/CSS", "Python", "SQL", "C#"],
    frameworks: ["ReactJS", "NodeJS", "Tailwind CSS", "Pandas", "NumPy", "Scikit-learn", "NetworkX"],
    tools: ["Git/GitHub", "Vite", "Microsoft Azure", "VS Code"],
    competencies: ["UI/UX Principles", "Frontend Performance", "Data Flow Architecture"]
  };

  return (
    <section id="profile" ref={ref} className="min-h-screen snap-start w-full bg-purple-50 flex items-center justify-center py-24 px-6 opacity-0">
      <div className="max-w-6xl w-full flex flex-col gap-16">
        
        <div className="text-center">
          <h2 className="inline-block font-serif text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-purple-800 via-amber-400 to-fuchsia-600 animate-gradient mb-4 tracking-tight px-6 py-2 bg-purple-100/30 rounded-full border border-purple-200/50">
            Personal Profile
          </h2>
          <p className="text-lg text-purple-900/70 max-w-2xl mx-auto">
            Solid foundation in building interactive interfaces and highly motivated to transition academic knowledge into real-world practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Education & Certs */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-purple-100 hover:shadow-purple-200/50 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-2xl text-purple-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-purple-950">Education</h3>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-medium text-purple-950 text-lg leading-snug">University of Economics Ho Chi Minh City (UEH)</h4>
                <p className="text-purple-800">Bachelor of Science in Computer Science</p>
                <div className="mt-4 flex flex-wrap justify-between items-center bg-purple-50 text-purple-700 font-medium px-5 py-2.5 rounded-full text-sm">
                  <span>GPA: 3.41 / 4.00</span>
                  <span className="text-purple-500/80">Aug. 2023 - Present</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-purple-100 hover:shadow-purple-200/50 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-100 p-3 rounded-2xl text-amber-600">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-purple-950">Certificates</h3>
              </div>
              <ul className="flex flex-col gap-4">
                <li className="flex justify-between items-center border-b border-purple-50 pb-3">
                  <span className="text-purple-900 font-medium">TOEIC Listening & Reading</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">940</span>
                </li>
                <li className="flex justify-between items-center border-b border-purple-50 pb-3">
                  <span className="text-purple-900 font-medium">IELTS</span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold">6.5</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Skills */}
          <div className="lg:col-span-7 bg-purple-100/50 rounded-3xl p-8 md:p-10 shadow-sm border border-purple-100 hover:shadow-purple-200/50 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-purple-200 p-3 rounded-2xl text-purple-700">
                <Code2 className="w-6 h-6 animate-float" />
              </div>
              <h3 className="text-2xl font-medium text-purple-950">Technical Arsenal</h3>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-sm font-medium text-purple-600 uppercase tracking-widest mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map(skill => (
                    <span key={skill} className="bg-white border border-purple-200 text-purple-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:scale-110 hover:bg-purple-50 transition-transform cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-purple-600 uppercase tracking-widest mb-3">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map(skill => (
                    <span key={skill} className="bg-gradient-to-r from-purple-400 to-fuchsia-400 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:scale-110 hover:opacity-90 transition-transform cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-purple-600 uppercase tracking-widest mb-3">Developer Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map(skill => (
                    <span key={skill} className="bg-white border border-amber-200 text-amber-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:scale-110 hover:bg-amber-50 transition-transform cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
