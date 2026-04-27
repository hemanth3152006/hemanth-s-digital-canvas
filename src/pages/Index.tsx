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
        <title>Hemanth G | Cyber Security Student & Full-Stack Developer - Portfolio</title>
        <meta name="description" content="Hemanth G's portfolio - Undergraduate Cyber Security Student, Full-Stack Developer, and Vibe Coder from Chennai. View projects, skills, expertise, and services in web development and cyber security." />
        <meta name="keywords" content="Hemanth G, Hemanth, Cyber Security, Full-Stack Developer, Web Developer, Chennai, Portfolio, Vibe Coder, Software Engineer, Security Enthusiast, React Developer, Node.js, Web Security, Application Development" />
        <meta name="author" content="Hemanth G" />
        <meta property="og:title" content="Hemanth G | Cyber Security Student & Full-Stack Developer" />
        <meta property="og:description" content="Explore Hemanth G's portfolio - Undergraduate Cyber Security Student, Full-Stack Developer, and Vibe Coder. Specializing in web development and cyber security." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hemanthg.dev" />
        <meta property="og:image" content="https://ibb.co/ns0gt0dv" />
        <meta property="og:site_name" content="Hemanth G - Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hemanthg" />
        <meta name="twitter:creator" content="@hemanthg" />
        <meta name="twitter:title" content="Hemanth G | Cyber Security Student & Full-Stack Developer" />
        <meta name="twitter:description" content="Hemanth G's portfolio - Undergraduate Cyber Security Student, Full-Stack Developer, and Vibe Coder" />
        <meta name="twitter:image" content="https://ibb.co/ns0gt0dv" />
        <meta property="og:url" content="https://hemanthg.dev" />
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
