import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { BlogFeedback } from '@/components/BlogFeedback';

const VibeCoderMindset = () => {
  return (
    <>
      <Helmet>
        <title>Vibe-Coding Chronicles | The Vibe Coder Mindset</title>
        <meta
          name="description"
          content="A last-bencher's take on vibe-coding with AI agents, bugs, chaos, and learning while building real projects like an LMS."
        />
        <link
          rel="canonical"
          href="https://hemanthspersonalportfolio.netlify.app/blog/vibe-coder-mindset"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-24 pb-16">
          <section className="container mx-auto px-4 max-w-3xl">
            <header className="mb-8 text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1 text-xs font-mono text-muted-foreground mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Mindset · Vibe-Coding Chronicles</span>
              </p>

              <h1 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">
                📓 Vibe-Coding Chronicles: A Last-Bencher&apos;s Take
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">
                A raw, last-bencher style reflection on building with AI agents, breaking things, fixing them, and
                finding your own vibe as a developer in an AI-first world.
              </p>
            </header>

            <article className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-lg font-semibold mb-2">🚀 How It All Started</h2>
                <p className="mb-3">
                  Five years ago, I never thought I&apos;d be chatting with a computer and actually feeling like it&apos;s human.
                  Then came ChatGPT, and suddenly the world looked like it was heading straight into a Terminator sequel.
                  Jobs started shifting, developers (like me) panicked, and AI began flexing its muscles — writing code,
                  planning projects, and basically acting like the class topper who knows everything.
                </p>
                <p>
                  But I didn&apos;t want to be left behind. So I jumped into AI agent mode — or as I like to call it,
                  <span className="font-semibold"> vibe-coding</span>. For months, I vibed with AI: building apps, breaking apps,
                  fixing apps, and sometimes just staring at the screen wondering what went wrong.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">🎯 The Big Experiment: LMS Project</h2>
                <p className="mb-3">
                  At one point, I thought, &quot;Enough sparks, let&apos;s go full firework.&quot; So I decided to build a Learning
                  Management System (LMS) for a client using vibe-coding. Sounds cool, right? Well, here&apos;s the twist:
                </p>
                <p className="mb-2 font-mono text-xs md:text-sm text-primary">
                  AI doesn&apos;t just write code. It also writes bugs.
                </p>
                <p>
                  And sometimes, it writes bugs that even Sherlock Holmes couldn&apos;t solve.
                  Imagine telling AI: &quot;Bro, this doesn&apos;t work.&quot; And AI replies by adding new code, deleting old code,
                  and turning your project into a maze of functions. It&apos;s like watching your friend &quot;fix&quot; a bike by
                  removing random screws until it magically runs… or explodes.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">🐞 Bugs, Chaos &amp; Fun</h2>
                <p className="mb-2">
                  Some bugs were easy — like the classic &quot;missing semicolon&quot; or typo issues.
                </p>
                <p className="mb-2">
                  Some bugs were mysterious — like &quot;why is this working only on Tuesdays?&quot;
                </p>
                <p className="mb-3">
                  And some bugs were pure horror — AI-generated spaghetti code that looked like it was written by a
                  sleep-deprived last bencher during exam night.
                </p>
                <p>
                  But that&apos;s the fun of vibe-coding. You&apos;re not just coding; you&apos;re vibing with chaos, learning to
                  trust (and doubt) your AI buddy at the same time.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">💡 What I Learned</h2>
                <p className="mb-2">
                  AI is trained on data, but when you ask it to build something new, it&apos;s like asking your friend to cook
                  without a recipe. Sometimes you get biryani, sometimes you get… burnt rice.
                </p>
                <p className="mb-2">
                  Bugs aren&apos;t just problems; they&apos;re stories. Each bug taught me something about debugging, patience,
                  and how not to scream at my laptop.
                </p>
                <p>
                  Vibe-coding isn&apos;t about perfection. It&apos;s about experimenting, laughing at the mess, and still
                  delivering something that works.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-2">🎤 Final Thoughts (Last-Bencher Style)</h2>
                <p className="mb-3">
                  Vibe-coding is like sitting at the back of the class:
                </p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <li>You don&apos;t always know what&apos;s happening.</li>
                  <li>You sometimes copy from the topper (AI).</li>
                  <li>But when things click, you end up surprising everyone — including yourself.</li>
                </ul>
                <p>
                  And that&apos;s the real vibe: building, breaking, learning, and still showing up to try again. Whether
                  you&apos;re a last-bencher or a topper, vibe-coding lets you turn chaos into progress — one bug at a time.
                </p>
              </section>

              <p className="text-xs md:text-sm text-muted-foreground/80">
                If this mindset resonates with you or you&apos;d like to jam on ideas, projects, or AI-powered builds, feel
                free to reach out. The vibes — and the code — are always evolving.
              </p>
            </article>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link to="/blog">Back to Blog</Link>
              </Button>
            </div>

            <BlogFeedback slug="vibe-coder-mindset" />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default VibeCoderMindset;
