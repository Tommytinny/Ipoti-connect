import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import  PublicationsSection  from "@/components/PublicationsSection";
import  ProverbsCarousel from "@/components/ProverbsCarousel";
import ProminentCarousel from "@/components/ProminentCarousel";
import  CultureStoriesCarousel  from "@/components/CultureStoriesCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Heart, Users, Briefcase } from "lucide-react";
import traditionalLeader from "@/assets/traditional-leader.jpg";
import palace from "@/assets/palace.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="mt-20">
        <HeroCarousel />
      </div>

      {/* Welcome Section 
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-sans font-bold mb-6 text-primary">
              Welcome to Ipoti
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-foreground leading-relaxed">
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
              <Card key={index} className="border hover:shadow-lg transition-all animate-fade-in border-t-[6px] border-t-primary border-solid">
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
      */}

      <section className="py-6 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute lg:block -inset-4 bg-accent/20 rounded-lg transform rotate-3 hidden" />
                <img
                  src={palace}
                  alt="ipoti palace"
                  className="relative lg:block rounded-lg shadow-2xl w-full lg:h-[500px] object-cover hidden"
                />
              </div>
            </div>
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6 text-primary">
                Welcome to Ipoti
              </h2>
              <div className="w-24 h-1 bg-accent mb-6" />
              <p className="text-lg mb-6 leading-relaxed">
                Ipoti is a historic town in Ekiti State, Nigeria, known for its rich cultural heritage, 
              vibrant community spirit, and commitment to progress. We are a people united by tradition 
              and driven by the vision of a prosperous future for all our indigenes, both at home and in the diaspora.
              </p>
              {[
              {
                icon: <Users className="text-primary" size={20} />,
                title: "Community Unity",
                description: "Bringing Ipoti indigenes together across the world",
              },
              {
                icon: <Calendar className="text-primary" size={20} />,
                title: "Cultural Events",
                description: "Celebrating our heritage through festivals and traditions",
              },
              {
                icon: <Briefcase className="text-primary" size={20} />,
                title: "Development Projects",
                description: "Building infrastructure for a better tomorrow",
              },
              {
                icon: <Heart className="text-primary" size={20} />,
                title: "Diaspora Support",
                description: "Connecting our people worldwide to support growth",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-x-4 mt-6 items-center">
                <div className="">{item.icon}</div>
                <div>
                  <h3 className="font-bold font-mono">{item.title}</h3>
                  <p className="font-light">{item.description}</p>
                </div>
              </div>
            ))}
              
            </div>
            
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-[#F8F4F4]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6 text-primary">
                Our Traditional Leadership
              </h2>
              <div className="w-24 h-1 bg-accent mb-6" />
              <p className="text-lg mb-6 leading-relaxed">
                The leadership of Ipoti is rooted in centuries of tradition and wisdom. Our traditional rulers 
                guide the community with dignity, preserving our cultural values while embracing progressive development.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
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
      <ProminentCarousel />


      {/* slider 
      <section>
        <div id="container">
          <div id="slider-container">
              <div id="slider">
                <div className="slide">
                  <div>
                    <div className="card">
                      <img src="https://images.pexels.com/photos/16645682/pexels-photo-16645682/free-photo-of-close-up-of-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                      <div className="button-grp">
                        <button className="likes">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>

                        </button>
                        <button className="download">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                            </svg>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="slide"><span>2</span></div>
                <div className="slide"><span>3</span></div>
                <div className="slide"><span>4</span></div>
                <div className="slide"><span>5</span></div>
                <div className="slide"><span>6</span></div>
                <div className="slide"><span>7</span></div>
                <div className="slide"><span>8</span></div>
                <div className="slide"><span>9</span></div>
                <div className="slide"><span>10</span></div>
            </div>
          </div>
        </div>
      </section>*/}

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
