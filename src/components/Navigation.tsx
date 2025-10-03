import { useState } from "react";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold hover:opacity-70 transition-opacity"
        >
          IG
        </button>

        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm font-light hover:opacity-70 transition-opacity tracking-wide"
          >
            Главная
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="text-sm font-light hover:opacity-70 transition-opacity tracking-wide"
          >
            Галерея
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon name={isOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 hover:opacity-70 transition-opacity"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left py-2 hover:opacity-70 transition-opacity"
            >
              Галерея
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
