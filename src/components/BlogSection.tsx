import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, User, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  featured: boolean;
}

const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Hidden Gems in Southeast Asia",
    summary: "Discover breathtaking locations off the beaten path that will make your next adventure unforgettable.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500&h=300&fit=crop",
    category: "Adventure",
    author: "Sarah Chen",
    readTime: "8 min read",
    date: "2024-08-20",
    featured: true
  },
  {
    id: "2",
    title: "Budget Travel: Europe on $50 a Day",
    summary: "Complete guide to exploring Europe without breaking the bank. Tips, tricks, and insider secrets.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&h=300&fit=crop",
    category: "Budget",
    author: "Mark Rodriguez",
    readTime: "12 min read",
    date: "2024-08-18",
    featured: true
  },
  {
    id: "3",
    title: "Street Food Adventures: A Global Guide",
    summary: "From Bangkok's floating markets to Istanbul's spice bazaars, explore the world through local cuisine.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=300&fit=crop",
    category: "Food",
    author: "Emma Thompson",
    readTime: "6 min read",
    date: "2024-08-15",
    featured: false
  },
  {
    id: "4",
    title: "Solo Female Travel: Safety & Tips",
    summary: "Essential advice for women traveling alone, from planning to execution.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop",
    category: "Solo Travel",
    author: "Lisa Park",
    readTime: "10 min read",
    date: "2024-08-12",
    featured: false
  },
  {
    id: "5",
    title: "Digital Nomad Destinations 2024",
    summary: "Best cities for remote work with great wifi, affordable living, and vibrant communities.",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=500&h=300&fit=crop",
    category: "Digital Nomad",
    author: "Alex Kumar",
    readTime: "9 min read",
    date: "2024-08-10",
    featured: false
  },
  {
    id: "6",
    title: "Sustainable Travel Guide",
    summary: "How to minimize your environmental impact while exploring the world responsibly.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
    category: "Eco Travel",
    author: "Maya Green",
    readTime: "7 min read",
    date: "2024-08-08",
    featured: false
  }
];

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...Array.from(new Set(mockBlogPosts.map(post => post.category)))];
  
  const filteredPosts = selectedCategory === "All" 
    ? mockBlogPosts 
    : mockBlogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h2 className="text-4xl font-bold text-foreground">
            Travel <span className="text-transparent bg-gradient-sunset bg-clip-text">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tips, guides, and inspiration from fellow travelers around the world
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "secondary" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">Featured Stories</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 transform hover:scale-[1.02] bg-card/90 backdrop-blur-sm border-border/50 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 transform hover:scale-[1.02] bg-card/90 backdrop-blur-sm border-border/50 animate-slide-up"
              style={{ animationDelay: `${(featuredPosts.length + index) * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="bg-background/90 text-foreground text-xs">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground line-clamp-3 leading-relaxed text-sm">
                  {post.summary}
                </p>
                
                <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            Load More Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;