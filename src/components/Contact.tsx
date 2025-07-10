import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex@example.com",
      href: "mailto:alex@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Your City, Country",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      color: "hover:text-accent"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "hover:text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having 
            a conversation about technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <a 
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:shadow-glow ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <Input 
                      id="firstName"
                      placeholder="John"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input 
                      id="lastName"
                      placeholder="Doe"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input 
                    id="subject"
                    placeholder="Project Collaboration"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;