import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

export function About() {
  const { ref, isVisible } = useScrollAnimation();
  const [animatedSkills, setAnimatedSkills] = useState([0, 0, 0, 0]);

  const skills = [
    { name: "React & Next.js", level: 95, color: "primary" },
    { name: "Node.js & Express", level: 90, color: "secondary" },
    { name: "TypeScript", level: 85, color: "accent" },
    { name: "AWS & Cloud", level: 80, color: "primary" },
  ];

  const technologies = [
    "JavaScript", "React", "Node.js", "TypeScript", "PostgreSQL", 
    "MongoDB", "AWS", "Docker", "GraphQL", "Redis"
  ];

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        skills.forEach((skill, index) => {
          setTimeout(() => {
            setAnimatedSkills(prev => {
              const newSkills = [...prev];
              newSkills[index] = skill.level;
              return newSkills;
            });
          }, index * 200);
        });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skills]);

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code and innovative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              With over a decade of experience in full-stack development, I've had the privilege of working 
              with startups and enterprise companies, building everything from small business websites to 
              large-scale applications serving millions of users.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I specialize in modern JavaScript frameworks, secure application architecture, and creating 
              intuitive user experiences that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {["Problem Solver", "Team Leader", "Continuous Learner"].map((badge, index) => (
                <Badge 
                  key={badge} 
                  variant="secondary" 
                  className={`px-3 py-1 transition-all duration-500 transform hover:scale-105 ${
                    badge === "Problem Solver" ? "bg-primary/10 text-primary" :
                    badge === "Team Leader" ? "bg-secondary/10 text-secondary" :
                    "bg-accent/10 text-accent"
                  } ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-slate-500 font-semibold">
                      {animatedSkills[index]}%
                    </span>
                  </div>
                  <div className="relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out ${
                        skill.color === 'primary' ? 'bg-gradient-to-r from-primary to-blue-500' :
                        skill.color === 'secondary' ? 'bg-gradient-to-r from-secondary to-purple-500' :
                        'bg-gradient-to-r from-accent to-green-500'
                      }`}
                      style={{ 
                        width: `${animatedSkills[index]}%`,
                        transitionDelay: `${index * 200}ms`
                      }}
                    >
                      <div className="h-full bg-gradient-to-r from-transparent to-white/20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Technologies I Work With</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className={`px-3 py-1 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer ${
                      isVisible ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.8 + index * 0.05}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
