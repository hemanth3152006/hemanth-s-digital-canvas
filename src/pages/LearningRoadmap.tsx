import { Helmet } from 'react-helmet-async';
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const stages = [
  {
    id: "foundation",
    title: "Foundation",
    subtitle: "Getting comfortable with the web",
    progress: 90,
    status: "Almost there",
    skills: ["HTML semantics", "Modern CSS", "Flexbox & Grid", "Responsive layouts"],
    focus: "This is where you learn how the web is built visually and structurally.",
  },
  {
    id: "core-skills",
    title: "Core Frontend Skills",
    subtitle: "Thinking like a React developer",
    progress: 70,
    status: "In progress",
    skills: ["JavaScript fundamentals", "TypeScript", "React hooks", "State & props", "Routing"],
    focus: "Turning ideas into interactive experiences using React and TypeScript.",
  },
  {
    id: "projects",
    title: "Projects & Clones",
    subtitle: "Building real-world style apps",
    progress: 50,
    status: "Actively building",
    skills: ["Project structure", "API integration", "Authentication basics", "Error handling"],
    focus: "Using projects to connect all the skills into working products.",
  },
  {
    id: "advanced",
    title: "Advanced Frontend",
    subtitle: "Performance, accessibility & testing",
    progress: 25,
    status: "Planned",
    skills: ["Accessibility", "Performance tuning", "Testing", "Advanced patterns"],
    focus: "Leveling up the quality and reliability of everything you build.",
  },
  {
    id: "career",
    title: "Career & Portfolio",
    subtitle: "Telling your story as a developer",
    progress: 40,
    status: "Ongoing",
    skills: ["Portfolio polish", "Writing blog posts", "Networking", "Interview prep"],
    focus: "Turning skills into opportunities with a clear story and strong presence.",
  },
];
const foundationPuzzles = [
  { word: "HTML", scrambled: "LTMH", hint: "Marks up the structure of a web page." },
  { word: "CSS", scrambled: "SSC", hint: "Controls colors, layout, spacing, and visuals." },
  { word: "JAVASCRIPT", scrambled: "VAJARSCIPT", hint: "Adds behavior and interactivity to pages." },
];

const LearningRoadmap = () => {
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState<"idle" | "correct" | "wrong">("idle");
  const [solvedWords, setSolvedWords] = useState<string[]>([]);

  const currentPuzzle = foundationPuzzles[currentPuzzleIndex];

  const checkGuess = () => {
    const cleanedGuess = guess.trim().toUpperCase();
    if (!cleanedGuess) return;

    if (cleanedGuess === currentPuzzle.word) {
      setResult("correct");
      setSolvedWords((prev) =>
        prev.includes(currentPuzzle.word) ? prev : [...prev, currentPuzzle.word]
      );
    } else {
      setResult("wrong");
    }
  };

  const nextWord = () => {
    const nextIndex = currentPuzzleIndex < foundationPuzzles.length - 1 ? currentPuzzleIndex + 1 : 0;
    setCurrentPuzzleIndex(nextIndex);
    setGuess("");
    setResult("idle");
  };

  const puzzleProgress = (solvedWords.length / foundationPuzzles.length) * 100;

  return (
    <>
      <Helmet>
        <title>Learning Roadmap | Hemanth's Digital Canvas</title>
        <meta
          name="description"
          content="An interactive roadmap of how I learn and grow as a developer: from foundations to advanced frontend and career steps."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <main className="pt-24 pb-16 bg-gradient-to-b from-background via-background/95 to-background">
          <section className="container mx-auto px-4 py-12 max-w-4xl">
            <header className="mb-10 text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 gradient-text">
                Interactive Learning Roadmap
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                This is how I approach learning: in clear, focused stages.
                Each step has a purpose, a skill set, and a progress indicator so you can
                see exactly where I am on my journey.
              </p>
            </header>

            <Card className="mb-8 border-primary/20 bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl">How to read this roadmap</CardTitle>
                <CardDescription>
                  Each section below is a stage in my learning journey. Click to expand and
                  see what I focus on, which skills I track, and how far along I am.
                </CardDescription>
              </CardHeader>
            </Card>

            <Accordion type="single" collapsible className="space-y-2">
              {stages.map((stage) => (
                <AccordionItem key={stage.id} value={stage.id} className="border-border/60 rounded-xl overflow-hidden">
                  <AccordionTrigger className="px-4 md:px-6 bg-muted/40 hover:bg-muted/70">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 w-full text-left">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm uppercase tracking-wide text-primary/80">Stage</span>
                          <span className="text-xs text-muted-foreground">#{stages.indexOf(stage) + 1}</span>
                        </div>
                        <p className="font-semibold text-base md:text-lg">{stage.title}</p>
                        <p className="text-xs md:text-sm text-muted-foreground">{stage.subtitle}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2 min-w-[180px]">
                        <Badge variant="secondary" className="text-xs">
                          {stage.status}
                        </Badge>
                        <div className="w-full md:w-48 flex items-center gap-2">
                          <Progress value={stage.progress} />
                          <span className="text-xs text-muted-foreground w-10 text-right">
                            {stage.progress}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 md:px-6 bg-background/80">
                    <CardContent className="px-0 pt-4 pb-6">
                      <p className="text-sm text-muted-foreground mb-4">{stage.focus}</p>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2">Key skills and habits:</p>
                        <div className="flex flex-wrap gap-2">
                          {stage.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs border-dashed">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {stage.id === "foundation" && (
                        <div className="mt-6 border-t pt-4 space-y-3">
                          <div>
                            <h3 className="text-sm font-semibold mb-1">Mini word puzzle: web basics</h3>
                            <p className="text-xs text-muted-foreground">
                              Unscramble the web term, type your answer, and track your progress.
                            </p>
                          </div>

                          <div className="flex items-center gap-3 mb-1">
                            <span className="px-3 py-1 rounded-md bg-muted font-mono tracking-[0.3em] text-sm">
                              {currentPuzzle.scrambled}
                            </span>
                            <span className="text-[11px] text-muted-foreground">Hint: {currentPuzzle.hint}</span>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <input
                              type="text"
                              value={guess}
                              onChange={(e) => {
                                setGuess(e.target.value);
                                if (result !== "idle") setResult("idle");
                              }}
                              placeholder="Your answer (e.g. HTML)"
                              className="w-full sm:w-52 px-3 py-1.5 rounded-md border bg-background text-sm outline-none focus:ring-2 focus:ring-primary/60"
                            />
                            <button
                              type="button"
                              onClick={checkGuess}
                              className="px-3 py-1.5 text-xs rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                            >
                              Check
                            </button>

                            {result === "correct" && (
                              <span className="text-xs text-emerald-500 font-medium">Correct!</span>
                            )}
                            {result === "wrong" && (
                              <span className="text-xs text-destructive font-medium">Not quite, try again.</span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={nextWord}
                              className="px-3 py-1.5 text-[11px] rounded-md border text-muted-foreground hover:bg-muted/60 transition-colors"
                            >
                              Next word
                            </button>
                            <span className="text-[11px] text-muted-foreground">
                              Word {currentPuzzleIndex + 1} of {foundationPuzzles.length}
                            </span>
                          </div>

                          <div className="pt-1">
                            <p className="text-[11px] text-muted-foreground mb-1">
                              Puzzle progress: {solvedWords.length} / {foundationPuzzles.length} solved
                            </p>
                            <Progress value={puzzleProgress} />
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LearningRoadmap;
