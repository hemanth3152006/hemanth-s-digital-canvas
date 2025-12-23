import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Instagram, Send, MapPin, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'govindasamyhemanth@gmail.com',
    href: 'mailto:govindasamyhemanth@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 63690 XXXXX',
    href: 'tel:+9163690XXXXX',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, India',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hemanth-g-6184191b2/',
    username: 'Hemanth G',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/hemanth3152006',
    username: 'hemanth3152006',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com/mr_g_nobody_pvt',
    username: 'mr_g_nobody_pvt',
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">// CONTACT</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  const Wrapper = info.href ? 'a' : 'div';
                  return (
                    <Wrapper
                      key={info.label}
                      {...(info.href ? { href: info.href } : {})}
                      className="flex items-center gap-4 p-4 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Follow Me</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
                      >
                        <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {social.username}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <p className="text-sm">
                    <span className="text-primary font-medium">Available</span>
                    <span className="text-muted-foreground"> for internships and collaborations</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl card-gradient border border-border">
              <h3 className="font-semibold text-xl mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" variant="cyber" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
