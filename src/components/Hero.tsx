import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Code, Database, Globe } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Computer Science Student & Tech Enthusiast";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section 
      className="min-h-screen relative flex items-center justify-center bg-gradient-bg overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-primary rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-primary rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Hello, I'm Brian Shayamano
          </h1>
          
          <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 h-8">
            <span className="border-r-2 border-accent animate-pulse">{text}</span>
          </div>
          
          <p className="text-base sm:text-lg text-foreground/80 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            ALX Alumni passionate about building innovative solutions with modern technologies. 
            Specialized in full-stack development with interests in blockchain, computer vision, and cybersecurity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground font-semibold"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Tech icons */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-accent">
              <Database className="w-6 h-6 text-accent" />
            </div>
            <div className="p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <Globe className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            className="w-6 h-6 text-accent cursor-pointer hover:text-accent-glow transition-colors"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;