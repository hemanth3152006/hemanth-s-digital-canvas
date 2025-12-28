import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const posts = [
  {
    slug: 'weekly-learning-log-01',
    title: 'Weekly Learning Log #1 – Cyber Security & Full-Stack Basics',
    date: 'December 2025',
    readingTime: '3 min read',
    tags: ['Cyber Security', 'React', 'Learning Journey'],
    summary:
      "A quick recap of what I explored this week – from basic web security concepts to improving this portfolio with React and TypeScript.",
  },
  {
    slug: 'building-my-personal-portfolio',
    title: 'Behind the Scenes – Building This Portfolio',
    date: 'December 2025',
    readingTime: '4 min read',
    tags: ['Portfolio', 'Design', 'Frontend'],
    summary:
      'How I designed and built this site as a Cyber Security student and vibe coder, and what I learned while shipping it.',
  },
  {
    slug: 'vibe-coder-mindset',
    title: 'The Vibe Coder Mindset',
    date: 'Coming soon',
    readingTime: '—',
    tags: ['Mindset', 'Career', 'Student Life'],
    summary:
      'Thoughts on learning, staying curious, and balancing college, security, and creative projects. Stay tuned!',
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Hemanth G – Cyber Security Student & Vibe Coder</title>
        <meta
          name="description"
          content="Personal blog of Hemanth G – learning notes, project breakdowns, and thoughts as an undergraduate Cyber Security student and full-stack enthusiast."
        />
        <link rel="canonical" href="https://hemanthspersonalportfolio.netlify.app/blog" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-24 pb-16">
          <section className="container mx-auto px-4 max-w-4xl">
            {/* Blog Hero */}
            <header className="mb-10 text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1 text-xs font-mono text-muted-foreground mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Blog · Learning in public</span>
              </p>

              <h1 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">Blog & Learning Notes</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Short write-ups about what I&apos;m building, learning in cyber security and full-stack
                development, and the mindset behind being a vibe coder.
              </p>
            </header>

            {/* Posts Grid */}
            <div className="grid gap-6">
              {posts.map((post) => (
                <Card
                  key={post.slug}
                  className="border-border/60 bg-secondary/20 hover:bg-secondary/40 transition-colors duration-300"
                >
                  <CardHeader>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <CardTitle className="text-xl md:text-2xl">{post.title}</CardTitle>
                      <span className="text-xs font-mono text-muted-foreground">{post.readingTime}</span>
                    </div>
                    <CardDescription className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
                      <span>{post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
                      <span>By Hemanth G</span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-2">
                    <p className="text-sm text-muted-foreground mb-4">{post.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-2 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground/80">
                      Detailed write-ups coming soon. For now, explore my{' '}
                      <a href="/" className="underline underline-offset-4 text-primary hover:text-primary/80">
                        projects and services
                      </a>
                      .
                    </p>
                    {post.slug === 'building-my-personal-portfolio' ? (
                      <Button variant="link" size="sm" asChild>
                        <Link to="/portfolio-journey">Behind the scenes →</Link>
                      </Button>
                    ) : (
                      <Button variant="link" size="sm" asChild>
                        <Link to="/blog/upcoming">This blog is upcoming →</Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
