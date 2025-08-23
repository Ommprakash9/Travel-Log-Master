import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Users, Clock, Search, Filter, Heart } from "lucide-react";
import { toast } from "sonner";

const MeetupSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Events" },
    { id: "adventure", label: "Adventure" },
    { id: "cultural", label: "Cultural" },
    { id: "food", label: "Food & Drink" },
    { id: "photography", label: "Photography" },
    { id: "backpacking", label: "Backpacking" }
  ];

  const meetups = [
    {
      id: 1,
      title: "Himalayan Trek Planning Meetup",
      description: "Join fellow adventurers to plan an epic Himalayan trekking expedition. Share experiences, routes, and tips.",
      date: "2024-03-15",
      time: "18:00",
      location: "Adventure Café, Delhi",
      category: "adventure",
      attendees: 24,
      maxAttendees: 30,
      organizer: "Mountain Explorers Club",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
      tags: ["Trekking", "Himalayas", "Adventure", "Planning"]
    },
    {
      id: 2,
      title: "Street Photography Walk - Old City",
      description: "Explore the historic lanes of Old City while learning street photography techniques from professional photographers.",
      date: "2024-03-20",
      time: "16:00",
      location: "Red Fort, Delhi",
      category: "photography",
      attendees: 18,
      maxAttendees: 25,
      organizer: "Lens & Light Society",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
      tags: ["Photography", "Walking", "Heritage", "Learning"]
    },
    {
      id: 3,
      title: "Solo Female Travelers Meetup",
      description: "Connect with like-minded solo female travelers. Share stories, safety tips, and plan future adventures together.",
      date: "2024-03-25",
      time: "15:00",
      location: "Coffee Bean Café, Mumbai",
      category: "cultural",
      attendees: 32,
      maxAttendees: 40,
      organizer: "Women Who Wander",
      image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=300&fit=crop",
      tags: ["Solo Travel", "Women", "Safety", "Networking"]
    },
    {
      id: 4,
      title: "Food Trail: Hidden Gems of Bangalore",
      description: "Discover Bangalore's best kept culinary secrets with local food enthusiasts and taste authentic regional dishes.",
      date: "2024-04-02",
      time: "19:00",
      location: "Brigade Road, Bangalore",
      category: "food",
      attendees: 15,
      maxAttendees: 20,
      organizer: "Bangalore Foodies",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
      tags: ["Food", "Local Culture", "Walking Tour", "Authentic"]
    },
    {
      id: 5,
      title: "Backpacking Europe: Budget Tips & Routes",
      description: "Learn from experienced backpackers about budget-friendly routes, accommodations, and money-saving tips for Europe.",
      date: "2024-04-08",
      time: "17:30",
      location: "Traveler's Hub, Pune",
      category: "backpacking",
      attendees: 28,
      maxAttendees: 35,
      organizer: "Budget Wanderers",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
      tags: ["Backpacking", "Europe", "Budget", "Routes"]
    },
    {
      id: 6,
      title: "Wildlife Photography Workshop",
      description: "Master wildlife photography techniques with experts. Learn about equipment, ethics, and composition in natural settings.",
      date: "2024-04-12",
      time: "06:00",
      location: "Sanjay Gandhi National Park, Mumbai",
      category: "photography",
      attendees: 12,
      maxAttendees: 15,
      organizer: "Wild Lens Academy",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop",
      tags: ["Wildlife", "Photography", "Nature", "Workshop"]
    }
  ];

  const filteredMeetups = meetups.filter(meetup => {
    const matchesSearch = meetup.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         meetup.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         meetup.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || meetup.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleJoinMeetup = (meetup: any) => {
    if (meetup.attendees >= meetup.maxAttendees) {
      toast.error("This meetup is full!");
      return;
    }
    
    toast.success(`You've joined "${meetup.title}"! Check your email for details.`);
    // In a real app, this would make an API call to join the meetup
  };

  return (
    <section id="meetups" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-foreground">
            Travel <span className="text-transparent bg-gradient-sunset bg-clip-text">Meetups</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow travelers, share experiences, and join exciting adventures in your city
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search meetups by title, description, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "secondary" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
                size="sm"
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Meetups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMeetups.map((meetup) => (
            <Card key={meetup.id} className="overflow-hidden hover:shadow-hero transition-all duration-300 transform hover:scale-[1.02] bg-card/90 backdrop-blur-sm border-border/50">
              <div className="relative">
                <img src={meetup.image} alt={meetup.title} className="w-full h-48 object-cover" />
                <Badge variant="secondary" className="absolute top-3 left-3 bg-background/90">
                  {categories.find(c => c.id === meetup.category)?.label}
                </Badge>
                <div className="absolute top-3 right-3">
                  <Button variant="ghost" size="sm" className="bg-background/90 hover:bg-background/70">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                    {meetup.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {meetup.description}
                  </p>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(meetup.date).toLocaleDateString('en-US', { 
                      weekday: 'short', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{meetup.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span className="line-clamp-1">{meetup.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{meetup.attendees}/{meetup.maxAttendees} attendees</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {meetup.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">
                    Organized by <span className="font-medium">{meetup.organizer}</span>
                  </p>
                  
                  <Button 
                    variant={meetup.attendees >= meetup.maxAttendees ? "secondary" : "default"}
                    className="w-full"
                    onClick={() => handleJoinMeetup(meetup)}
                    disabled={meetup.attendees >= meetup.maxAttendees}
                  >
                    {meetup.attendees >= meetup.maxAttendees ? "Full" : "Join Meetup"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMeetups.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No meetups found matching your criteria.
            </p>
            <p className="text-muted-foreground">
              Try adjusting your search or filters.
            </p>
          </div>
        )}

        {/* Create Meetup CTA */}
        <div className="text-center mt-12">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto border border-border/50">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Can't find the perfect meetup?
            </h3>
            <p className="text-muted-foreground mb-6">
              Create your own travel meetup and connect with like-minded adventurers in your area.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => {
                toast.success("Redirecting to meetup creation form...");
                // Would navigate to create meetup page
              }}
            >
              Create Your Meetup
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetupSection;