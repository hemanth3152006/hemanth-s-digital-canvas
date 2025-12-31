import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { BlogFeedback } from '@/components/BlogFeedback';

const PerfectionInProgress = () => {
  return (
    <>
      <Helmet>
        <title>Perfection in Progress | Hemanth&apos;s Perspective on Perfection</title>
        <meta
          name="description"
          content="Hemanth&apos;s student perspective on perfection as progress with purpose — blending learning, clarity, creativity, and real-world impact."
        />
        <link
          rel="canonical"
          href="https://hemanthspersonalportfolio.netlify.app/blog/perfection-in-progress"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-24 pb-16">
          <section className="container mx-auto px-4 max-w-3xl">
            <header className="mb-8 text-left">
              <p className="inline-flex flex-wrap items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1 text-[11px] font-mono text-muted-foreground mb-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Mindset · Perfection in Progress</span>
              </p>

              <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
                🎯 Perfection in Progress: A Student Playbook
              </h1>

              <p className="text-xs md:text-sm text-muted-foreground/80 mt-1">
                How a cyber security student and vibe coder turns perfection from pressure into progress with purpose.
              </p>
            </header>

            <article className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-lg font-semibold mb-2">1. Perfection as Endless Learning</h2>
                <p>
                  For me, perfection doesn&apos;t mean being flawless — it means refusing to stop learning.
                  Competitive programming and cybersecurity labs keep me in a constant feedback loop: try, fail,
                  debug, repeat. Every solved problem or exploited vulnerability isn&apos;t just a win on a
                  scoreboard; it&apos;s one more step toward real mastery. Perfection, for me, is motion — not a
                  destination where growth stops.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">2. Perfection in Clarity, Not Complexity</h2>
                <p>
                  I care a lot about how ideas are presented. Whether it&apos;s a resume, a portfolio, a
                  LinkedIn post, or a slide deck, I feel closer to "perfect" when something complex starts
                  to look simple. If a non-technical friend can understand what I built or why a security
                  concept matters, that&apos;s a bigger flex than using the most advanced jargon in the room.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">3. Where Code Meets Creativity</h2>
                <p>
                  My work isn&apos;t just technical. I like when code runs smoothly, but I also like when captions,
                  colors, and copy carry emotion. My version of perfection is when both sides show up: the engineer
                  who cares about performance and security, and the creator who cares about mood, storytelling, and
                  vibe. Logical yet poetic — that balance is where I feel most like myself.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">4. Perfection as Shared Impact</h2>
                <p>
                  I don&apos;t see perfection as becoming a lone genius. The ideal life for me includes teamwork,
                  internships, MoUs, and projects that solve real problems. If my skills help a teammate move
                  faster, help a teacher present better, or help an organization ship something more secure,
                  that&apos;s closer to perfection than doing everything alone and getting all the credit.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">5. Refinement Over First-Try Flawlessness</h2>
                <p>
                  I&apos;m detail-oriented, but I don&apos;t expect myself to get everything right on the first attempt.
                  My version of perfection looks more like refinement: debugging a stubborn bug until it finally
                  disappears, rewriting a caption until it hits the right emotion, or tweaking a portfolio section
                  until it feels sharp and honest. It&apos;s less about being instantly correct and more about not
                  giving up until it shines.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">🌟 One Line That Guides Me</h2>
                <p>
                  If I had to compress my philosophy into a single sentence, it would be this:
                </p>
                <p className="mt-2 font-mono text-xs md:text-sm text-primary">
                  "Perfection is progress with purpose — where learning, clarity, creativity, and impact meet."
                </p>
              </section>
            </article>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link to="/blog">Back to Blog</Link>
              </Button>
            </div>

            <BlogFeedback slug="perfection-in-progress" />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PerfectionInProgress;
