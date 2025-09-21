import { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EyeOff, Sparkles, Shield, ListChecks, Lock, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const PhoneMock = () => {
  return (
    <div
      aria-label="Phone preview showing redacted spoilers"
      className="relative mx-auto w-full max-w-sm"
    >
      <div className="relative rounded-[2rem] border border-border bg-card shadow-[var(--shadow-elevated)] overflow-hidden">
        <div className="h-6 bg-muted/60" />
        <div className="p-5 space-y-3">
          <div className="h-3 w-2/3 bg-muted rounded" />
          <div className="h-3 w-5/6 bg-muted rounded" />
          <div className="h-3 w-1/2 bg-muted rounded" />
          <div className="h-3 w-4/6 bg-muted rounded" />

          {/* Redacted blocks */}
          <div className="mt-4 space-y-2">
            <div className="h-6 w-full rounded bg-foreground/80 animate-pulse" aria-hidden="true" />
            <div className="h-5 w-4/5 rounded bg-foreground/70 animate-pulse" aria-hidden="true" />
            <div className="h-6 w-2/3 rounded bg-foreground/80 animate-pulse" aria-hidden="true" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-10 bg-muted rounded" />
            <div className="h-10 bg-muted rounded" />
            <div className="h-10 bg-muted rounded" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-ring/40" />
    </div>
  );
};

const Section = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>{children}</section>
);

const Index = () => {
  useEffect(() => {
    document.title = "BlindSpot - hiding those spoilers!";
  }, []);

  const canonical = "https://blindspotforspoilers.com";

  const ld = useMemo(() => {
    const product = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "BlindSpot",
      applicationCategory: "MobileApplication",
      operatingSystem: "Android",
      description:
        "BlindSpot is a spoiler blocking app that blocks spoilers in real time using black overlay rectangles over matched keywords.",
      url: canonical,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    };

    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does BlindSpot redact spoilers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You add keywords (up to 6). BlindSpot's Android accessibility service detects matches on screen and places black rectangle overlays over the text in real time.",
          },
        },
        {
          "@type": "Question",
          name: "Does BlindSpot work in all apps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BlindSpot supports Facebook, Twitter (X), Instagram, Reddit, Chrome, Google app, WhatsApp, TikTok, and YouTube. Coverage may vary by app version.",
          },
        },
        {
          "@type": "Question",
          name: "Is my data private?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Your keyword list is stored locally on your device. BlindSpot does not send your data to our servers.",
          },
        },
        {
          "@type": "Question",
          name: "How many keywords can I add?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can add up to 6 keywords and toggle them on or off individually.",
          },
        },
      ],
    };

    return JSON.stringify([product, faq]);
  }, [canonical]);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <nav className="container mx-auto flex items-center justify-between h-16">
          <Logo />
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#how" className="hover:text-primary transition-colors">How it works</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#privacy" className="hover:text-primary transition-colors">Privacy</a>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="hero" size="sm" className="text-xs sm:text-sm">Get the app</Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_-10%,_hsl(var(--primary)/0.2),_transparent_70%)]" />
          <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-10 items-center py-16 sm:py-20 lg:py-28 px-4">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
                Spoilers? <br />What spoilers?
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Add your keywords. We cover them with black rectangles across the apps that love to spoil.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Button variant="hero" size="xl" aria-label="Get the BlindSpot app" className="w-full sm:w-auto">
                  <EyeOff className="mr-1" /> Get the app
                </Button>
                <a href="#how" className="inline-flex items-center justify-center h-12 px-5 rounded-md border border-input hover:bg-accent hover:text-accent-foreground transition-colors w-full sm:w-auto text-center">
                  See it in action
                </a>
              </div>
              <div className="mt-4 text-sm text-muted-foreground flex items-center gap-2">
                <Shield className="h-4 w-4" /> Private. On your device. Always.
              </div>
            </div>
            <div className="relative">
              <PhoneMock />
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] blur-3xl opacity-40 bg-[radial-gradient(60%_50%_at_60%_40%,_hsl(var(--primary)/0.35),_transparent_70%)]" />
            </div>
          </div>
        </section>

        <Section id="features" className="bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">Built for staying unspoiled</h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">Some people treat spoilers like confetti. We quietly clean them up.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Card className="hover:shadow-[var(--shadow-elevated)] transition-shadow">
                <CardHeader>
                  <div className="size-10 rounded-md bg-[linear-gradient(135deg,hsl(var(--primary)/0.15),transparent)] grid place-items-center">
                    <Sparkles className="text-primary" />
                  </div>
                  <CardTitle>Smart redaction</CardTitle>
                  <CardDescription>Places black rectangular overlays over matched words while keeping layouts usable.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-[var(--shadow-elevated)] transition-shadow">
                <CardHeader>
                  <div className="size-10 rounded-md bg-[linear-gradient(135deg,hsl(var(--primary)/0.15),transparent)] grid place-items-center">
                    <Globe className="text-primary" />
                  </div>
                  <CardTitle>Works where you are</CardTitle>
                  <CardDescription>Works across apps like Facebook, Twitter (X), Instagram, Reddit, Chrome, Google app, WhatsApp, TikTok, and YouTube.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-[var(--shadow-elevated)] transition-shadow">
                <CardHeader>
                  <div className="size-10 rounded-md bg-[linear-gradient(135deg,hsl(var(--primary)/0.15),transparent)] grid place-items-center">
                    <Lock className="text-primary" />
                  </div>
                  <CardTitle>Privacy-first</CardTitle>
                  <CardDescription>Your keyword list stays on-device. We don’t collect, track, or sell your data.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </Section>

        <Section id="how">
          <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-10 items-center px-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">How it works</h2>
              <div className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-md grid place-items-center bg-[linear-gradient(135deg,hsl(var(--primary)/0.15),transparent)]">
                    <ListChecks className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Add up to 6 keywords</p>
                    <p className="text-muted-foreground">TV shows, movies, teams — anything you want out of sight.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-md grid place-items-center bg-[linear-gradient(135deg,hsl(var(--primary)/0.15),transparent)]">
                    <EyeOff className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">We block in real time</p>
                    <p className="text-muted-foreground">Matched text is covered with black rectangles as you browse.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-md grid place-items-center bg-[linear-gradient(135deg,hsl(var(--primary)/0.15),transparent)]">
                    <Shield className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Private by design</p>
                    <p className="text-muted-foreground">Your list never leaves your device. No accounts required.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
                <Button variant="hero" className="w-full sm:w-auto">Join waitlist</Button>
                <Button variant="outline" className="w-full sm:w-auto">Get updates</Button>
              </div>
            </div>
            <PhoneMock />
          </div>
        </Section>

        <Section id="faq" className="bg-muted/30">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-center">FAQ</h2>
            <Accordion type="single" collapsible className="mt-6">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does BlindSpot redact spoilers?</AccordionTrigger>
                <AccordionContent>
                  You add keywords (up to 6). BlindSpot detects them via an Android accessibility service and places black rectangle overlays over the text in real time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Does BlindSpot work in all apps?</AccordionTrigger>
                <AccordionContent>
                  BlindSpot supports Facebook, Twitter (X), Instagram, Reddit, Chrome, Google app, WhatsApp, TikTok, and YouTube. Coverage may vary by version.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is my data private?</AccordionTrigger>
                <AccordionContent>
                  Yes. Your keyword list is stored locally on your device. BlindSpot does not send your data to our servers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How many keywords can I add?</AccordionTrigger>
                <AccordionContent>
                  Up to 6 keywords, with per‑keyword enable/disable and delete with undo.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Section>

        <Section id="privacy">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">Privacy</h2>
            <p className="mt-3 text-muted-foreground">
              BlindSpot is built privacy-first. Your keywords and settings are stored locally on your device. We don't collect personal identification information, location data, or your browsing content from other apps.
            </p>
            <div className="mt-4">
              <Link 
                to="/privacy-policy" 
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                Read our full Privacy Policy
              </Link>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-8 sm:py-10">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 px-4">
          <Logo />
          <p className="text-xs sm:text-sm text-muted-foreground text-center">© {new Date().getFullYear()} BlindSpot. All rights reserved.</p>
          <div className="text-xs sm:text-sm flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#how" className="hover:text-primary transition-colors">How it works</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </div>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }} />
    </div>
  );
};

export default Index;
