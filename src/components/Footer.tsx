const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "#",
      icon: "🔗"
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: "ll"
    },
    {
      name: "Twitter",
      url: "#",
      icon: "🐦"
    },
    {
      name: "Email",
      url: "mailto:contact@example.com",
      icon: "📧"
    }
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-primary">Get In Touch</h3>
            <p className="text-muted-foreground mb-2">Ready to collaborate on your next project?</p>
            <p className="text-foreground">contact@example.com</p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-primary">Connect</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-2xl hover:scale-110 transition-transform duration-300 hover:text-primary"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <div className="space-y-2">
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Skills
              </a>
              <a href="#certifications" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Certifications
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Portfolio. Built with passion and modern technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;