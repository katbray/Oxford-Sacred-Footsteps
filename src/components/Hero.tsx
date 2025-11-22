import heroImage from "@/assets/oxford-spires-hero.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Oxford's Religious History
        </h1>
        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-light animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          A Walking Audio Tour Through a Thousand Years of Faith
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          From medieval saints to Reformation martyrs, from the Inklings to modern revival — discover the stories that shaped Christianity in England's city of dreaming spires
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-strong transition-all hover:scale-105"
            asChild
          >
            <a href="https://voicemap.me" target="_blank" rel="noopener noreferrer">
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
