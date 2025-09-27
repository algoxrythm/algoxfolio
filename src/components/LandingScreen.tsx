import { useEffect, useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";

const LandingScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
      
      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
          <span className="hero-text block mb-2">Creative</span>
          <span className="hero-text block text-primary animate-glow-pulse">Developer</span>
        </h1>
        
        {/* Subtitle */}
        <p className="hero-text text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Crafting digital experiences with precision, passion, and innovation
        </p>
        
        {/* Additional Dynamic Text */}
        <div className="space-y-4">
          <div className="hero-text inline-block px-6 py-3 border border-primary/30 rounded-full text-lg">
            Full-Stack Development
          </div>
          <div className="hero-text inline-block ml-4 px-6 py-3 border border-accent/30 rounded-full text-lg">
            UI/UX Design
          </div>
        </div>
        
        {/* Floating Animation Element */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full animate-float hidden lg:block" />
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-accent/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default LandingScreen;