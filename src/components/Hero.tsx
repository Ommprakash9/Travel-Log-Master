import { Button } from "@/components/ui/button";
import { MapPin, Camera, Heart, Globe } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <MapPin className="absolute top-1/4 left-1/4 w-8 h-8 text-primary animate-float opacity-20" />
        <Camera className="absolute top-1/3 right-1/4 w-6 h-6 text-secondary animate-float opacity-30" style={{ animationDelay: '1s' }} />
        <Heart className="absolute bottom-1/3 left-1/3 w-7 h-7 text-accent animate-float opacity-25" style={{ animationDelay: '2s' }} />
        <Globe className="absolute top-1/2 right-1/3 w-5 h-5 text-primary-glow animate-float opacity-30" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 animate-slide-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-background leading-tight">
            Travel Log
            <span className="block text-transparent bg-gradient-hero bg-clip-text">
              Master
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-background/90 max-w-2xl mx-auto leading-relaxed">
            Document your adventures, share your journey, and inspire others to explore the world
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Start Your Travel Log
              <MapPin className="w-5 h-5 transition-transform group-hover:scale-110" />
            </Button>
            <Button variant="outline-hero" size="lg">
              Explore Destinations
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-background">500+</div>
              <div className="text-background/80 text-sm">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-background">10K+</div>
              <div className="text-background/80 text-sm">Travel Logs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-background">25K+</div>
              <div className="text-background/80 text-sm">Travelers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;