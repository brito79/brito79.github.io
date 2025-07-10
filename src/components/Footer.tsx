import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      label: "Twitter"
    }
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Alex.dev
            </h3>
            <p className="text-muted-foreground">
              Computer Science Student & Tech Enthusiast passionate about building 
              innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Alex.dev. All rights reserved.
          </p>
          <div className="flex items-center text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            <span>using React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;