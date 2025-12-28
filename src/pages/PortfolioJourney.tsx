import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const PortfolioJourney = () => {
  return (
    <>
      <Helmet>
        <title>Behind the Scenes | Hemanth G&apos;s Portfolio Journey</title>
        <meta
          name="description"
          content="Behind the scenes story of how Hemanth G built his personal portfolio during the December holidays, focusing on clean design, daily updates, and continuous learning."
        />
        <link rel="canonical" href="https://hemanthspersonalportfolio.netlify.app/portfolio-journey" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-24 pb-16">
          <section className="container mx-auto px-4 max-w-3xl">
            <header className="mb-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1 text-xs font-mono text-muted-foreground mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Story · Behind the portfolio</span>
              </p>

              <h1 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">
                🎬 Behind the Scenes of My Portfolio Journey
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">
                Every great project has a story, and mine began during the December holidays. Instead of just relaxing,
                I decided to build something usefulsomething that would reflect both my skills and my personality.
                That&apos;s how my portfolio came to life.
              </p>
            </header>

            <article className="space-y-4 text-sm md:text-base text-muted-foreground">
              <section>
                <h2 className="font-semibold mb-1">1️⃣ Holiday Hustle</h2>
                <p>
                  While others were getting an paid internship, some of them getting offers,then even more than that many were participating in hackathons, I was sketching ideas, coding layouts, and polishing designs.
                  December became my launchpad for creativity.
                </p>
              </section>

              <section>
                <h2 className="font-semibold mb-1">2️⃣ Clean &amp; Neat by Design</h2>
                <p>
                  I wanted my portfolio to feel like a well-organized desk-minimal clutter, maximum clarity. Every
                  section was carefully structured so visitors could instantly understand who I am and what I do.
                </p>
              </section>

              <section>
                <h2 className="font-semibold mb-1">3️⃣ Daily Updates, Daily Growth</h2>
                <p>
                  A portfolio shouldn&apos;t be static. Mine runs like a living journal, updated every day with fresh
                  insights, projects, and tweaks. It&apos;s not just a showcase—it&apos;s a timeline of growth.
                </p>
              </section>

              <section>
                <h2 className="font-semibold mb-1">4️⃣ Eye-Catching &amp; Storytelling</h2>
                <p>
                  Design isn&apos;t just about colors and fonts. My portfolio had to speak. From visuals to captions, it
                  tells the story of my journey in cybersecurity, programming, and beyond.
                </p>
              </section>

              <section>
                <h2 className="font-semibold mb-1">5️⃣ Tech Corner Chronicles</h2>
                <p>
                  I built a special corner dedicated to daily updates on new technologies and security trends. Think of
                  it as my personal newsroom—always buzzing with the latest discoveries.
                </p>
              </section>

              <section>
                <h2 className="font-semibold mb-1">6️⃣ Learning Never Stops</h2>
                <p>
                  Every update reflects something new I&apos;ve learned. Whether it&apos;s a coding trick, a security concept,
                  or a creative experiment, my portfolio is proof that learning is a continuous adventure.
                </p>
              </section>

              <section>
                <h2 className="font-semibold mb-1">7️⃣ Reaching More Hearts &amp; Minds</h2>
                <p>
                  Finally, it&apos;s not enough to build—it has to reach people. Through sharing, networking, and presenting,
                  I&apos;m making sure my portfolio connects with more members of the tech community and beyond.
                </p>
              </section>

              <p className="text-xs md:text-sm text-muted-foreground/80">
                If this journey resonates with you or you&apos;d like to collaborate, feel free to reach out—I&apos;d love to
                discuss ideas, projects, and opportunities.
              </p>
            </article>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/blog">Back to Blog</Link>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PortfolioJourney;
