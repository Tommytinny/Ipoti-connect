import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

interface Story {
  id: number;
  title: string;
  date: string;
  image: string;
}

const stories: Story[] = [
  {
    id: 1,
    title: "Osanobua: The Supreme Creator in Edo and Benin",
    date: "June 17, 2025",
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=600&h=800&fit=crop"
  },
  {
    id: 2,
    title: "Sango: The Yoruba God of Thunder and Justice",
    date: "June 17, 2025",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&h=800&fit=crop"
  },
  {
    id: 3,
    title: "Amadioha: The Igbo God of Thunder, Justice, and Divine",
    date: "June 17, 2025",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop"
  },
  {
    id: 4,
    title: "Bayajida: The Legendary Founder of the Hausa Kingdoms",
    date: "June 17, 2025",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=800&fit=crop"
  },
  {
    id: 5,
    title: "Oduduwa: The Father of Yoruba Civilization",
    date: "June 17, 2025",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=800&fit=crop"
  }
];

export const CultureStoriesCarousel = () => {
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
    <section className="py-16 md:py-24 px-4 md:px-8 bg-heritage-beige relative overflow-hidden">
      {/* Decorative map background */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="text-foreground">
          <path d="M100,10 L150,40 L180,30 L170,70 L190,90 L160,110 L170,150 L130,140 L100,170 L70,140 L30,150 L40,110 L10,90 L30,70 L20,30 L50,40 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="heading-section mb-6">
            Decoding Culture: Stories that Reveal the Heart of Nigeria
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each tradition holds a key. Each proverb a philosophy. Dive into powerful essays that
            uncover the meanings behind Nigeria's enduring cultures — from ancient wisdom to
            modern transformation.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            dragFree: false,
            containScroll: false,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent className="-ml-4">
            {stories.map((story, index) => (
              <CarouselItem key={story.id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="group cursor-pointer">
                  <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-smooth">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
                      <time className="text-sm mb-3 opacity-90">{story.date}</time>
                      <h3 className="font-serif text-xl md:text-2xl font-bold leading-tight mb-6">
                        {story.title}
                      </h3>
                      <Button
                        variant="ghost"
                        className="self-start font-semibold tracking-wider uppercase text-sm text-white hover:text-heritage-green hover:bg-white/10 transition-smooth"
                      >
                        Read Full Story
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === current
                  ? 'bg-heritage-dark w-8'
                  : 'bg-heritage-dark/30 hover:bg-heritage-dark/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureStoriesCarousel;
