import { Card, CardContent } from "@/components/ui/card";
import { Heart, BookOpen, Users, Sparkles } from "lucide-react";

export const WhoIsThisFor = () => {
  const audiences = [
    {
      icon: Heart,
      title: "Christians",
      description: "Deepen your faith by walking where courageous believers stood for truth, where Wesley prayed, and where Lewis found Christ."
    },
    {
      icon: BookOpen,
      title: "History Enthusiasts",
      description: "Experience the pivotal moments that shaped English Christianity, from medieval monasticism to the Reformation and beyond."
    },
    {
      icon: Users,
      title: "Literary Pilgrims",
      description: "Follow in the footsteps of C.S. Lewis and J.R.R. Tolkien, discovering how Oxford's Christian heritage inspired their timeless works."
    },
    {
      icon: Sparkles,
      title: "Curious Seekers",
      description: "Explore Oxford's spiritual legacy without pressure — just honest storytelling about faith, courage, and the questions that shaped centuries."
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Who Is This Tour For?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Whether you're a believer, a seeker, or simply love great stories, this tour welcomes you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300"
            >
              <CardContent className="pt-8 pb-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20">
                  <audience.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{audience.title}</h3>
                <p className="opacity-90 leading-relaxed">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg leading-relaxed opacity-90">
            This tour is perfect for visitors wanting more than surface-level tourism. You'll gain deep insights into how 
            Oxford's scholars, martyrs, and visionaries shaped not just England's faith, but the imagination of the modern world.
          </p>
        </div>
      </div>
    </section>
  );
};
