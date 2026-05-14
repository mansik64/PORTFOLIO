import { motion } from "framer-motion";
import { Lock, Cpu, Activity, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiMongodb, SiNodedotjs, SiDocker, SiPython, SiMysql, SiHtml5, SiJavascript } from "react-icons/si";

const projects = [
  {
    id: "cloakshare",
    title: "CloakShare — Temporary File Storage",
    date: "Aug 2025",
    description: "Architected a MERN stack application for secure, time-limited file sharing. Handles 1,000+ monthly uploads with end-to-end encryption.",
    impact: [
      "25% faster response time via Redis/NodeCache in-memory caching",
      "Integrated Google Drive API enabling 500+ GB secure storage",
      "Improved file retrieval speed by 40%",
      "Stateless design ensures data never persists beyond necessity"
    ],
    tech: [
      { name: "Java", icon: null },
      { name: "MongoDB", icon: <SiMongodb className="w-3 h-3" /> },
      { name: "Node.js", icon: <SiNodedotjs className="w-3 h-3" /> },
      { name: "Docker", icon: <SiDocker className="w-3 h-3" /> }
    ],
    icon: <Lock className="w-6 h-6 text-primary" />
  },
  {
    id: "nlp-parser",
    title: "NLP-Based Resume Parser",
    date: "Jan–March 2025",
    description: "Built a scalable NLP engine to automatically extract candidate details, skills, and experience from resumes across multiple formats.",
    impact: [
      "Reduced manual screening effort by ~60% across 100+ resumes",
      "Improved resume-to-job matching accuracy by ~30% using NER",
      "Scalable architecture ready for enterprise recruitment workflows"
    ],
    tech: [
      { name: "Java", icon: null },
      { name: "Python", icon: <SiPython className="w-3 h-3" /> },
      { name: "MySQL", icon: <SiMysql className="w-3 h-3" /> },
      { name: "Node.js", icon: <SiNodedotjs className="w-3 h-3" /> }
    ],
    icon: <Cpu className="w-6 h-6 text-chart-2" />
  },
  {
    id: "face-attendance",
    title: "Face Recognition Attendance System",
    date: "2024",
    description: "Developed an automated attendance tracking system using real-time facial detection and a custom Convolutional Neural Network.",
    impact: [
      "Eliminated manual attendance errors",
      "Real-time processing with high accuracy using Keras and OpenCV"
    ],
    tech: [
      { name: "Python", icon: <SiPython className="w-3 h-3" /> }
    ],
    icon: <Activity className="w-6 h-6 text-chart-3" />
  },
  {
    id: "hotel-management",
    title: "Hotel Management System",
    date: "2023",
    description: "Desktop application for complete hotel administration, including room booking, billing, and staff management.",
    impact: [
      "Streamlined check-in/check-out processes",
      "Robust relational database architecture for transactional integrity"
    ],
    tech: [
      { name: "Java", icon: null },
      { name: "MySQL", icon: <SiMysql className="w-3 h-3" /> }
    ],
    icon: <Shield className="w-6 h-6 text-chart-4" />
  },
  {
    id: "todo-app",
    title: "To-Do List App",
    date: "2023",
    description: "Responsive task management web app with add, delete, and mark-complete features.",
    impact: [
      "Persists tasks across sessions using browser localStorage",
      "Interactive and responsive UI"
    ],
    tech: [
      { name: "HTML5", icon: <SiHtml5 className="w-3 h-3" /> },
      { name: "CSS3", icon: <SiHtml5 className="w-3 h-3 opacity-70" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-3 h-3" /> }
    ],
    icon: <Activity className="w-6 h-6 text-chart-5" />
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="section-title-projects">Selected Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my systems-level thinking, focusing on security, scalability, and performance optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-background/50 backdrop-blur border-border/40 hover:border-primary/40 transition-all duration-300 overflow-hidden group" data-testid={`project-card-${project.id}`}>
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity transform translate-x-4 -translate-y-4 scale-150">
                  {project.icon}
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-secondary/80 rounded-xl inline-flex text-foreground">
                      {project.icon}
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                      {project.date}
                    </span>
                  </div>
                  <CardTitle className="text-2xl leading-tight group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-6">
                    {project.impact.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-0 flex flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t.name} variant="outline" className="bg-background/50 border-border/50 text-xs flex items-center gap-1.5">
                        {t.icon}
                        {t.name}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
