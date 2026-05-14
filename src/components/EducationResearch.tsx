import { motion } from "framer-motion";
import { BookOpen, Award, GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const papers = [
  {
    title: "FlashShare: Delivery of Secure and Storage-Free Web Content",
    year: "2025",
    highlights: [
      "Introduced a secure, lightweight, time-limited sharing system.",
      "Data deletes automatically after use or time expiry.",
      "Stateless design and in-memory cache ensure data never persists beyond necessity."
    ]
  },
  {
    title: "Advanced Analysis and Implementation on NLP-based Resume Parser",
    year: "June 2025",
    highlights: [
      "Uses NLP and ML to automatically extract details, skills, and experience across multiple formats.",
      "Scalable design supports seamless integration into recruitment workflows."
    ]
  }
];

const education = [
  {
    degree: "B.E. in Computer Science Engineering",
    institution: "Chandigarh University, Mohali",
    period: "2022–2026",
    score: "CGPA: 7.73",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    degree: "Intermediate (ISC)",
    institution: "Sacred Heart Convent School, Ludhiana",
    period: "2021–2022",
    score: "Percentage: 85%",
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    degree: "Matriculation (ICSE)",
    institution: "Sacred Heart Convent School, Ludhiana",
    period: "2019–2020",
    score: "Percentage: 92%",
    icon: <BookOpen className="w-5 h-5" />
  }
];

const certifications = [
  { name: "NoSQL, Big Data, and Spark Foundations", issuer: "IBM / Coursera", year: "2025" },
  { name: "Cybersecurity Attacks & Defense Fundamentals", issuer: "EC-Council / Coursera", year: "2025" },
  { name: "Data Analytics Essentials", issuer: "CISCO", year: "2024" },
  { name: "Database and SQL for Data Science with Python", issuer: "Coursera", year: "2024" },
  { name: "Data Science Value-Added Course", issuer: "Chandigarh University", year: "2023" },
  { name: "R Programming Certification", issuer: "Coursera", year: "2023" }
];

export function EducationResearch() {
  return (
    <section id="background" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Research Papers */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Publications</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="section-title-research">Research Papers</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {papers.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/40 border-l-4 border-l-primary hover:bg-card/60 transition-colors" data-testid={`research-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold leading-snug">{paper.title}</h3>
                      <Badge variant="secondary" className="whitespace-nowrap ml-4">{paper.year}</Badge>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {paper.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <span className="text-primary mr-2 mt-1">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold flex items-center gap-3" data-testid="section-title-education">
                <GraduationCap className="text-primary" /> Education
              </h2>
            </motion.div>

            <div className="space-y-6 relative before:absolute before:left-5 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-start gap-6 pl-14"
                  data-testid={`edu-timeline-${index}`}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-primary shrink-0 shadow absolute left-0 top-3 z-10">
                    {edu.icon}
                  </div>
                  
                  <div className="flex-1 p-5 rounded-xl bg-card border border-border/50 shadow-sm transition-colors hover:border-primary/30">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      <h3 className="font-bold text-foreground text-lg">{edu.degree}</h3>
                      <time className="text-xs font-mono text-muted-foreground whitespace-nowrap bg-secondary px-2 py-1 rounded">
                        {edu.period}
                      </time>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">{edu.institution}</div>
                    <Badge variant="outline" className="text-xs font-mono bg-background/50">
                      {edu.score}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold flex items-center gap-3" data-testid="section-title-certifications">
                <Award className="text-primary" /> Certifications
              </h2>
            </motion.div>

            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-card/40 border border-border/50 hover:bg-card/80 transition-colors group" data-testid={`cert-item-${index}`}>
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>
                    <div className="mt-2 sm:mt-0 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-mono text-muted-foreground">{cert.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
