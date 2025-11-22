import { Clock, Map, Headphones, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const TourOverview = () => {
  const features = [
    {
      icon: Clock,
      title: "60-90 Minutes",
      description: "Self-paced walking tour through Oxford's historic center"
    },
    {
      icon: Map,
      title: "13 Historic Stops",
      description: "From the Martyrs' Memorial to Magdalen College"
    },
    {
      icon: Headphones,
      title: "Audio-Guided",
      description: "GPS-triggered narration via the VoiceMap app"
    },
    {
      icon: Users,
      title: "For Everyone",
      description: "Christians, seekers, history lovers, and curious visitors"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            What to Expect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An immersive journey through Oxford's Christian heritage, combining scholarly depth with accessible storytelling
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-8 pb-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-accent/20 bg-gradient-to-br from-card to-parchment">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Your Journey Through Time</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Walk straight through Oxford's city center while crossing more than a thousand years of Christian history. 
                Experience the courage of the Oxford Martyrs who died for their faith, stand where C.S. Lewis and J.R.R. Tolkien 
                discussed Christianity over pints, and trace the roots of the English Bible from Wycliffe's medieval vision to 
                Tyndale's forbidden translation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each stop connects you with pivotal moments: medieval monasticism, Reformation fire, Methodist revival, and the 
                Oxford Movement. This isn't just history — it's the story of how faith, scholarship, and imagination kept meeting 
                in one extraordinary city.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
