import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <footer id="contact" className="relative border-t border-border/50 bg-card/30 pt-24 pb-12 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="section-title-contact">Let's Build Something.</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Currently seeking opportunities in frontend development and data analysis. My inbox is always open for interesting roles or technical discussions.
            </p>
            <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild data-testid="btn-email-main">
              <a href="mailto:24mansishukla614@gmail.com">
                <Mail className="mr-2 w-5 h-5" /> Say Hello
              </a>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-y border-border/50 py-12">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-medium mb-1">Location</h3>
              <p className="text-muted-foreground text-sm">Ludhiana, India</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center p-4 border-y md:border-y-0 md:border-x border-border/50"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-medium mb-1">Phone</h3>
              <a href="tel:+919041013149" className="text-muted-foreground text-sm hover:text-primary transition-colors">+91 9041013149</a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-medium mb-1">Email</h3>
              <a href="mailto:24mansishukla614@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors break-all">24mansishukla614@gmail.com</a>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/mansi-kshukla" onClick={e => { e.preventDefault(); window.open("https://www.linkedin.com/in/mansi-kshukla", "_blank", "noopener,noreferrer"); }} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer" data-testid="footer-link-linkedin">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              © {new Date().getFullYear()} Mansi Shukla. Built with passion & purpose.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
