import { Award, Calendar, MapPin, FileText } from 'lucide-react';
import { Button } from './ui/button';

const patents = [
  {
    icon: Award,
    title: "CAMP'360",
    subtitle: 'Mobile-Centric Institutional Management Ecosystem',
    patentNumber: '202641045851 A',
    registrationDate: '09/04/2026',
    patentOffice: 'India Patent Office (IPO)',
    description: "A software-defined, multi-modular campus governance system that utilizes a distributed mobile-node architecture as the sole data acquisition layer, replacing traditional physical IoT infrastructure.",
    features: [
      'Virtualized sensor network via smartphone hardware (GPS, Wi-Fi, Biometrics)',
      'Device-less transit telemetry and real-time tracking',
      'Network-bound attendance validation with institutional Wi-Fi IP',
      'Integrated academic, commerce, and dietary modules',
      'Unified secure mobile interface for campus operations'
    ],
    inventors: ['Hemanth G', 'Jayanth', 'Sanjay S', 'Rohin Kumar A'],
    techStack: {
      userInterface: ['Student App (Attendance, Bus Tracking, Payments)', 'Staff Dashboard (Homework Management, Leave Requests)', 'Admin Dashboard (Analytics, Fee Management)'],
      cloudPlatform: ['Attendance Validation Engine (Wi-Fi IP Checking)', 'JIME Abstraction Layer (Middleware)', 'Real-time Transit Logic (GPS Processing)', 'Academic Database (Homework/Results)', 'Secure Commerce (UPI Payments)'],
      mobileSensorLayer: ['Driver Mobile (Virtual GPS)', 'Student/Staff Mobile (Virtual Geofence with Campus Wi-Fi)']
    },
    conclusion: "CAMP'360 is a comprehensive campus management platform that eliminates the need for expensive IoT hardware by transforming the student and staff mobile device into a validated sensor node. By fusing logistics, attendance, and campus commerce into a single, secure software ecosystem, the system ensures institutional transparency and student safety. Its mobile-first architecture provides a scalable solution for modern educational environments to manage daily operations through data-driven intelligence.",
    tags: ['IoT', 'Campus Tech', 'Mobile Solutions', 'System Design'],
    status: 'Registered',
  },
];

const PatentsSection = () => {
  return (
    <section id="patents" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider">// PATENTS & IP</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Registered <span className="gradient-text">Patents</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Intellectual property and innovative solutions developed to solve real-world problems.
            </p>
          </div>

          {/* Patents Grid */}
          <div className="space-y-8">
            {patents.map((patent) => {
              const IconComponent = patent.icon;
              return (
                <div
                  key={patent.title}
                  className="group rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
                >
                  <div className="p-8 md:p-10">
                    {/* Header with Icon and Status */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start gap-4">
                        <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="font-bold text-2xl md:text-3xl mb-1 group-hover:text-primary transition-colors">
                            {patent.title}
                          </h3>
                          <p className="text-muted-foreground font-mono text-sm md:text-base">
                            {patent.subtitle}
                          </p>
                        </div>
                      </div>
                      <span className="px-4 py-2 text-xs font-mono bg-accent/20 text-accent rounded-full border border-accent/30 whitespace-nowrap">
                        {patent.status}
                      </span>
                    </div>

                    {/* Patent Details */}
                    <div className="grid md:grid-cols-3 gap-4 mb-8 pb-8 border-b border-border">
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-primary/60 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wide mb-1">Patent Number</p>
                          <p className="font-semibold text-sm">{patent.patentNumber}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-primary/60 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wide mb-1">Registration Date</p>
                          <p className="font-semibold text-sm">{patent.registrationDate}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary/60 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground font-mono uppercase tracking-wide mb-1">Patent Office</p>
                          <p className="font-semibold text-sm">{patent.patentOffice}</p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {patent.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-8">
                        <h4 className="font-semibold mb-4 text-foreground">Key Features:</h4>
                        <ul className="space-y-3">
                          {patent.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary flex-shrink-0 text-xs font-bold mt-0.5">
                                ✓
                              </span>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-8 p-6 rounded-xl bg-secondary/50 border border-border/50">
                        <h4 className="font-semibold mb-4 text-foreground">System Architecture:</h4>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <h5 className="text-sm font-mono text-primary mb-3 uppercase tracking-wide">User Interface Layer</h5>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {patent.techStack.userInterface.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-mono text-primary mb-3 uppercase tracking-wide">Cloud Platform</h5>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {patent.techStack.cloudPlatform.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-mono text-primary mb-3 uppercase tracking-wide">Mobile Sensor Layer</h5>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {patent.techStack.mobileSensorLayer.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Inventors */}
                      <div className="mb-8">
                        <h4 className="font-semibold mb-4 text-foreground">Patent Claimants:</h4>
                        <div className="flex flex-wrap gap-3">
                          {patent.inventors.map((inventor, idx) => (
                            <div key={idx} className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-foreground font-medium text-sm">
                              {inventor}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Conclusion */}
                      <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
                        <h4 className="font-semibold mb-3 text-foreground">Conclusion:</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {patent.conclusion}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {patent.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono bg-secondary border border-border rounded-full text-foreground hover:border-primary/50 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatentsSection;
