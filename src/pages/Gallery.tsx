import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gallery = () => {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
      title: "Ipoti Day Celebration",
      category: "Festival",
    },
    {
      url: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&q=80",
      title: "Traditional Dance Performance",
      category: "Culture",
    },
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      title: "Community Leaders Meeting",
      category: "Community",
    },
    {
      url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
      title: "School Development Project",
      category: "Development",
    },
    {
      url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
      title: "Youth Empowerment Program",
      category: "Youth",
    },
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      title: "Town Hall Assembly",
      category: "Community",
    },
    {
      url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      title: "Cultural Heritage Display",
      category: "Culture",
    },
    {
      url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
      title: "Infrastructure Development",
      category: "Development",
    },
    {
      url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
      title: "Market Day Activities",
      category: "Community",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Header */}
      <div className="mt-20 bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Photo Gallery</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Capturing moments from our community's vibrant life and celebrations
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay/90 via-hero-overlay/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
