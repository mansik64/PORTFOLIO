import { motion } from "framer-motion";
import { Terminal, Database, Cloud, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    icon: <Terminal className="w-5 h-5 text-primary" />,
    skills: ["Java", "Python", "C", "C++", "SQL", "JavaScript", "HTML/CSS"]
  },
  {
    title: "Backend & Systems",
    icon: <Database className="w-5 h-5 text-chart-2" />,
    skills: ["Node.js", "Express", "MySQL", "MongoDB", "Redis", "Distributed Systems"]
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="w-5 h-5 text-chart-3" />,
    skills: ["Docker", "Git", "GitHub", "Cloud Security", "CI/CD"]
  },
  {
    title: "Core Competencies",
    icon: <Zap className="w-5 h-5 text-chart-4" />,
    skills: ["Data Structures & Algorithms", "Operating Systems", "OOP", "DBMS", "Performance Optimization"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="section-title-skills">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors" data-testid={`skill-card-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-background rounded-lg border border-border/50">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors text-sm py-1 px-3" data-testid={`skill-badge-${skill}`}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
