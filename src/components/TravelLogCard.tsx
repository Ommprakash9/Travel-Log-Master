import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Eye, Heart } from "lucide-react";

interface TravelLog {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  likes: number;
  views: number;
}

interface TravelLogCardProps {
  log: TravelLog;
}

const TravelLogCard = ({ log }: TravelLogCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 transform hover:scale-[1.02] bg-card/90 backdrop-blur-sm border-border/50">
      <div className="relative overflow-hidden">
        <img
          src={log.image}
          alt={log.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            {log.tags[0]}
          </Badge>
        </div>
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="outline-hero" size="sm">
            View Details
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {log.title}
          </h3>
          <div className="flex items-center text-muted-foreground space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{log.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{log.date}</span>
            </div>
          </div>
        </div>
        
        <p className="text-muted-foreground line-clamp-3 leading-relaxed">
          {log.description}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex space-x-2">
            {log.tags.slice(1, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center space-x-4 text-muted-foreground text-sm">
            <div className="flex items-center space-x-1">
              <Heart className="w-4 h-4" />
              <span>{log.likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{log.views}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TravelLogCard;