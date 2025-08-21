import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Camera, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Track Your Journey",
      description: "Document every destination with detailed logs, photos, and memories that last a lifetime."
    },
    {
      icon: Users,
      title: "Connect with Travelers",
      description: "Share your adventures and discover inspiring stories from fellow explorers worldwide."
    },
    {
      icon: Camera,
      title: "Capture Moments",
      description: "Upload and organize your travel photos with smart tagging and location tracking."
    },
    {
      icon: Award,
      title: "Earn Achievements",
      description: "Unlock badges and milestones as you explore more destinations and share experiences."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/20 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                About <span className="text-transparent bg-gradient-nature bg-clip-text">Travel Log Master</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your personal travel companion for documenting adventures, sharing experiences, 
                and inspiring your next journey. Join thousands of travelers who trust us to 
                preserve their most precious memories.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center shadow-card">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Document Everything
                  </h3>
                  <p className="text-muted-foreground">
                    From hidden gems to famous landmarks, create detailed logs with photos, 
                    descriptions, and personal insights.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-sunset flex items-center justify-center shadow-card">
                  <Users className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Share & Inspire
                  </h3>
                  <p className="text-muted-foreground">
                    Connect with fellow travelers, share your stories, and get inspired 
                    by incredible adventures from around the world.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-nature flex items-center justify-center shadow-card">
                  <Camera className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Preserve Memories
                  </h3>
                  <p className="text-muted-foreground">
                    Never forget a moment with our smart organization system that keeps 
                    all your travel memories in one beautiful place.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group shadow-card hover:shadow-hero transition-all duration-300 transform hover:scale-105 bg-card/90 backdrop-blur-sm border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-hero flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50K+", label: "Active Travelers" },
            { number: "200+", label: "Countries" },
            { number: "1M+", label: "Travel Logs" },
            { number: "5M+", label: "Photos Shared" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center space-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-transparent bg-gradient-hero bg-clip-text">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;