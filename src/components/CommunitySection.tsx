import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, MessageSquare, Calendar, MapPin, Heart, Send } from "lucide-react";

const CommunitySection = () => {
  const [activeTab, setActiveTab] = useState("stories");

  const communityStats = [
    { icon: Users, label: "Active Travelers", count: "12,543" },
    { icon: MessageSquare, label: "Stories Shared", count: "8,921" },
    { icon: MapPin, label: "Countries Visited", count: "195" },
    { icon: Heart, label: "Connections Made", count: "25,634" }
  ];

  const travelStories = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      location: "Santorini, Greece",
      title: "Sunset Magic in Santorini",
      preview: "Just witnessed the most incredible sunset from Oia. The way the light painted everything golden...",
      likes: 234,
      comments: 42,
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      author: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      location: "Tokyo, Japan",
      title: "Hidden Ramen Spots in Tokyo",
      preview: "Found this incredible little ramen shop in a back alley. The owner has been perfecting his recipe for 30 years...",
      likes: 187,
      comments: 28,
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      author: "Emma Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      location: "Machu Picchu, Peru",
      title: "Sunrise at Machu Picchu",
      preview: "Woke up at 4 AM to catch the sunrise over the ancient citadel. Every step of the trek was worth it...",
      likes: 456,
      comments: 73,
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=300&h=200&fit=crop"
    }
  ];

  const upcomingMeetups = [
    {
      id: 1,
      title: "Photography Walk in Central Park",
      date: "2024-08-25",
      time: "10:00 AM",
      location: "New York, NY",
      attendees: 24,
      organizer: "Alex Thompson"
    },
    {
      id: 2,
      title: "Travel Planning Workshop",
      date: "2024-08-28",
      time: "7:00 PM",
      location: "San Francisco, CA",
      attendees: 18,
      organizer: "Lisa Park"
    },
    {
      id: 3,
      title: "Solo Travel Safety Meetup",
      date: "2024-09-02",
      time: "6:30 PM",
      location: "London, UK",
      attendees: 32,
      organizer: "Maya Green"
    }
  ];

  return (
    <section id="community" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-foreground">
            Travel <span className="text-transparent bg-gradient-sunset bg-clip-text">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow travelers, share your stories, and discover new adventures together
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-card/90 backdrop-blur-sm border-border/50">
              <CardContent className="space-y-2 p-0">
                <stat.icon className="w-8 h-8 mx-auto text-primary" />
                <div className="text-2xl font-bold text-foreground">{stat.count}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "stories", label: "Travel Stories" },
            { id: "meetups", label: "Meetups" },
            { id: "share", label: "Share Experience" }
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "secondary" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className="rounded-full"
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Content Based on Active Tab */}
        {activeTab === "stories" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {travelStories.map((story) => (
                <Card key={story.id} className="overflow-hidden hover:shadow-hero transition-all duration-300 bg-card/90 backdrop-blur-sm border-border/50">
                  <div className="relative">
                    <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
                    <Badge variant="secondary" className="absolute top-3 left-3 bg-background/90">
                      {story.location}
                    </Badge>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <img src={story.avatar} alt={story.author} className="w-10 h-10 rounded-full" />
                      <div>
                        <div className="font-medium text-foreground">{story.author}</div>
                        <div className="text-sm text-muted-foreground">{story.location}</div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground">{story.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{story.preview}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{story.likes}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{story.comments}</span>
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "meetups" && (
          <div className="space-y-6">
            {upcomingMeetups.map((meetup) => (
              <Card key={meetup.id} className="p-6 bg-card/90 backdrop-blur-sm border-border/50">
                <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{meetup.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{meetup.date} at {meetup.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{meetup.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{meetup.attendees} attending</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Organized by {meetup.organizer}</p>
                  </div>
                  <Button variant="default">Join Meetup</Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "share" && (
          <Card className="max-w-2xl mx-auto p-8 bg-card/90 backdrop-blur-sm border-border/50">
            <CardContent className="space-y-6 p-0">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Share Your Travel Experience</h3>
                <p className="text-muted-foreground">
                  Tell the community about your latest adventure and inspire others
                </p>
              </div>
              
              <div className="space-y-4">
                <Input placeholder="Travel destination" />
                <Input placeholder="Experience title" />
                <Textarea 
                  placeholder="Share your story... What made this trip special? Any tips for fellow travelers?"
                  rows={6}
                />
                <div className="flex items-center space-x-2">
                  <Input type="file" accept="image/*" className="flex-1" />
                </div>
              </div>

              <Button className="w-full" size="lg">
                <Send className="w-4 h-4" />
                Share Your Story
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default CommunitySection;