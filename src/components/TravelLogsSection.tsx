import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin } from "lucide-react";
import TravelLogCard from "./TravelLogCard";
import TravelLogModal from "./TravelLogModal";
import northernLightsImg from "@/assets/northern-lights.jpg";
import machuPicchuImg from "@/assets/machu-picchu.jpg";
import africanSafariImg from "@/assets/african-safari.jpg";
import cappadociaBalloonsImg from "@/assets/cappadocia-balloons.jpg";

interface TravelLog {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  likes: number;
  views: number;
  author?: string;
  duration?: string;
  highlights?: string[];
}

// Extended mock data for travel logs
const mockTravelLogs: TravelLog[] = [
  {
    id: "1",
    title: "Sunset Over Santorini",
    location: "Santorini, Greece",
    date: "2024-08-15",
    description: "Witnessed the most breathtaking sunset over the Aegean Sea. The white buildings against the deep blue sky created a magical atmosphere that I'll never forget.",
    fullDescription: "My journey to Santorini was nothing short of magical. Perched on the cliff tops of Oia, I watched as the sun painted the sky in brilliant shades of orange, pink, and gold. The iconic white-washed buildings with their blue domes created a stunning contrast against the infinite expanse of the Aegean Sea. Local tavernas filled the evening air with the aroma of fresh seafood and traditional Greek cuisine. The narrow cobblestone paths led to hidden viewpoints where couples and families gathered to witness nature's daily masterpiece. This wasn't just a sunset – it was a moment of pure tranquility that reminded me why travel feeds the soul.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&h=300&fit=crop",
    tags: ["Sunset", "Europe", "Island", "Photography"],
    likes: 124,
    views: 892,
    author: "Sarah Chen",
    duration: "5 days",
    highlights: [
      "Watched the famous Oia sunset from the best viewpoint",
      "Explored traditional Greek villages and local markets",
      "Tasted authentic Greek cuisine and local wines",
      "Visited ancient ruins and learned about island history",
      "Relaxed on unique volcanic black sand beaches"
    ]
  },
  {
    id: "2",
    title: "Trekking Through the Himalayas",
    location: "Nepal",
    date: "2024-07-22",
    description: "An incredible 14-day trek through the Annapurna Circuit. The mountain views, local culture, and personal challenge made this an unforgettable adventure.",
    fullDescription: "The Annapurna Circuit trek was the most challenging yet rewarding adventure of my life. Over 14 days, I hiked through diverse landscapes ranging from subtropical forests to alpine meadows and finally to the stark beauty above the treeline. Each morning brought new challenges and breathtaking vistas of snow-capped peaks piercing the sky. The local Sherpa guides shared stories of mountain folklore while teaching me about their resilient culture. Tea houses along the trail offered warm shelter and hearty dal bhat that fueled our daily climbs. Crossing the Thorong La Pass at 5,416 meters was a moment of pure triumph – standing there with prayer flags fluttering in the wind, surrounded by the world's highest peaks, I felt truly alive.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=300&fit=crop",
    tags: ["Adventure", "Mountains", "Trekking", "Nepal"],
    likes: 89,
    views: 543,
    author: "Mark Rodriguez",
    duration: "14 days",
    highlights: [
      "Crossed the challenging Thorong La Pass at 5,416m",
      "Experienced authentic Sherpa culture and hospitality",
      "Witnessed sunrise over Annapurna and Dhaulagiri ranges",
      "Stayed in traditional mountain tea houses",
      "Achieved personal fitness and mental endurance goals"
    ]
  },
  {
    id: "3",
    title: "Cherry Blossoms in Kyoto",
    location: "Kyoto, Japan",
    date: "2024-04-10",
    description: "Perfect timing for sakura season! Strolled through Maruyama Park surrounded by pink petals and traditional temples. Spring in Japan is pure poetry.",
    fullDescription: "Arriving in Kyoto during peak sakura season felt like stepping into a living painting. The city transformed into a pink and white wonderland as thousands of cherry trees bloomed simultaneously. I spent days wandering through historic districts like Gion, where geishas in traditional kimono walked beneath canopies of delicate blossoms. The famous Philosopher's Path became a tunnel of pink petals, with locals and tourists alike stopping to capture the ephemeral beauty. Evening hanami parties filled parks with families sharing food and laughter under illuminated trees. The contrast between ancient temples and modern city life, all wrapped in nature's seasonal gift, created an atmosphere of profound beauty and cultural richness that will forever remain in my heart.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&h=300&fit=crop",
    tags: ["Spring", "Culture", "Japan", "Nature"],
    likes: 156,
    views: 721,
    author: "Emma Thompson",
    duration: "7 days",
    highlights: [
      "Witnessed peak cherry blossom season in Maruyama Park",
      "Participated in traditional hanami picnic celebrations",
      "Explored historic temples surrounded by sakura trees",
      "Experienced traditional tea ceremony in historic district",
      "Walked the famous Philosopher's Path at sunset"
    ]
  },
  {
    id: "4",
    title: "Safari Adventures in Serengeti",
    location: "Tanzania",
    date: "2024-06-05",
    description: "Witnessed the Great Migration up close. Lions, elephants, and zebras in their natural habitat. The African wilderness exceeded all expectations.",
    fullDescription: "The Serengeti Safari was a life-changing encounter with the raw beauty of African wilderness. For six days, I tracked the Great Migration across endless golden plains, witnessing one of nature's most spectacular phenomena. Thousands of wildebeest and zebras moved in thunderous herds, their ancient journey guided by instincts older than civilization. Our experienced Maasai guides shared intimate knowledge of animal behavior, helping us spot elusive leopards resting in acacia trees and lion prides teaching their cubs to hunt. The nights were equally magical – sleeping under a canopy of stars so bright they seemed within reach, while the sounds of the African bush created nature's symphony. This wasn't just wildlife viewing; it was a profound connection to the primal world that exists beyond our modern lives.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&h=300&fit=crop",
    tags: ["Wildlife", "Safari", "Africa", "Adventure"],
    likes: 198,
    views: 1234,
    author: "David Wilson",
    duration: "6 days",
    highlights: [
      "Witnessed the Great Migration crossing in real-time",
      "Spotted all Big Five animals in their natural habitat",
      "Learned traditional tracking skills from Maasai guides",
      "Camped under pristine African starry skies",
      "Photographed rare wildlife behaviors and interactions"
    ]
  },
  {
    id: "5",
    title: "Northern Lights in Iceland",
    location: "Reykjavik, Iceland",
    date: "2024-01-28",
    description: "Danced under the Aurora Borealis on a crystal clear winter night. The green lights painting the sky was a moment of pure magic and wonder.",
    fullDescription: "My Iceland adventure became legendary when the Northern Lights decided to put on the most spectacular show I've ever witnessed. After days of cloudy skies and patient waiting, the weather finally cleared to reveal a celestial dance that left me speechless. The Aurora Borealis began as a faint green glow on the horizon, then exploded into ribbons of emerald and violet light that twisted and spiraled across the entire sky. Standing in the remote countryside, far from any light pollution, I felt completely connected to the cosmos. The silence was profound, broken only by the occasional crack of shifting ice and my own amazed whispers. Local folklore says the lights are spirits dancing in the sky – after witnessing their ethereal beauty firsthand, I understand why ancient cultures created such magical explanations for this natural phenomenon.",
    image: northernLightsImg,
    tags: ["Winter", "Aurora", "Iceland", "Night"],
    likes: 267,
    views: 1567,
    author: "Lisa Park",
    duration: "4 days",
    highlights: [
      "Witnessed intense Aurora Borealis activity across entire sky",
      "Learned photography techniques for Northern Lights capture",
      "Explored ice caves and frozen waterfalls during the day",
      "Relaxed in natural hot springs under star-filled skies",
      "Met local storytellers sharing Viking and aurora folklore"
    ]
  },
  {
    id: "6",
    title: "Exploring Ancient Temples",
    location: "Angkor Wat, Cambodia",
    date: "2024-03-18",
    description: "Lost in time among the ancient Khmer temples. Each stone tells a story of a civilization that once ruled Southeast Asia. Absolutely mesmerizing.",
    fullDescription: "Exploring Angkor Wat at sunrise was like traveling back in time to witness the glory of the ancient Khmer Empire. As the first rays of sunlight illuminated the temple's iconic spires, I stood in awe of architectural mastery that has endured for over 800 years. The vast complex revealed itself slowly – intricate bas-reliefs telling stories of Hindu mythology, massive stone faces watching over abandoned courtyards, and trees growing through temple walls in a beautiful dance between nature and human creation. Local guides shared passionate stories about their ancestors' achievements, bringing historical context to the weathered stones. Each temple had its own personality: the mysterious faces of Bayon, the jungle-consumed Ta Prohm, and the perfectly preserved Angkor Wat itself. This wasn't just sightseeing – it was a profound encounter with human heritage and the impermanence of all civilizations.",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=500&h=300&fit=crop",
    tags: ["History", "Culture", "Temples", "Cambodia"],
    likes: 145,
    views: 876,
    author: "Maya Green",
    duration: "3 days",
    highlights: [
      "Witnessed sunrise over iconic Angkor Wat temple complex",
      "Explored mysterious jungle-covered Ta Prohm temple",
      "Learned about ancient Khmer civilization and architecture",
      "Discovered intricate stone carvings and historical reliefs",
      "Connected with local guides sharing ancestral knowledge"
    ]
  },
  {
    id: "7",
    title: "Ancient Inca Trail to Machu Picchu",
    location: "Cusco, Peru",
    date: "2024-05-12",
    description: "Following in the footsteps of ancient Incas through cloud forests and mountain passes to reach the legendary Lost City of the Incas.",
    fullDescription: "The four-day trek to Machu Picchu along the ancient Inca Trail was a journey through time, altitude, and personal limits. Starting in the Sacred Valley, our group of adventurers followed stone paths carved by Incan engineers over 500 years ago. Each day brought new challenges: crossing Dead Woman's Pass at 4,215 meters left us breathless but exhilarated, while descending through cloud forests revealed hidden ruins and exotic wildlife. Our Quechua guides shared stories of their Incan heritage while preparing traditional meals that connected us to indigenous culture. The final morning's approach to Machu Picchu through the Sun Gate was pure magic – watching the ancient citadel emerge from morning mist as condors soared overhead created a moment of transcendence that justified every challenging step of the journey.",
    image: machuPicchuImg,
    tags: ["Adventure", "History", "Peru", "Trekking"],
    likes: 234,
    views: 1456,
    author: "Carlos Mendez",
    duration: "4 days",
    highlights: [
      "Trekked the authentic Inca Trail to Machu Picchu",
      "Crossed challenging Dead Woman's Pass at 4,215m altitude",
      "Explored lesser-known Incan ruins along the ancient path",
      "Learned traditional Quechua customs from indigenous guides",
      "Experienced sunrise over Machu Picchu from the Sun Gate"
    ]
  },
  {
    id: "8",
    title: "African Safari Sunset",
    location: "Kruger National Park, South Africa",
    date: "2024-09-03",
    description: "Golden hour in the African savanna with elephants silhouetted against the setting sun. Nature's theater at its most dramatic.",
    fullDescription: "Nothing could have prepared me for the emotional impact of an African sunset in Kruger National Park. As our safari vehicle paused at a watering hole, the sky began its nightly transformation into a canvas of gold, orange, and deep red. A family of elephants approached the water, their massive silhouettes creating perfect compositions against the dramatic sky. The matriarch led her calves with gentle wisdom while the adults kept watchful eyes on our respectful distance. Our ranger's whispered commentary added depth to the scene, explaining family dynamics and conservation efforts. As darkness approached, the sounds of the African bush came alive – distant lion calls, hyena whoops, and the rustle of nocturnal creatures beginning their nightly routines. This wasn't just wildlife viewing; it was witnessing the eternal rhythms of life that have played out on these plains for millions of years.",
    image: africanSafariImg,
    tags: ["Safari", "Wildlife", "Africa", "Sunset"],
    likes: 178,
    views: 987,
    author: "Jennifer Adams",
    duration: "5 days",
    highlights: [
      "Witnessed elephant families at sunset watering holes",
      "Learned about conservation efforts from expert rangers",
      "Experienced the sounds and rhythms of African night life",
      "Photographed perfect wildlife silhouettes against golden skies",
      "Connected with the primal beauty of untouched wilderness"
    ]
  },
  {
    id: "9",
    title: "Hot Air Balloons Over Cappadocia",
    location: "Cappadocia, Turkey",
    date: "2024-06-20",
    description: "Floating above fairy chimneys and ancient cave dwellings in a hot air balloon. The surreal landscape looked like another planet.",
    fullDescription: "Rising before dawn for a hot air balloon flight over Cappadocia proved to be one of the most surreal and magical experiences of my travels. As our balloon gently lifted off in the pre-dawn darkness, the landscape below slowly revealed itself in the growing light – a moonscape of volcanic rock formations, ancient cave churches, and fairy chimney spires that seemed to defy gravity. Floating silently at 1,000 feet above ground, surrounded by dozens of other colorful balloons, created a dreamlike atmosphere that felt otherworldly. The pilot's expert navigation took us through valleys carved by millions of years of erosion, past Byzantine cave paintings and underground cities where early Christians once sought refuge. As the sun painted the rock formations in warm golden hues, I understood why Cappadocia has inspired travelers and spiritual seekers for centuries – this is truly one of Earth's most extraordinary landscapes.",
    image: cappadociaBalloonsImg,
    tags: ["Adventure", "Turkey", "Balloon", "Landscape"],
    likes: 312,
    views: 2134,
    author: "Alex Kumar",
    duration: "3 days",
    highlights: [
      "Floated over surreal fairy chimney rock formations",
      "Experienced sunrise from 1,000 feet above unique landscape",
      "Learned about ancient underground cities and cave churches",
      "Witnessed dozens of colorful balloons creating aerial ballet",
      "Explored traditional Turkish cave hotels and local cuisine"
    ]
  },
  {
    id: "10",
    title: "Tropical Paradise Beach Escape",
    location: "Maldives",
    date: "2024-07-08",
    description: "Crystal clear turquoise waters, white sand beaches, and overwater bungalows. The definition of tropical paradise found.",
    fullDescription: "My week in the Maldives redefined my understanding of tropical paradise. Staying in an overwater villa, I woke each morning to the gentle sound of waves lapping beneath my feet and stepped directly into crystal-clear lagoon waters that seemed too perfect to be real. The coral reefs just steps from my accommodation teemed with colorful marine life – parrotfish, angel fish, and reef sharks gliding gracefully through underwater gardens. Snorkeling expeditions revealed manta ray cleaning stations and turtle nesting sites, while sunset dolphin cruises showcased playful pods dancing in the wake of our traditional dhoni boat. The local Maldivian culture, with its blend of South Asian and Arab influences, added richness to the natural beauty. Evening meals on the beach, surrounded by bioluminescent plankton creating magical light shows in the waves, created memories that will forever represent my idea of earthly paradise.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    tags: ["Beach", "Tropical", "Maldives", "Paradise"],
    likes: 189,
    views: 1345,
    author: "Rachel Foster",
    duration: "7 days",
    highlights: [
      "Stayed in luxury overwater villa with direct lagoon access",
      "Snorkeled with manta rays and sea turtles in pristine reefs",
      "Experienced bioluminescent plankton light shows at night",
      "Enjoyed traditional Maldivian culture and cuisine",
      "Witnessed perfect sunsets from private beach locations"
    ]
  }
];

const TravelLogsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedLog, setSelectedLog] = useState<TravelLog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleLogs, setVisibleLogs] = useState(6);

  const allTags = Array.from(new Set(mockTravelLogs.flatMap(log => log.tags)));
  
  const filteredLogs = mockTravelLogs.filter(log => {
    const matchesSearch = log.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || log.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const handleViewDetails = (log: TravelLog) => {
    setSelectedLog(log);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLog(null);
  };

  const handleLoadMore = () => {
    setVisibleLogs(prev => prev + 6);
  };

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
          {filteredLogs.slice(0, visibleLogs).map((log, index) => (
            <div
              key={log.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TravelLogCard log={log} onViewDetails={handleViewDetails} />
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleLogs < filteredLogs.length && (
          <div className="text-center mt-12">
            <Button 
              variant="default" 
              size="lg"
              onClick={handleLoadMore}
            >
              <MapPin className="w-4 h-4" />
              Load More Adventures
            </Button>
          </div>
        )}

        {/* Travel Log Modal */}
        <TravelLogModal 
          log={selectedLog} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />
      </div>
    </section>
  );
};

export default TravelLogsSection;