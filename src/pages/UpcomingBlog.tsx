import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const UpcomingBlog = () => {
  return (
    <>
      <Helmet>
        <title>Upcoming Blog | Hemanth G</title>
        <meta
          name="description"
          content="This blog post is still cooking. Check back soon or browse other posts from Hemanth G."
        />
        <link rel="canonical" href="https://hemanthspersonalportfolio.netlify.app/blog/upcoming" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-24 pb-16">
          <section className="container mx-auto px-4 max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1 text-xs font-mono text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Blog · Coming soon</span>
            </p>

            <h1 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">This blog is on the way</h1>
            <p className="text-muted-foreground text-sm md:text-base mb-6">
              I&apos;m still writing this story. It will be live soon with insights, experiences, and lessons learned.
              In the meantime, you can explore other posts or reach out to discuss.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero">
                <Link to="/blog">Browse other blogs</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="/#contact">Contact me</a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default UpcomingBlog;
