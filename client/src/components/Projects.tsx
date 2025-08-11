import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built for scalability and performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      category: "web",
      color: "primary"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop interface, and team communication features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "Socket.io", "Express", "PostgreSQL"],
      category: "web",
      color: "secondary"
    },
    {
      title: "REST API Service",
      description: "Scalable REST API with authentication, rate limiting, and comprehensive documentation. Handles 10K+ requests per minute.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Node.js", "Express", "JWT", "Redis"],
      category: "api",
      color: "accent"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "api", label: "APIs" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and problem-solving approach
          </p>
        </div>
        
        {/* Project filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeFilter === filter.id
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className={`bg-white dark:bg-slate-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-scale-in group cursor-pointer ${
                index % 3 === 0 ? 'animate-stagger-1' : 
                index % 3 === 1 ? 'animate-stagger-2' : 'animate-stagger-3'
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-lg font-semibold mb-2">View Project</div>
                    <div className="flex space-x-3">
                      <Github className="h-6 w-6 hover:scale-125 transition-transform" />
                      <ExternalLink className="h-6 w-6 hover:scale-125 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className={`text-xs ${
                        project.color === 'primary' ? 'border-primary/20 text-primary bg-primary/10' :
                        project.color === 'secondary' ? 'border-secondary/20 text-secondary bg-secondary/10' : 
                        'border-accent/20 text-accent bg-accent/10'
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <Button variant="ghost" size="sm" className={`p-2 ${
                      project.color === 'primary' ? 'hover:text-primary' :
                      project.color === 'secondary' ? 'hover:text-secondary' : 'hover:text-accent'
                    }`}>
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className={`p-2 ${
                      project.color === 'primary' ? 'hover:text-primary' :
                      project.color === 'secondary' ? 'hover:text-secondary' : 'hover:text-accent'
                    }`}>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button 
                    variant="link" 
                    size="sm"
                    className={`text-sm font-medium hover:underline ${
                      project.color === 'primary' ? 'text-primary' :
                      project.color === 'secondary' ? 'text-secondary' : 'text-accent'
                    }`}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
