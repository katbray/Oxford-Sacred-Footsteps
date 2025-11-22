import { Hero } from "@/components/Hero";
import { TourOverview } from "@/components/TourOverview";
import { TourStops } from "@/components/TourStops";
import { WhoIsThisFor } from "@/components/WhoIsThisFor";
import { HowItWorks } from "@/components/HowItWorks";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Oxford Christian History Walking Tour | VoiceMap Audio Tour";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Discover Oxford\'s religious history on this self-guided walking audio tour. From Reformation martyrs to C.S. Lewis and J.R.R. Tolkien, explore 1000 years of Christian heritage in Oxford, UK.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <TourOverview />
      <TourStops />
      <WhoIsThisFor />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
