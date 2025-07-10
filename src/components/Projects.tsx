import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Plus } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "🛒",
      github: "#",
      live: "#",
      category: "Full Stack"
    },
    {
      title: "Computer Vision App",
      description: "Real-time object detection application using Python and OpenCV. Implements YOLO algorithm for accurate object recognition and tracking.",
      tech: ["Python", "OpenCV", "TensorFlow", "YOLO"],
      image: "👁️",
      github: "#",
      live: "#",
      category: "AI/ML"
    },
    {
      title: "QR Code Generator & Scanner",
      description: "Dynamic QR code generator and scanner application with customizable designs. Features batch generation, analytics tracking, and various export formats.",
      tech: ["React", "Node.js", "qrcode.js", "jimp", "MongoDB"],
      image: "📱",
      github: "#",
      live: "#",
      category: "Utility"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            A showcase of my work spanning web development, computer vision, and utility applications. 
            Each project represents a learning journey and technical challenge.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{project.image}</span>
                  <Badge 
                    variant="outline" 
                    className={`${
                      index % 2 === 0 
                        ? 'border-primary/30 text-primary' 
                        : 'border-accent/30 text-accent'
                    }`}
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary" 
                      className="text-xs bg-muted text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-border hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add project placeholder */}
        <Card className="bg-gradient-card border border-dashed border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Plus className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
              More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground">
              I'm constantly working on new projects and learning new technologies. 
              Stay tuned for more exciting developments!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;