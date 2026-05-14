import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile.jpeg";

export function Hero() {
  return (
    <section id="hero" className="min-h-[100dvh] flex items-center pt-20 pb-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-chart-2/10 rounded-full blur-[128px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-mono text-sm sm:text-base tracking-wider mb-4 uppercase" data-testid="hero-subtitle">
              B.E. Computer Science Engineering | Graduated 2026
            </h2>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground" data-testid="hero-title">
              Mansi Shukla
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto lg:mx-0" data-testid="hero-description">
              Frontend Developer & Data Analyst. Building clean, user-focused web experiences and turning data into meaningful insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <Button size="lg" className="rounded-full font-medium" asChild data-testid="btn-contact">
              <a href="#contact">
                Get in touch <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full font-medium" asChild data-testid="btn-resume">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 w-4 h-4" /> Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center justify-center lg:justify-start gap-6"
          >
            <a
              href="https://www.linkedin.com/in/mansi-kshukla"
              onClick={e => { e.preventDefault(); window.open("https://www.linkedin.com/in/mansi-kshukla", "_blank", "noopener,noreferrer"); }}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              data-testid="link-linkedin"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:24mansishukla614@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-email">
              <span className="sr-only">Email</span>
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="flex-1 w-full max-w-md lg:max-w-none relative"
        >
          <div className="aspect-square rounded-full overflow-hidden border border-border/50 bg-card/50 p-2 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
            <img
              src={profilePhoto}
              alt="Mansi Shukla"
              className="w-full h-full object-cover rounded-full"
              data-testid="hero-avatar"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
