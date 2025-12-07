import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Publication {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Igue Festival: A Sacred Celebration of Royalty and Spiritual Renewal in Benin Kingdom",
    excerpt: "Introduction: A Festival of Power, Purity, and Prestige Deep in the heart of Benin City, the ancient capital of the Benin Kingdom, lies a sacred tradition that blends...",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop",
    category: "Festivals",
    date: "June 17, 2025",
    author: "Nigeria Deep Culture"
  },
  {
    id: 2,
    title: "Awankere Festival: Celebrating the Rich Cultural Heritage of the Warri Kingdom",
    excerpt: "Introduction: A Festival of Ancestry, Unity, and Royal Splendor Every July, the city of Warri, in Delta State, transforms into a vibrant canvas of history, tradition...",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&h=600&fit=crop",
    category: "Festivals",
    date: "June 17, 2025",
    author: "Nigeria Deep Culture"
  }
];

const sidebarPublications: Publication[] = [
  {
    id: 3,
    title: "Durbar Festival: The Northern Nigerian Pageant of Power, Faith, and Pride",
    excerpt: "",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400&h=300&fit=crop",
    category: "",
    date: "June 17, 2025",
    author: "Nigeria Deep Culture"
  },
  {
    id: 4,
    title: "Ofala Festival: The Royal Majesty of Igbo Tradition and Kingship",
    excerpt: "",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    category: "",
    date: "June 17, 2025",
    author: "Nigeria Deep Culture"
  },
  {
    id: 5,
    title: "Ojude Oba Festival: A Royal Display of Yoruba Heritage and Islamic Faith",
    excerpt: "",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop",
    category: "",
    date: "June 17, 2025",
    author: "Nigeria Deep Culture"
  }
];

export const PublicationsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-heritage-light relative overflow-hidden">
      {/* Decorative map background */}
      <div className="absolute top-8 right-1/2 translate-x-1/2 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="text-foreground">
          <path d="M100,10 L150,40 L180,30 L170,70 L190,90 L160,110 L170,150 L130,140 L100,170 L70,140 L30,150 L40,110 L10,90 L30,70 L20,30 L50,40 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="heading-section text-center mb-4">Recent Publications</h2>
        
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Main featured articles */}
          <div className="lg:col-span-2 space-y-8">
            {publications.map((pub) => (
              <article
                key={pub.id}
                className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-smooth cursor-pointer"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative overflow-hidden h-64 md:h-auto">
                    <img
                      src={pub.image}
                      alt={pub.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-heritage-green text-white hover:bg-heritage-green/90">
                          {pub.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{pub.date}</span>
                      </div>
                      <h3 className="heading-card mb-4 group-hover:text-heritage-green transition-smooth">
                        {pub.title}
                      </h3>
                      <p className="text-body text-muted-foreground mb-6 line-clamp-3">
                        {pub.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">By {pub.author}</span>
                      <Button
                        variant="ghost"
                        className="font-semibold tracking-wider hover:text-heritage-green transition-smooth uppercase text-sm"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar articles */}
          <div className="space-y-6">
            {sidebarPublications.map((pub) => (
              <article
                key={pub.id}
                className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-smooth cursor-pointer"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold mb-3 group-hover:text-heritage-green transition-smooth leading-tight">
                    {pub.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{pub.date}</span>
                    <span>By {pub.author}</span>
                  </div>
                </div>
              </article>
            ))}
            
            <Button
              variant="outline"
              className="w-full font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              View All Post
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
