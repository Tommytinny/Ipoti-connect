import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock } from "lucide-react";

const Projects = () => {
  const ongoingProjects = [
    {
      title: "Modern Healthcare Center",
      description: "Construction of a state-of-the-art primary healthcare facility to serve the community.",
      progress: 65,
      timeline: "Expected completion: March 2025",
    },
    {
      title: "Road Infrastructure Upgrade",
      description: "Rehabilitation and expansion of major roads connecting Ipoti to neighboring towns.",
      progress: 45,
      timeline: "Expected completion: June 2025",
    },
    {
      title: "Community ICT Center",
      description: "Digital literacy and technology access center for youth and adults.",
      progress: 80,
      timeline: "Expected completion: January 2025",
    },
  ];

  const completedProjects = [
    {
      title: "Secondary School Block",
      description: "Modern classroom facilities with 10 rooms, library, and science laboratory.",
      year: "2024",
    },
    {
      title: "Town Hall Complex",
      description: "Multi-purpose community center for meetings, events, and cultural activities.",
      year: "2023",
    },
    {
      title: "Water Supply System",
      description: "Borehole installation and distribution network serving 500+ households.",
      year: "2023",
    },
    {
      title: "Market Renovation",
      description: "Upgraded market facilities with improved stalls and sanitation.",
      year: "2022",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Header */}
      <div className="mt-20 bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Community Projects</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Building a better future through sustainable development initiatives
          </p>
        </div>
      </div>

      {/* Ongoing Projects */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground flex items-center justify-center gap-3">
              <Clock className="text-accent" />
              Ongoing Projects
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground">Projects currently in development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ongoingProjects.map((project, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-primary font-semibold">{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <p className="text-sm text-accent font-medium">{project.timeline}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground flex items-center justify-center gap-3">
              <CheckCircle2 className="text-accent" />
              Completed Projects
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground">Successfully delivered community developments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {completedProjects.map((project, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                      <p className="text-muted-foreground mb-2">{project.description}</p>
                      <p className="text-sm text-accent font-medium">Completed: {project.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Support Our Projects
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Your contributions help us continue building essential infrastructure for our community's growth and prosperity.
          </p>
          <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-md transition-colors">
            Make a Contribution
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
