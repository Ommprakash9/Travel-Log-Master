import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin } from "lucide-react";
import TravelLogCard from "./TravelLogCard";

// Mock data for travel logs
const mockTravelLogs = [
  {
    id: "1",
    title: "Sunset Over Santorini",
    location: "Santorini, Greece",
    date: "2024-08-15",
    description: "Witnessed the most breathtaking sunset over the Aegean Sea. The white buildings against the deep blue sky created a magical atmosphere that I'll never forget.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&h=300&fit=crop",
    tags: ["Sunset", "Europe", "Island", "Photography"],
    likes: 124,
    views: 892
  },
  {
    id: "2",
    title: "Trekking Through the Himalayas",
    location: "Nepal",
    date: "2024-07-22",
    description: "An incredible 14-day trek through the Annapurna Circuit. The mountain views, local culture, and personal challenge made this an unforgettable adventure.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=300&fit=crop",
    tags: ["Adventure", "Mountains", "Trekking", "Nepal"],
    likes: 89,
    views: 543
  },
  {
    id: "3",
    title: "Cherry Blossoms in Kyoto",
    location: "Kyoto, Japan",
    date: "2024-04-10",
    description: "Perfect timing for sakura season! Strolled through Maruyama Park surrounded by pink petals and traditional temples. Spring in Japan is pure poetry.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&h=300&fit=crop",
    tags: ["Spring", "Culture", "Japan", "Nature"],
    likes: 156,
    views: 721
  },
  {
    id: "4",
    title: "Safari Adventures in Serengeti",
    location: "Tanzania",
    date: "2024-06-05",
    description: "Witnessed the Great Migration up close. Lions, elephants, and zebras in their natural habitat. The African wilderness exceeded all expectations.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=300&fit=crop",
    tags: ["Wildlife", "Safari", "Africa", "Adventure"],
    likes: 198,
    views: 1234
  },
  {
    id: "5",
    title: "Northern Lights in Iceland",
    location: "Reykjavik, Iceland",
    date: "2024-01-28",
    description: "Danced under the Aurora Borealis on a crystal clear winter night. The green lights painting the sky was a moment of pure magic and wonder.",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&h=300&fit=crop",
    tags: ["Winter", "Aurora", "Iceland", "Night"],
    likes: 267,
    views: 1567
  },
  {
    id: "6",
    title: "Exploring Ancient Temples",
    location: "Angkor Wat, Cambodia",
    date: "2024-03-18",
    description: "Lost in time among the ancient Khmer temples. Each stone tells a story of a civilization that once ruled Southeast Asia. Absolutely mesmerizing.",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=500&h=300&fit=crop",
    tags: ["History", "Culture", "Temples", "Cambodia"],
    likes: 145,
    views: 876
  }
];

const TravelLogsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const allTags = Array.from(new Set(mockTravelLogs.flatMap(log => log.tags)));
  
  const filteredLogs = mockTravelLogs.filter(log => {
    const matchesSearch = log.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || log.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <section id="logs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h2 className="text-4xl font-bold text-foreground">
            Travel <span className="text-transparent bg-gradient-hero bg-clip-text">Adventures</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing journeys and get inspired for your next adventure
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search destinations, adventures..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/80 border-border/50 focus:border-primary"
              />
            </div>
            <Button variant="outline" size="lg" className="md:w-auto">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={!selectedTag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag("")}
              className="rounded-full"
            >
              All
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                className="rounded-full"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Travel Logs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLogs.map((log, index) => (
            <div
              key={log.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TravelLogCard log={log} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            <MapPin className="w-4 h-4" />
            Load More Adventures
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TravelLogsSection;