import { useEffect, useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";

const DynamicSkills = () => {
  const skills = [
    "React & TypeScript",
    "Node.js & Express",
    "Python & Django",
    "Cloud Architecture",
    "UI/UX Design",
    "Database Design",
    "DevOps & CI/CD",
    "Mobile Development"
  ];

  const [currentSkill, setCurrentSkill] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSkill((prev) => (prev + 1) % skills.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="mb-6">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {skills.slice(0, 3).map((skill, index) => (
          <div
            key={skill}
            className={`skill-tag px-4 py-2 border border-primary/30 rounded-full text-sm transition-all duration-500 ${
              index === currentSkill % 3 ? 'bg-primary/20 text-primary scale-110' : 'text-muted-foreground hover:text-primary hover:border-primary/50'
            }`}
          >
            {skill}
          </div>
        ))}
      </div>
      
      <div className={`text-2xl md:text-3xl font-semibold text-accent transition-all duration-500 ${
        isAnimating ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
      }`}>
        {skills[currentSkill]}
      </div>
    </div>
  );
};

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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="hero-text block mb-2">Creative</span>
          <span className="hero-text block text-primary">Developer</span>
        </h1>
        
        {/* Dynamic Skills Display */}
        <DynamicSkills />
        
        {/* Subtitle */}
        <p className="hero-text text-lg md:text-xl text-muted-foreground mt-8 max-w-3xl mx-auto">
          Crafting digital experiences with precision, passion, and innovation
        </p>
        
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