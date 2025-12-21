import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hemanth G | Cyber Security Student & Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Hemanth G - Undergraduate Cyber Security Student, Full-Stack Enthusiast, and Vibe Coder based in Chennai. Explore my projects, skills, and services." />
        <meta name="keywords" content="Hemanth G, Cyber Security, Full-Stack Developer, Web Developer, Chennai, Portfolio, Vibe Coder" />
        <meta property="og:title" content="Hemanth G | Cyber Security Student & Developer" />
        <meta property="og:description" content="Portfolio of Hemanth G - Undergraduate Cyber Security Student and Full-Stack Enthusiast." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hemanthg.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <SkillsSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
