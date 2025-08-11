import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = [
    "Developer",
    "Problem Solver",
    "Tech Enthusiast",
    "Code Architect",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // In a real app, this would download an actual resume file
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center">
          <div className="mb-6 animate-scale-in">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
              alt="Akash Jeedigunta - Full Stack Developer"
              className="w-32 h-32 rounded-full mx-auto mb-8 shadow-2xl animate-float object-cover animate-pulse-glow"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            Hi, I'm <span className="gradient-text">Akash</span>
          </h1>

          <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-2 animate-slide-up animate-stagger-1">
            Full Stack JavaScript
          </div>

          <div className="text-xl md:text-2xl font-semibold text-primary mb-8 h-8 animate-slide-up animate-stagger-2">
            <span
              key={currentWord}
              className="inline-block animate-slide-in-left"
            >
              {words[currentWord]}
            </span>
          </div>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto animate-slide-up animate-stagger-3">
            With <span className="font-semibold text-primary">11+ years </span>
            of experience building modern, secure, and scalable web applications
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up animate-stagger-4">
            <Button
              onClick={downloadResume}
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-glow"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>

            <Button
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Let's Talk
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-8 animate-fade-in animate-stagger-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-600 dark:text-slate-400 hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-600 dark:text-slate-400 hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-slate-600 dark:text-slate-400 hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>

          {/* Scroll down indicator */}
          <div className="animate-bounce-slow">
            <button
              onClick={scrollToAbout}
              className="text-slate-400 hover:text-primary transition-colors duration-300"
            >
              <ArrowDown className="h-6 w-6 mx-auto animate-bounce-slow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
