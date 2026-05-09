import { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

const certificationsData = [
  {
    title: 'AWS AI Practitioner Challenge',
    issuer: 'AWS & Udacity',
    date: 'May 9, 2026',
    issuerLogo: '/logos/udacity-aws.png',
    image: '/certificates/AWS AI Practitioner Challenge.png',
    description: 'Verified Certificate of Course Completion for the AWS AI Practitioner Challenge through Udacity. This certification demonstrates practical knowledge of AWS AI/ML services and best practices.',
    verificationUrl: 'https://www.udacity.com/certificate/e/aaca843a-311b-1ff1-b213-ffef e5b392a1',
    credentialId: 'aaca843a-311b-1ff1-b213-ffefe5b392a1',
    skills: ['AWS AI', 'Machine Learning', 'Cloud Computing', 'AI Practitioner'],
    issuerCEO: 'Kai Roemmelt',
  },
  {
    title: 'AWS AI & ML Scholars',
    issuer: 'AWS & Udacity',
    date: 'May 9, 2026',
    issuerLogo: '/logos/aws-ml-scholars.png',
    image: '/certificates/AWS AI&ML Scholars.png',
    description: '2026 Challenge Completion Badge for AWS AI & ML Scholars Program. This achievement recognizes completion of the comprehensive AWS AI and Machine Learning scholarship challenge.',
    badgeType: 'Challenge Completion',
    skills: ['AWS AI', 'Machine Learning', 'Artificial Intelligence', 'AWS Services'],
  },
];

const CertificationsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-background"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-accent text-sm tracking-wider">// CERTIFICATIONS & ACHIEVEMENTS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Professional <span className="gradient-text">Credentials</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
          </div>

          {/* Certifications Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {certificationsData.map((cert, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className={`w-full text-left group cursor-pointer rounded-2xl card-gradient border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 overflow-hidden ${
                      isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
                    }`}
                    style={isVisible ? { animationDelay: `${index * 150}ms` } : undefined}
                  >
                    {/* Certificate Image */}
                    <div className="relative h-64 bg-secondary/30 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Header with Icon and Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                          <Award className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 text-xs font-mono bg-accent/15 text-accent rounded-full">
                          {cert.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {cert.title}
                      </h3>

                      {/* Issuer */}
                      <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.slice(0, 2).map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 2 && (
                          <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-md">
                            +{cert.skills.length - 2} more
                          </span>
                        )}
                      </div>

                      {/* View Details Button */}
                      <div className="flex items-center gap-2 text-accent text-sm font-mono group-hover:gap-3 transition-all">
                        <span>View Details</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                </DialogTrigger>

                {/* Dialog Content */}
                <DialogContent className="card-gradient border border-accent/40 max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                        <Award className="w-6 h-6" />
                      </span>
                      <span>{cert.title}</span>
                    </DialogTitle>
                    <DialogDescription className="text-base mt-2">
                      {cert.issuer} • {cert.date}
                    </DialogDescription>
                  </DialogHeader>

                  {/* Certificate Image - Full View */}
                  <div className="my-6 rounded-xl overflow-hidden border border-accent/20">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    {/* Description */}
                    <div>
                      <p className="text-sm text-foreground/90 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Skills & Competencies</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-xs bg-accent/20 text-accent rounded-lg font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Credential Info */}
                    <div className="space-y-2 pt-2 border-t border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Issued By</span>
                        <span className="font-mono text-foreground">{cert.issuer}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Date Issued</span>
                        <span className="font-mono text-accent">{cert.date}</span>
                      </div>
                      {cert.credentialId && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Credential ID</span>
                          <span className="font-mono text-xs text-foreground/70">{cert.credentialId}</span>
                        </div>
                      )}
                      {cert.issuerCEO && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">CEO (Udacity)</span>
                          <span className="font-mono text-foreground">{cert.issuerCEO}</span>
                        </div>
                      )}
                      {cert.badgeType && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Badge Type</span>
                          <span className="font-mono text-accent">{cert.badgeType}</span>
                        </div>
                      )}
                    </div>

                    {/* Verification Link */}
                    {cert.verificationUrl && (
                      <div className="pt-2">
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 mt-2 text-sm font-mono bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground rounded-lg transition-all"
                        >
                          Verify Credential
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}

                    {/* Footer Note */}
                    <p className="text-xs text-muted-foreground/70 mt-4 leading-relaxed pt-2 border-t border-border">
                      This certification validates my knowledge, skills, and commitment to professional development in AWS AI and Machine Learning technologies.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              These certifications demonstrate my commitment to continuous learning and expertise in cloud-based AI and machine learning solutions. I actively pursue industry-recognized credentials to stay updated with the latest technologies and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
