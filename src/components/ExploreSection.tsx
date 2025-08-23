import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Star, Camera, Compass, Mountain, Plane, ArrowRight } from "lucide-react";

const ExploreSection = () => {
  const [activeCategory, setActiveCategory] = useState("destinations");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "destinations", label: "Popular Destinations", icon: MapPin },
    { id: "guides", label: "Travel Guides", icon: Compass },
    { id: "tips", label: "Adventure Tips", icon: Mountain },
    { id: "gallery", label: "Photo Gallery", icon: Camera }
  ];

  const popularDestinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop",
      rating: 4.9,
      visitors: "2.3M",
      category: "Tropical Paradise",
      highlights: ["Beautiful beaches", "Rich culture", "Affordable luxury"],
      bestTime: "Apr - Oct",
      budget: "$$"
    },
    {
      id: 2,
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop",
      rating: 4.8,
      visitors: "1.8M",
      category: "Romantic Getaway",
      highlights: ["Stunning sunsets", "White-washed buildings", "Wine tasting"],
      bestTime: "May - Oct",
      budget: "$$$"
    },
    {
      id: 3,
      name: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop",
      rating: 4.7,
      visitors: "1.5M",
      category: "Cultural Experience",
      highlights: ["Ancient temples", "Traditional gardens", "Cherry blossoms"],
      bestTime: "Mar - May, Oct - Nov",
      budget: "$$$"
    },
    {
      id: 4,
      name: "Patagonia, Chile",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop",
      rating: 4.6,
      visitors: "500K",
      category: "Adventure",
      highlights: ["Dramatic landscapes", "Hiking trails", "Wildlife"],
      bestTime: "Oct - Mar",
      budget: "$$"
    }
  ];

  const travelGuides = [
    {
      id: 1,
      title: "Complete Guide to Southeast Asia",
      duration: "2-4 weeks",
      difficulty: "Beginner",
      countries: ["Thailand", "Vietnam", "Cambodia"],
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=300&fit=crop",
      description: "A comprehensive guide covering the must-visit destinations in Southeast Asia."
    },
    {
      id: 2,
      title: "European Backpacking Route",
      duration: "4-6 weeks",
      difficulty: "Intermediate",
      countries: ["Germany", "Czech Republic", "Austria", "Italy"],
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop",
      description: "The classic European route with hidden gems and budget-friendly options."
    },
    {
      id: 3,
      title: "African Safari Adventure",
      duration: "10-14 days",
      difficulty: "Intermediate",
      countries: ["Kenya", "Tanzania", "South Africa"],
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop",
      description: "Experience the Big Five and stunning landscapes across East Africa."
    }
  ];

  const adventureTips = [
    {
      category: "Packing",
      icon: "🎒",
      tips: [
        "Pack light - aim for 7kg max for carry-on",
        "Bring versatile clothing that layers well",
        "Always pack a portable charger and adapter",
        "Keep important documents in waterproof pouch"
      ]
    },
    {
      category: "Safety",
      icon: "🛡️",
      tips: [
        "Research local customs and laws beforehand",
        "Share your itinerary with someone at home",
        "Get comprehensive travel insurance",
        "Keep emergency contacts easily accessible"
      ]
    },
    {
      category: "Budget",
      icon: "💰",
      tips: [
        "Use travel-friendly credit cards with no fees",
        "Book accommodations in advance for better rates",
        "Eat where locals eat for authentic & cheap meals",
        "Use public transportation when possible"
      ]
    },
    {
      category: "Photography",
      icon: "📸",
      tips: [
        "Golden hour provides the best lighting",
        "Include people for scale in landscape shots",
        "Backup photos regularly to cloud storage",
        "Respect local photography restrictions"
      ]
    }
  ];

  const photoGallery = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop",
      title: "Northern Lights in Iceland",
      photographer: "Sarah Johnson",
      location: "Reykjavik, Iceland",
      likes: 234
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&h=400&fit=crop",
      title: "Sunrise at Machu Picchu",
      photographer: "Mike Chen",
      location: "Peru",
      likes: 189
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=400&fit=crop",
      title: "Safari Adventure",
      photographer: "Emma Rodriguez",
      location: "Kenya",
      likes: 156
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop",
      title: "Hot Air Balloons",
      photographer: "Alex Kumar",
      location: "Cappadocia, Turkey",
      likes: 203
    }
  ];

  return (
    <section id="explore" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-foreground">
            Explore <span className="text-transparent bg-gradient-sunset bg-clip-text">Destinations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing places, get expert travel guides, and plan your perfect adventure
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search destinations, guides, or tips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "secondary" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Content Based on Active Category */}
        {activeCategory === "destinations" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-hero transition-all duration-300 transform hover:scale-[1.02] bg-card/90 backdrop-blur-sm border-border/50">
                <div className="relative">
                  <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
                  <Badge variant="secondary" className="absolute top-3 left-3 bg-background/90">
                    {destination.category}
                  </Badge>
                  <div className="absolute top-3 right-3 bg-background/90 rounded-full px-2 py-1 text-xs flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span>{destination.rating}</span>
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">{destination.name}</h3>
                    <p className="text-sm text-muted-foreground">{destination.visitors} annual visitors</p>
                  </div>
                  <div className="space-y-2">
                    {destination.highlights.map((highlight, index) => (
                      <div key={index} className="text-xs text-muted-foreground flex items-center space-x-1">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">Best: {destination.bestTime}</span>
                    <span className="font-medium">{destination.budget}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => {
                      // Scroll to travel logs section to start planning
                      const element = document.getElementById('travel-logs');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Plane className="w-4 h-4 mr-2" />
                    Plan Trip
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeCategory === "guides" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelGuides.map((guide) => (
              <Card key={guide.id} className="overflow-hidden hover:shadow-hero transition-all duration-300 bg-card/90 backdrop-blur-sm border-border/50">
                <div className="relative">
                  <img src={guide.image} alt={guide.title} className="w-full h-48 object-cover" />
                  <Badge variant="secondary" className="absolute top-3 left-3 bg-background/90">
                    {guide.difficulty}
                  </Badge>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground">{guide.description}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Duration:</span> {guide.duration}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Countries:</span> {guide.countries.join(", ")}
                    </div>
                  </div>
                  <Button 
                    variant="default" 
                    className="w-full"
                    onClick={() => {
                      // Create a detailed guide view
                      alert(`Opening ${guide.title}...\n\nThis comprehensive guide covers:\n• ${guide.description}\n• Duration: ${guide.duration}\n• Countries: ${guide.countries.join(", ")}\n• Difficulty: ${guide.difficulty}\n\nFor full interactive guides, connect Supabase for backend functionality!`);
                    }}
                  >
                    Read Full Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeCategory === "tips" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adventureTips.map((tipCategory, index) => (
              <Card key={index} className="p-6 bg-card/90 backdrop-blur-sm border-border/50">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{tipCategory.icon}</span>
                    <h3 className="text-xl font-semibold text-foreground">{tipCategory.category} Tips</h3>
                  </div>
                  <div className="space-y-3">
                    {tipCategory.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">{tip}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeCategory === "gallery" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {photoGallery.map((photo) => (
              <Card key={photo.id} className="overflow-hidden hover:shadow-hero transition-all duration-300 transform hover:scale-[1.02] bg-card/90 backdrop-blur-sm border-border/50 cursor-pointer">
                <div 
                  className="relative group"
                  onClick={() => {
                    // Open photo in full view
                    const newWindow = window.open('', '_blank');
                    if (newWindow) {
                      newWindow.document.write(`
                        <html>
                          <head><title>${photo.title}</title></head>
                          <body style="margin:0;background:#000;display:flex;align-items:center;justify-content:center;min-height:100vh;">
                            <div style="text-align:center;color:white;">
                              <img src="${photo.image}" alt="${photo.title}" style="max-width:90vw;max-height:80vh;object-fit:contain;">
                              <h2>${photo.title}</h2>
                              <p>by ${photo.photographer} • ${photo.location}</p>
                              <p>${photo.likes} likes</p>
                            </div>
                          </body>
                        </html>
                      `);
                    }
                  }}
                >
                  <img src={photo.image} alt={photo.title} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white w-full">
                      <h3 className="font-semibold text-sm">{photo.title}</h3>
                      <p className="text-xs text-gray-200">by {photo.photographer}</p>
                      <p className="text-xs text-gray-300">{photo.location}</p>
                      <p className="text-xs text-gray-400 mt-1">Click to view full size</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/50 rounded-full px-2 py-1 text-white text-xs flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{photo.likes}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreSection;