import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingActionButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Contact FAB */}
      <Button
        onClick={scrollToContact}
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-2xl animate-float hover:scale-110 transition-all duration-300 group"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </Button>

      {/* Scroll to top FAB */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-slate-600 hover:bg-slate-500 text-white shadow-xl animate-scale-in hover:scale-110 transition-all duration-300 group"
        >
          <ArrowUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
        </Button>
      )}
    </div>
  );
}