import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Heart, Eye, Share2, X, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

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

interface TravelLogModalProps {
  log: TravelLog | null;
  isOpen: boolean;
  onClose: () => void;
}

const TravelLogModal = ({ log, isOpen, onClose }: TravelLogModalProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (log) {
      // Check if already liked/saved in localStorage
      const savedLogs = JSON.parse(localStorage.getItem('savedTravelLogs') || '[]');
      const likedLogs = JSON.parse(localStorage.getItem('likedTravelLogs') || '[]');
      setIsSaved(savedLogs.includes(log.id));
      setIsLiked(likedLogs.includes(log.id));
    }
  }, [log]);

  if (!log) return null;

  const handleLike = () => {
    const likedLogs = JSON.parse(localStorage.getItem('likedTravelLogs') || '[]');
    if (isLiked) {
      const updated = likedLogs.filter((id: string) => id !== log.id);
      localStorage.setItem('likedTravelLogs', JSON.stringify(updated));
      toast.success("Removed from favorites");
    } else {
      likedLogs.push(log.id);
      localStorage.setItem('likedTravelLogs', JSON.stringify(likedLogs));
      toast.success("Added to favorites ❤️");
    }
    setIsLiked(!isLiked);
  };

  const handleSave = () => {
    const savedLogs = JSON.parse(localStorage.getItem('savedTravelLogs') || '[]');
    if (isSaved) {
      const updated = savedLogs.filter((id: string) => id !== log.id);
      localStorage.setItem('savedTravelLogs', JSON.stringify(updated));
      toast.success("Removed from saved list");
    } else {
      savedLogs.push(log.id);
      localStorage.setItem('savedTravelLogs', JSON.stringify(savedLogs));
      toast.success("Saved to your list! 📋");
    }
    setIsSaved(!isSaved);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: log.title,
          text: `Check out this amazing travel experience: ${log.description}`,
          url: window.location.href,
        });
        toast.success("Shared successfully!");
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to copying to clipboard
      const shareText = `Check out "${log.title}" in ${log.location}! ${log.description} - ${window.location.href}`;
      await navigator.clipboard.writeText(shareText);
      toast.success("Link copied to clipboard! 📋");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-lg border-border/50">
        <DialogHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2 flex-1">
              <DialogTitle className="text-2xl font-bold text-foreground pr-8">
                {log.title}
              </DialogTitle>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{log.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(log.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                {log.duration && (
                  <div className="text-sm">
                    Duration: {log.duration}
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Hero Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={log.image}
              alt={log.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay opacity-30"></div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {log.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">About This Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              {log.fullDescription || log.description}
            </p>
          </div>

          {/* Highlights */}
          {log.highlights && log.highlights.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Trip Highlights</h3>
              <ul className="space-y-2">
                {log.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Author Info */}
          {log.author && (
            <div className="bg-muted/20 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">About the Traveler</h4>
              <p className="text-muted-foreground text-sm">
                Shared by <span className="font-medium">{log.author}</span>
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between border-t border-border/50 pt-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`flex items-center space-x-2 ${isLiked ? 'text-red-500' : 'text-muted-foreground'}`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                <span>{log.likes + (isLiked ? 1 : 0)}</span>
              </Button>
              <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                <Eye className="w-4 h-4" />
                <span>{log.views}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button 
                variant={isSaved ? "secondary" : "hero"} 
                size="sm"
                onClick={handleSave}
              >
                {isSaved ? <Check className="w-4 h-4 mr-2" /> : null}
                {isSaved ? "Saved" : "Save to My List"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TravelLogModal;