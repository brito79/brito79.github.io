import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "JavaScript", level: 90, color: "primary" },
        { name: "Python", level: 85, color: "accent" },
        { name: "C", level: 75, color: "primary" },
        { name: "HTML/CSS", level: 95, color: "accent" },
        { name: "Java", level: 60, color: "primary" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: "⚛️",
      skills: [
        { name: "React", level: 90, color: "accent" },
        { name: "Next.js", level: 85, color: "primary" },
        { name: "Node.js", level: 80, color: "accent" },
        { name: "Express", level: 85, color: "primary" }
      ]
    },
    {
      title: "Interests & Learning",
      icon: "🚀",
      skills: [
        { name: "Blockchain", level: 70, color: "accent" },
        { name: "Computer Vision", level: 65, color: "primary" },
        { name: "Cybersecurity", level: 70, color: "accent" },
        { name: "Machine Learning", level: 60, color: "primary" }
      ]
    }
  ];

  const tools = [
    "Git", "VS Code", "Docker", "Linux", "MongoDB", "PostgreSQL", 
    "AWS", "Firebase", "Figma", "Postman"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            A comprehensive overview of my technical skills, from programming languages 
            to frameworks and emerging technologies I'm passionate about.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Badge 
                key={tool}
                variant="outline" 
                className={`text-sm py-2 px-4 border transition-all duration-300 hover:scale-105 ${
                  index % 2 === 0 
                    ? 'border-primary/30 text-primary hover:border-primary hover:bg-primary/10' 
                    : 'border-accent/30 text-accent hover:border-accent hover:bg-accent/10'
                }`}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;