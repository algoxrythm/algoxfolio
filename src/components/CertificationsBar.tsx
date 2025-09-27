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
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hero-text">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`certification-card group cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms' 
              }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {cert.icon}
              </div>
              
              {/* Certification Name */}
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                {cert.name}
              </h3>
              
              {/* Issuer */}
              <p className="text-muted-foreground text-sm mb-1">
                {cert.issuer}
              </p>
              
              {/* Year */}
              <p className="text-accent font-medium text-sm">
                {cert.year}
              </p>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/50 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-muted-foreground">
            Always exploring new technologies and expanding expertise
          </p>
          <div className="inline-block mt-4 px-6 py-2 border border-primary/30 rounded-full text-sm hero-text">
            View All Credentials →
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsBar;