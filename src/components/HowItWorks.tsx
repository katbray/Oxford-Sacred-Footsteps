import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, MapPin, Play, Star } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Download VoiceMap",
      description: "Get the free VoiceMap app on iOS or Android and purchase your tour"
    },
    {
      icon: MapPin,
      title: "Start at the Martyrs' Memorial",
      description: "Head to the tall stone spire at the north end of St Giles, opposite Balliol College"
    },
    {
      icon: Play,
      title: "Press Play & Walk",
      description: "GPS automatically triggers narration at each stop as you walk through Oxford's center"
    },
    {
      icon: Star,
      title: "Go at Your Own Pace",
      description: "Pause anytime for photos, coffee, or reflection. The tour waits for you"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, flexible, and designed to let you experience Oxford at your own rhythm
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full border-border hover:shadow-medium transition-all duration-300">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 relative">
                    <step.icon className="h-10 w-10 text-accent" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30" />
              )}
            </div>
          ))}
        </div>

        <Card className="max-w-3xl mx-auto border-accent/20 bg-gradient-to-br from-card to-parchment">
          <CardContent className="p-8">
            <h3 className="text-2xl font-serif font-bold mb-4 text-foreground text-center">Perfect for Any Schedule</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span><strong>Self-guided:</strong> No meeting times, no group tours — just you and the story</span>
              </p>
              <p className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span><strong>Flexible timing:</strong> Start any day, any time that suits you</span>
              </p>
              <p className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span><strong>Unlimited replays:</strong> Take the tour multiple times or share with friends</span>
              </p>
              <p className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span><strong>Offline capable:</strong> Download ahead and don't worry about data usage</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
