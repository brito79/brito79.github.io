import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about technology and continuous learning, I'm dedicated to creating 
            impactful solutions that bridge the gap between innovation and real-world applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Education</h3>
              <p className="text-muted-foreground">
                Computer Science Student with a focus on modern software development practices and emerging technologies.
              </p>
              <Badge className="mt-4 bg-primary/10 text-primary border-primary/20">
                ALX Alumni
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:border-accent/50 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Focus Areas</h3>
              <p className="text-muted-foreground mb-4">
                Specialized in full-stack development with strong interests in cutting-edge technologies.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="border-accent/30 text-accent">Blockchain</Badge>
                <Badge variant="outline" className="border-accent/30 text-accent">Computer Vision</Badge>
                <Badge variant="outline" className="border-accent/30 text-accent">Cybersecurity</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Approach</h3>
              <p className="text-muted-foreground">
                I believe in writing clean, efficient code and staying updated with the latest industry trends and best practices.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-card rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">My Journey</h3>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed">
              As an ALX Alumni and Computer Science student, I've developed a strong foundation in software development 
              and a passion for innovative technologies. My journey has led me through various programming languages 
              and frameworks, always with an eye towards solving real-world problems.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              I'm particularly drawn to the intersection of traditional software development and emerging fields like 
              blockchain technology, computer vision, and cybersecurity. This combination allows me to work on projects 
              that are not just technically challenging, but also have the potential to make a meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;