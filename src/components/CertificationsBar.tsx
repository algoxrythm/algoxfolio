import { useEffect, useState } from "react";

interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  icon?: string;
}

const CertificationsBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Sample certifications - these can be easily updated
  const certifications: Certification[] = [
    {
      id: "1",
      name: "React Developer",
      issuer: "Meta",
      year: "2024",
      icon: "⚛️"
    },
    {
      id: "2",
      name: "AWS Solutions Architect",
      issuer: "Amazon",
      year: "2023",
      icon: "☁️"
    },
    {
      id: "3",
      name: "TypeScript Expert",
      issuer: "Microsoft",
      year: "2024",
      icon: "📘"
    },
    {
      id: "4",
      name: "Full Stack Developer",
      issuer: "FreeCodeCamp",
      year: "2023",
      icon: "🚀"
    },
    {
      id: "5",
      name: "UI/UX Design",
      issuer: "Google",
      year: "2024",
      icon: "🎨"
    },
    {
      id: "6",
      name: "Node.js Developer",
      issuer: "OpenJS Foundation",
      year: "2023",
      icon: "🟢"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('certifications-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section 
      id="certifications-section"
      className="py-20 px-6 bg-gradient-to-r from-secondary/50 to-muted/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications Timeline
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Professional development journey through cutting-edge technologies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2 hidden md:block" />
          
          {/* Timeline Items */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className={`timeline-item group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms' 
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 group-hover:scale-125 transition-transform duration-300 hidden md:block" />
                
                {/* Content Card */}
                <div className="bg-card border border-border rounded-lg p-4 max-w-xs hover:scale-105 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
                  {/* Icon */}
                  <div className="text-2xl mb-2 text-center">
                    {cert.icon}
                  </div>
                  
                  {/* Certification Name */}
                  <h3 className="font-semibold text-base mb-1 text-center group-hover:text-primary transition-colors duration-300">
                    {cert.name}
                  </h3>
                  
                  {/* Issuer */}
                  <p className="text-muted-foreground text-sm text-center mb-1">
                    {cert.issuer}
                  </p>
                  
                  {/* Year */}
                  <p className="text-accent font-medium text-sm text-center">
                    {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsBar;