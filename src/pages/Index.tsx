import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Users, Briefcase } from "lucide-react";
import traditionalLeader from "@/assets/traditional-leader.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="mt-20">
        <HeroCarousel />
      </div>

      {/* Welcome Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">
              Welcome to Ipoti
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ipoti is a historic town in Ekiti State, Nigeria, known for its rich cultural heritage, 
              vibrant community spirit, and commitment to progress. We are a people united by tradition 
              and driven by the vision of a prosperous future for all our indigenes, both at home and in the diaspora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: <Users className="text-accent" size={32} />,
                title: "Community Unity",
                description: "Bringing Ipoti indigenes together across the world",
              },
              {
                icon: <Calendar className="text-accent" size={32} />,
                title: "Cultural Events",
                description: "Celebrating our heritage through festivals and traditions",
              },
              {
                icon: <Briefcase className="text-accent" size={32} />,
                title: "Development Projects",
                description: "Building infrastructure for a better tomorrow",
              },
              {
                icon: <Heart className="text-accent" size={32} />,
                title: "Diaspora Support",
                description: "Connecting our people worldwide to support growth",
              },
            ].map((item, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
                Our Traditional Leadership
              </h2>
              <div className="w-24 h-1 bg-accent mb-6" />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The leadership of Ipoti is rooted in centuries of tradition and wisdom. Our traditional rulers 
                guide the community with dignity, preserving our cultural values while embracing progressive development.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Through their guidance, Ipoti continues to thrive as a beacon of cultural preservation 
                and community development in Ekiti State.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Learn About Our History
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 rounded-lg transform rotate-3" />
                <img
                  src={traditionalLeader}
                  alt="Traditional Leader"
                  className="relative rounded-lg shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
              Latest News & Events
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground">Stay updated with what's happening in our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                date: "Dec 15, 2024",
                title: "Ipoti Day 2025 Announcement",
                excerpt: "Join us for the annual Ipoti Day celebration featuring cultural displays, traditional dances, and community awards.",
              },
              {
                date: "Dec 10, 2024",
                title: "New School Block Completed",
                excerpt: "Community development project delivers modern classroom facilities for our children's education.",
              },
              {
                date: "Dec 5, 2024",
                title: "Town Hall Meeting",
                excerpt: "Community leaders meet to discuss infrastructure development and diaspora engagement initiatives.",
              },
            ].map((news, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all group cursor-pointer">
                <CardContent className="p-6">
                  <p className="text-sm text-accent font-medium mb-2">{news.date}</p>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                  <Button variant="link" className="p-0 text-primary h-auto">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All News
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Support Ipoti Development
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Your contribution helps us build schools, improve infrastructure, and preserve our cultural heritage for future generations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Make a Donation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Learn More About Projects
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
