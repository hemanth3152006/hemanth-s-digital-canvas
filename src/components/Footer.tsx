import { Shield, Heart, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Back to Top */}
          <div className="flex justify-center mb-8">
            <a
              href="#home"
              className="group p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Main Footer Content */}
          <div className="text-center space-y-4">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-mono text-lg font-bold gradient-text">Hemanth G</span>
            </div>

            {/* Tagline */}
            <p className="text-muted-foreground font-mono text-sm">
              &lt; Vibe Coder • Cyber Security Student • Creative Mind /&gt;
            </p>

            {/* Copyright */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Hemanth G. Made with</span>
              <Heart className="w-4 h-4 text-destructive animate-pulse" />
              <span>in Chennai</span>
            </div>

            {/* Additional Info */}
            <p className="text-xs text-muted-foreground/60">
              Building the future, one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
