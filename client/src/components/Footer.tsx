import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-4">John Anderson</div>
          <p className="mb-6">Full Stack Developer • Problem Solver • Tech Enthusiast</p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="mailto:john.anderson@email.com" className="hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          <div className="text-sm text-slate-400">
            © 2024 John Anderson. All rights reserved. Built with passion and modern web technologies.
          </div>
        </div>
      </div>
    </footer>
  );
}
