import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

interface Proverb {
  id: number;
  quote: string;
  attribution: string;
  subtitle: string;
  image: string;
}

const proverbs: Proverb[] = [
  {
    id: 1,
    quote: "Wherever something stands, something else stands beside it.",
    attribution: "Igbo Proverb",
    subtitle: "Igbo People - Southeastern Nigeria",
    image: "https://images.unsplash.com/photo-1532408840957-031d8034aeef?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    quote: "A man who does not know where the rain began to beat him cannot say where he dried his body.",
    attribution: "Chinua Achebe",
    subtitle: "Community Events Coordinator",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    quote: "The child who is not embraced by the village will burn it down to feel its warmth.",
    attribution: "Yoruba Proverb",
    subtitle: "Yoruba People - Southwestern Nigeria",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    quote: "When the music changes, so does the dance.",
    attribution: "Hausa Proverb",
    subtitle: "Hausa People - Northern Nigeria",
    image: "https://images.unsplash.com/photo-1510133768164-a8f7e4d4e3dc?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    quote: "Knowledge is like a garden: if it is not cultivated, it cannot be harvested.",
    attribution: "Edo Proverb",
    subtitle: "Edo People - South-South Nigeria",
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=800&h=600&fit=crop"
  }
];

const ProverbsCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-heritage-dark text-white relative overflow-hidden">
      {/* Dark atmospheric background */}
      <div 
        className="absolute inset-0 opacity-20 "
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1532408840957-031d8034aeef?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="heading-section mb-6">
            Words That Endure: Proverbs, Sayings & Wisdom from Nigeria's Roots
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Across Nigeria's diverse ethnic groups and thinkers, words are not just tools — they are
            carriers of ancestral knowledge, communal values, and timeless insight. These proverbs,
            quotes, and adages hold generations of reflection, guidance, and truth.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          className="w-full max-w-6xl mx-auto"
          opts={{
            align: "start",
            loop: true,
            dragFree: false,
            containScroll: false,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent className="-ml-4">
            {proverbs.map((proverb, index) => (
              <CarouselItem key={proverb.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <img
                  src={proverb.image}
                  alt={proverb.attribution}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay/90 via-hero-overlay/40 to-transparent opacity-1 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <h3 className="text-lg font-semibold">{proverb.subtitle}</h3>
                    <span className="inline-block px-3 py-1 bg-primary text-accent-foreground text-xs font-medium rounded-full mb-2">
                      {proverb.attribution}
                    </span>
                  </div>
                </div>
              </div>
                {/*<div className="group">
                  <div className="bg-white text-foreground rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-smooth h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={proverb.image}
                        alt={proverb.attribution}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <blockquote className="mb-6">
                        <p className="text-lg md:text-xl italic leading-relaxed mb-6 text-foreground">
                          "{proverb.quote}"
                        </p>
                      </blockquote>
                      <div className="flex items-start gap-3">
                        <Quote className="w-10 h-10 text-heritage-green flex-shrink-0 fill-current" />
                        <div>
                          <p className="font-semibold text-lg mb-1">{proverb.attribution}</p>
                          <p className="text-sm text-muted-foreground">{proverb.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>*/}
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
            
            <div className="flex gap-2">
              {proverbs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === current
                      ? 'bg-heritage-green w-8'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <CarouselNext className="static translate-y-0 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProverbsCarousel;
