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

interface ProminentFigures {
  id: number;
  name: string;
  field: string;
  image: string;
}

const prominentFigures: ProminentFigures[] = [
  {
    id: 1,
    name: "Chief Adewunmi",
    field: "Establish Ipoti's First Sawmill and Bakery",
    image: "https://images.unsplash.com/photo-1532408840957-031d8034aeef?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    name: "Yinka Ayefele",
    field: "Music Producer, Gospel Singer, Song writer",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    name: "Caleb Olubolade",
    field: "Retired Navy Captain, Formal Military Administrator of Bayelsa State",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    name: "Colonel Ayo Ariyo",
    field: "Formidable Commander During the Nigerian Civil War (Biafran War)",
    image: "https://images.unsplash.com/photo-1510133768164-a8f7e4d4e3dc?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    name: "Professor Grace Oladunni Taylor",
    field: "First Female Vice-Chancellor of University of Port Harcourt",
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=800&h=600&fit=crop"
  }
];

const ProminentCarousel = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-black/70"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="heading-section font-serif mb-6 text-2xl lg:text-4xl">
            Prominent Individuals
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
           These individuals have made significant contributions to their community, state, and the nation as a whole.
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
            {prominentFigures.map((prominent, index) => (
              <CarouselItem key={prominent.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div
                key={index}
                className="group relative overflow-hidden aspect-square cursor-pointer"
              >
                <img
                  src={prominent.image}
                  alt={prominent.name}
                  className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay/90 via-hero-overlay/40 to-transparent opacity-1 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 pb-2 text-primary-foreground">
                    <h3 className="text-lg font-semibold font-sans">{prominent.name}</h3>
                    <span className="inline-block py-1 text-primary-basic text-md font-medium rounded-full mb-2">
                      {prominent.field}
                    </span>
                  </div>
                </div>
              </div>
                
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
            
            <div className="flex gap-2">
              {prominentFigures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === current
                      ? 'bg-primary w-8'
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

export default ProminentCarousel;
