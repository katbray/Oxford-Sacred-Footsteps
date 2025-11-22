import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary via-primary to-oxford-blue text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Begin Your Journey Through Oxford's Sacred History
          </h2>
          <p className="text-xl mb-4 opacity-90 leading-relaxed">
            Walk where martyrs stood, where Lewis found faith, and where centuries of Christian scholarship 
            shaped the world. Your Oxford story starts now.
          </p>
          <p className="text-lg mb-10 opacity-80">
            Available on VoiceMap — the app for location-aware audio tours trusted by travelers worldwide
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-7 shadow-strong transition-all hover:scale-105"
              asChild
            >
              <a href="https://voicemap.me" target="_blank" rel="noopener noreferrer">
                Book Your Tour on VoiceMap <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-10 py-7 transition-all"
              asChild
            >
              <a href="https://voicemap.me" target="_blank" rel="noopener noreferrer">
                Learn More About VoiceMap <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="mt-12 pt-12 border-t border-primary-foreground/20">
            <p className="text-sm opacity-75 mb-2">Questions about the tour?</p>
            <p className="opacity-90">
              Visit the VoiceMap website for FAQs, app support, and customer reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
