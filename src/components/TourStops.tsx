import martyrsMemorial from "@/assets/martyrs-memorial.jpg";
import lambAndFlag from "@/assets/lamb-and-flag.jpg";
import balliolCollege from "@/assets/balliol-college.jpg";
import stMaryVirgin from "@/assets/st-mary-virgin.jpg";
import magdalenCollege from "@/assets/magdalen-college.jpg";
import manuscriptArt from "@/assets/manuscript-art.jpg";

export const TourStops = () => {
  const stops = [
    {
      image: martyrsMemorial,
      title: "The Martyrs' Memorial",
      description: "Begin where Oxford's Reformation story is etched in stone. Meet Cranmer, Ridley, and Latimer — the Protestant leaders who chose truth over safety."
    },
    {
      image: lambAndFlag,
      title: "The Lamb & Flag",
      description: "Stand in the pub where the Inklings gathered. Lewis and Tolkien forged their friendship here, translating Christian imagination into Narnia and Middle-earth."
    },
    {
      image: balliolCollege,
      title: "John Wycliffe at Balliol",
      description: "Discover the medieval scholar who planted the seed of the Reformation, insisting Scripture stands above all earthly authority."
    },
    {
      image: stMaryVirgin,
      title: "St Mary the Virgin",
      description: "Enter the University Church where Cranmer made his final stand, renouncing his recantations before being led to the stake."
    },
    {
      image: manuscriptArt,
      title: "The English Bible",
      description: "Trace the dangerous work of Tyndale and see how his translation became the backbone of the King James Bible at the Bodleian Library."
    },
    {
      image: magdalenCollege,
      title: "Magdalen & Addison's Walk",
      description: "Walk where Lewis came to faith. One September night in 1931, Tolkien helped him see Christianity as the 'true myth' that became fact."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            Historic Stops Along Your Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thirteen carefully chosen locations that tell the complete story of Oxford's Christian heritage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stops.map((stop, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 shadow-medium hover:shadow-strong transition-all duration-500">
                <img 
                  src={stop.image} 
                  alt={stop.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-2">
                    {stop.title}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed px-2">
                {stop.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground italic">
            Plus seven more stops including Wesley's Lincoln College, Christ Church Cathedral, Merton College, and more
          </p>
        </div>
      </div>
    </section>
  );
};
