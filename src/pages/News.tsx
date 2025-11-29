import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Tag } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      date: "December 15, 2024",
      category: "Event",
      title: "Ipoti Day 2025 - Save the Date",
      excerpt: "Join us for the biggest celebration of the year as we come together to honor our heritage and celebrate our community achievements.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    },
    {
      id: 2,
      date: "December 10, 2024",
      category: "Development",
      title: "New School Block Inauguration",
      excerpt: "The community celebrates the completion of a modern school building featuring 10 classrooms, library, and computer lab.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    },
    {
      id: 3,
      date: "December 5, 2024",
      category: "Community",
      title: "Town Hall Meeting Highlights",
      excerpt: "Leaders discuss infrastructure plans, diaspora engagement, and strategies for sustainable community development.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    },
    {
      id: 4,
      date: "November 28, 2024",
      category: "Culture",
      title: "Traditional Dance Troupe Wins State Award",
      excerpt: "Ipoti's cultural ambassadors receive recognition at the Ekiti State Cultural Festival for their outstanding performance.",
      image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&q=80",
    },
    {
      id: 5,
      date: "November 20, 2024",
      category: "Development",
      title: "Solar Street Lights Installation Begins",
      excerpt: "Modern solar-powered lighting system to enhance security and accessibility across major roads in Ipoti.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    },
    {
      id: 6,
      date: "November 15, 2024",
      category: "Community",
      title: "Youth Empowerment Program Launched",
      excerpt: "New initiative provides vocational training and entrepreneurship support for young Ipoti indigenes.",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Header */}
      <div className="mt-20 bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">News & Events</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Stay informed about the latest happenings in our community
          </p>
        </div>
      </div>

      {/* News Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <Card key={news.id} className="border-border overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      <Tag size={12} />
                      {news.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar size={14} />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                  <button className="text-primary font-medium hover:underline">
                    Read More →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
