import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';

const testimonials = [
  {
    name: 'Prof. Rajesh Kumar',
    role: 'Cybersecurity Faculty Advisor',
    company: 'CSE Department',
    content: 'Hemanth demonstrates exceptional problem-solving skills and a deep understanding of security principles. His projects show maturity in design and implementation.',
    rating: 5,
    image: null,
  },
  {
    name: 'Akshay Sharma',
    role: 'Senior Developer',
    company: 'Tech Lead Community',
    content: 'Impressive technical depth for a student. Hemanth understands not just how to build, but how to build secure and scalable solutions.',
    rating: 5,
    image: null,
  },
  {
    name: 'Priya Nair',
    role: 'Product Manager',
    company: 'EdTech Startup',
    content: 'Great collaboration on the transport tracker project. Hemanth was detail-oriented and delivered features that exceeded expectations.',
    rating: 5,
    image: null,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">// TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              What <span className="gradient-text">Colleagues Say</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feedback from mentors, peers, and collaborators who've worked with me.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Card Content */}
                <div className="p-8 flex flex-col h-full">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-primary/70 font-mono">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-lg transition-colors duration-500 pointer-events-none" />
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center p-8 rounded-2xl bg-secondary/30 border border-border">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to work together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm available for freelance projects, collaborations, and full-time opportunities.
              Let's discuss how I can help you achieve your goals.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Get In Touch
              <Star className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
