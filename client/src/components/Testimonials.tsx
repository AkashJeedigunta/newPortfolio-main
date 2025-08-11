import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60",
      content: "John's technical expertise and attention to detail are exceptional. He delivered a complex project on time and exceeded our expectations.",
      color: "primary"
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupXYZ",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60",
      content: "Working with John was a game-changer for our startup. His full-stack skills helped us launch faster than we ever imagined.",
      color: "secondary"
    },
    {
      name: "Emily Rodriguez",
      role: "Team Lead, WebAgency",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60",
      content: "John is not just a developer, he's a problem solver. His insights helped improve our entire development process.",
      color: "accent"
    }
  ];

  return (
    <section id="testimonials" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Feedback from colleagues and clients I've had the pleasure to work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer ${
                isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 relative overflow-hidden">
                {/* Decorative gradient background */}
                <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-10 transition-opacity duration-300 group-hover:opacity-20 ${
                  testimonial.color === 'primary' ? 'bg-primary' :
                  testimonial.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                }`}></div>
                
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 mr-2 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 fill-current transition-all duration-300 transform ${
                          isVisible ? 'animate-scale-in' : 'scale-0'
                        }`}
                        style={{ animationDelay: `${index * 0.2 + i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4 italic relative z-10">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center relative z-10">
                  <div className="relative">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className={`w-12 h-12 rounded-full mr-4 object-cover transition-all duration-300 group-hover:scale-110 border-2 ${
                        testimonial.color === 'primary' ? 'border-primary/20' :
                        testimonial.color === 'secondary' ? 'border-secondary/20' : 'border-accent/20'
                      }`}
                    />
                    <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${
                      testimonial.color === 'primary' ? 'bg-primary' :
                      testimonial.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                    }`}></div>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className={`text-sm transition-colors duration-300 ${
                      testimonial.color === 'primary' ? 'text-primary/70 group-hover:text-primary' :
                      testimonial.color === 'secondary' ? 'text-secondary/70 group-hover:text-secondary' : 
                      'text-accent/70 group-hover:text-accent'
                    }`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
