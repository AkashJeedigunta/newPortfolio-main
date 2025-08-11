import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      period: "2020 - Present",
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      description: "Lead enterprise applications serving 100K+ users. Architected microservices and mentored development teams.",
      technologies: ["React", "Node.js", "AWS"],
      dotColor: "bg-emerald-500"
    },
    {
      period: "2017 - 2020", 
      title: "Full Stack Developer",
      company: "StartupXYZ",
      description: "Built core platform from ground up. Implemented payment systems and scaled infrastructure for rapid growth.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      dotColor: "bg-purple-500"
    },
    {
      period: "2013 - 2017",
      title: "JavaScript Developer", 
      company: "WebAgency Pro",
      description: "Developed interactive web applications. Specialized in responsive design and performance optimization.",
      technologies: ["jQuery", "PHP", "MySQL"],
      dotColor: "bg-orange-500"
    }
  ];

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            11+ years building innovative solutions
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-300 dark:from-slate-600 dark:via-slate-500 dark:to-slate-600 hidden md:block rounded-full shadow-sm"></div>
          
          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className={`relative flex items-center mb-16 ${
                isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Timeline dot */}
              <div className={`absolute left-1/2 transform -translate-x-4 w-8 h-8 rounded-full ${experience.dotColor} border-4 border-white dark:border-slate-900 shadow-2xl z-10 hidden md:block animate-timeline-pulse`}></div>
              
              {/* Connecting line to next dot */}
              {index < experiences.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-0.5 top-8 w-1 h-8 bg-gradient-to-b from-current to-slate-300 dark:to-slate-600 hidden md:block z-0 opacity-60"></div>
              )}
              
              {/* Content card */}
              <div className={`w-full md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
              }`}>
                <div className={`group p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-slate-800/90 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  
                  {/* Period badge */}
                  <div className={`inline-block text-sm font-medium text-white bg-primary px-4 py-1.5 rounded-full mb-4 ${
                    index % 2 === 0 ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'
                  }`}>
                    {experience.period}
                  </div>
                  
                  <div className="clear-both">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-primary font-semibold mb-3">
                      {experience.company}
                    </p>
                    
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {experience.description}
                    </p>
                    
                    <div className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    } justify-start`}>
                      {experience.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-primary/10 hover:text-primary transition-colors duration-200 border border-slate-200 dark:border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
