import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { Button } from './ui/button';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [hideOnScroll, setHideOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setHideOnScroll(true);
      } else {
        setHideOnScroll(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border transition-transform duration-300 ${hideOnScroll ? '-translate-y-full' : 'translate-y-0'}`}
      >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <Shield className="w-8 h-8 text-primary group-hover:animate-pulse-glow transition-all" />
            <span className="font-mono text-lg font-bold gradient-text">HG</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Tooltip key={link.id}>
                  <TooltipTrigger asChild>
                    <Link
                      to={`/#${link.id}`}
                      className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    Jump to the {link.label} section
                  </TooltipContent>
                </Tooltip>
              ))}

              {/* Blog link as a route */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to="/blog"
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  >
                    Blog
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  Read my latest learning notes
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Always-visible CTAs */}
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="hero" size="sm" asChild>
                    <Link to="/#contact" aria-label="Contact Hemanth from navigation">
                      Contact Me
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  Open the contact form
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="cyber" size="sm" asChild>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      download
                      aria-label="Download Hemanth's resume from navigation"
                    >
                      Download Resume
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  Download my latest resume as PDF
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={`/#${link.id}`}
                  className="px-4 py-3 text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Blog link */}
              <Link
                to="/blog"
                className="px-4 py-3 text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </div>

            {/* Mobile CTAs pinned at bottom of menu */}
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="hero" size="lg" asChild>
                <Link
                  to="/#contact"
                  aria-label="Contact Hemanth from mobile navigation"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Me
                </Link>
              </Button>
              <Button variant="cyber" size="lg" asChild>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  download
                  aria-label="Download Hemanth's resume from mobile navigation"
                  onClick={() => setIsOpen(false)}
                >
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
      </nav>

      {/* Floating 3-line button shown when navbar is hidden on scroll */}
      {hideOnScroll && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-3 right-4 z-40 rounded-full bg-background/90 border border-border shadow-lg hover:bg-secondary/80"
          onClick={scrollToTop}
          aria-label="Open navigation"
        >
          <Menu className="w-6 h-6" />
        </Button>
      )}
    </>
  );
};

export default Navbar;
