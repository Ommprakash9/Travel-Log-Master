import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, User, ArrowRight } from "lucide-react";
import BlogPostModal from "./BlogPostModal";

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
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
    content: "Southeast Asia is a treasure trove of incredible destinations that remain largely undiscovered by mainstream tourism. From the pristine beaches of the Perhentian Islands in Malaysia to the ancient temples hidden in Cambodia's jungles, this region offers endless opportunities for adventure.\n\nOne of my favorite discoveries was the floating village of Kampong Phluk in Cambodia. As you navigate through the stilted houses during the wet season, you'll witness a way of life that has remained unchanged for centuries. The children paddle their boats to school, and the fishermen cast their nets as the sun rises over Tonle Sap Lake.\n\nAnother incredible spot is the Kuang Si Falls in Laos. While many tourists visit the main waterfall, few venture to the hidden pools upstream. The turquoise waters and limestone formations create a natural paradise that's perfect for swimming and photography.\n\nFor those seeking cultural immersion, the hill tribes of northern Vietnam offer authentic experiences away from the tourist crowds. Stay in a traditional homestay in Sapa and learn about the ancient farming techniques that have sustained these communities for generations.",
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
    content: "Traveling through Europe on a tight budget might seem impossible, but with the right strategies, you can explore this incredible continent for just $50 a day. The key is knowing where to save and where to splurge.\n\nAccommodation is often the biggest expense, but hostels in Eastern Europe cost as little as $10-15 per night. Consider staying in places like Prague, Budapest, or Krakow as your base and taking day trips to more expensive cities. Many hostels offer free breakfast and kitchen facilities, allowing you to save significantly on food costs.\n\nTransportation can be another major expense, but Europe's extensive bus network offers budget-friendly alternatives to trains. Companies like FlixBus connect major cities for as little as $15-25. If you're planning to cover long distances, consider a Eurail pass during off-peak seasons.\n\nFor food, shop at local markets and cook your own meals when possible. When eating out, look for lunch specials and set menus, which are often half the price of dinner portions. In countries like Poland, Czech Republic, and Hungary, you can enjoy hearty traditional meals for under $8.\n\nFree walking tours are available in almost every major European city and provide excellent value for money. Many museums offer free admission on certain days of the month, and cities like London and Berlin have numerous free attractions.",
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
    content: "Food is the universal language of travel. Each bite tells a story, connects cultures, and creates memories that last a lifetime. From the bustling night markets of Bangkok to the aromatic spice bazaars of Istanbul, street food offers the most authentic taste of a destination.\n\nIn Bangkok, start your culinary adventure at Chatuchak Weekend Market. Try the famous mango sticky rice, crispy pad thai served in banana leaves, and exotic fruit smoothies. Don't miss the floating markets of Damnoen Saduak, where vendors sell steaming bowls of boat noodles directly from their colorful boats.\n\nIstanbul's Grand Bazaar is a feast for all senses. Sample fresh baklava dripping with honey, sip Turkish coffee that's strong enough to wake the dead, and try döner kebabs that are grilled to perfection. The spice market offers endless varieties of Turkish delight and aromatic teas.\n\nIn Mexico City, street food reaches an art form. From tacos al pastor served with pineapple to elote (grilled corn) covered in mayonnaise and chili powder, every corner offers a new culinary adventure. The best meals often come from the most unassuming food carts.\n\nRemember: if there's a long line of locals, that's where you want to eat. Trust your nose, follow the crowds, and always carry hand sanitizer!",
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
    content: "Solo female travel can be one of the most empowering and transformative experiences of your life. With proper planning and awareness, you can explore the world safely and confidently.\n\nResearch is your best friend. Before visiting any destination, learn about local customs, dress codes, and cultural norms. Some countries have specific expectations for women's behavior and clothing. Respecting these norms not only keeps you safe but also shows cultural sensitivity.\n\nTrust your instincts above all else. If a situation doesn't feel right, remove yourself immediately. Your gut feeling is usually correct. Don't worry about being polite if it compromises your safety.\n\nStay connected with people back home. Share your itinerary with trusted friends or family members. Check in regularly, especially when changing locations. Consider using location-sharing apps for added security.\n\nChoose accommodations carefully. Read reviews from other female travelers, stay in well-lit areas, and consider female-only dorms in hostels. Many cities have women-only hotels or floors designed specifically for solo female travelers.\n\nPack smart and dress appropriately for your destination. Research what locals wear and pack accordingly. A good rule of thumb: if you wouldn't wear it to meet your grandmother, don't pack it for conservative countries.\n\nConnect with other travelers and locals through verified platforms. Join Facebook groups for solo female travelers, use apps like Meetup to find travel companions, or book tours to meet like-minded people safely.",
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
    content: "The digital nomad lifestyle has exploded in popularity, and 2024 offers incredible destinations for remote workers seeking adventure without sacrificing productivity.\n\nLisbon, Portugal tops the list for European nomads. With blazing-fast internet, affordable co-working spaces, and a thriving expat community, it's perfect for digital professionals. The cost of living is reasonable, the weather is fantastic year-round, and the pastel de nata coffee breaks are legendary.\n\nMedellín, Colombia has transformed into a nomad haven. The 'City of Eternal Spring' offers perfect weather, world-class internet infrastructure, and living costs that are 70% lower than major US cities. The El Poblado neighborhood is particularly popular among remote workers.\n\nTallinn, Estonia might surprise you, but this Baltic gem offers e-Residency programs, incredible digital infrastructure, and a medieval charm that makes work feel like an adventure. The startup scene is thriving, and English is widely spoken.\n\nCanggu, Bali remains a classic for a reason. Beach views from your laptop, incredible food for $2 meals, and a community of entrepreneurs make it irresistible. The internet has improved dramatically, and co-working spaces are world-class.\n\nBuenos Aires, Argentina offers European sophistication at South American prices. The city's café culture is perfect for laptop work, the steak is world-renowned, and the nightlife ensures you'll never be bored after work hours.\n\nWhen choosing your base, consider internet speed, time zone compatibility with clients, cost of living, visa requirements, and community. The best nomad destinations offer the perfect balance of productivity and adventure.",
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
    content: "Sustainable travel isn't about giving up adventures—it's about making conscious choices that preserve the destinations we love for future generations.\n\nTransportation is the biggest factor in your travel carbon footprint. Choose direct flights when possible, as takeoffs and landings consume the most fuel. For shorter distances, consider trains, buses, or carpooling. In Europe, the rail network makes it easy to travel between countries without flying.\n\nStay longer in fewer places rather than rushing between multiple destinations. This reduces transportation emissions and allows for deeper, more meaningful experiences. Slow travel also supports local economies more effectively.\n\nChoose accommodations with environmental certifications. Look for hotels with solar panels, water conservation programs, and local sourcing. Many eco-lodges actively contribute to conservation efforts and community development.\n\nRespect local ecosystems and wildlife. Never touch coral reefs, don't buy products made from endangered species, and maintain safe distances from animals. Choose tour operators that prioritize conservation and employ local guides.\n\nSupport local economies by eating at family-owned restaurants, shopping at local markets, and choosing locally-owned accommodations. This ensures your tourism dollars benefit the community directly.\n\nPack light to reduce fuel consumption during transport. Bring a reusable water bottle, shopping bag, and utensils to minimize single-use plastic waste. Many destinations now have water refill stations specifically for travelers.\n\nOffset your carbon emissions through verified programs that invest in renewable energy projects or reforestation. While not a perfect solution, it's a step toward carbon-neutral travel.\n\nRemember: sustainable travel is about making better choices, not perfect ones. Every small action contributes to preserving our planet's incredible destinations.",
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
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const categories = ["All", ...Array.from(new Set(mockBlogPosts.map(post => post.category)))];
  
  const filteredPosts = selectedCategory === "All" 
    ? mockBlogPosts 
    : mockBlogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

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
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group/btn"
                        onClick={() => handleReadMore(post)}
                      >
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
          {regularPosts.slice(0, visiblePosts).map((post, index) => (
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
                 
                 <Button 
                   variant="outline" 
                   size="sm" 
                   className="w-full mt-3"
                   onClick={() => handleReadMore(post)}
                 >
                   Read More
                 </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {visiblePosts < regularPosts.length && (
          <div className="text-center mt-12">
            <Button 
              variant="default" 
              size="lg"
              onClick={handleLoadMore}
            >
              Load More Stories
            </Button>
          </div>
        )}

        {/* Blog Post Modal */}
        <BlogPostModal 
          post={selectedPost}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default BlogSection;