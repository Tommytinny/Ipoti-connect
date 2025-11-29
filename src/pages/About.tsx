import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Header */}
      <div className="mt-20 bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">About Ipoti</h1>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>
      </div>

      {/* History Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">Our History</h2>
            <div className="w-24 h-1 bg-accent mb-6" />
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Ipoti is an ancient town located in Ekiti State, Nigeria, with a rich history spanning several centuries. 
                The town has been a center of cultural excellence and traditional values, preserving the heritage of the Yoruba people.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Founded by brave ancestors who settled in this fertile land, Ipoti has grown from a small settlement 
                into a vibrant community known for its agricultural prowess, cultural festivals, and educated populace.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Throughout its history, Ipoti has produced notable personalities in various fields including education, 
                politics, business, and the arts, contributing significantly to the development of Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Traditions */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
              Culture & Traditions
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our cultural heritage is the foundation of our identity and community strength
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Ipoti Day Festival",
                description: "An annual celebration bringing together indigenes from home and abroad to celebrate our heritage with cultural displays, traditional dances, and community awards.",
              },
              {
                title: "Traditional Ceremonies",
                description: "We preserve ancient customs and rituals that have been passed down through generations, maintaining our connection to our ancestors.",
              },
              {
                title: "Yoruba Language",
                description: "Our mother tongue remains central to our identity. We promote its use and teaching to ensure it thrives for future generations.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clans & Families */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
              Clans & Notable Families
            </h2>
            <div className="w-24 h-1 bg-accent mb-6" />
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ipoti is composed of several prominent clans and families, each with its unique history and contributions 
              to the community. These lineages have preserved our traditions and continue to play vital roles in 
              community leadership and development.
            </p>
            <div className="space-y-4">
              {[
                "The royal lineage and traditional chieftaincy system",
                "Prominent family compounds and their historical significance",
                "Community leaders and elders who guide our progress",
                "Notable indigenes who have brought honor to Ipoti",
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                  <p className="text-muted-foreground text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
