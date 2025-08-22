import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Globe, Heart } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import { handleNavClick } from "@/lib/scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: "Popular Destinations", href: "#" },
      { name: "Travel Guides", href: "#" },
      { name: "Adventure Tips", href: "#" },
      { name: "Photo Gallery", href: "#" }
    ],
    community: [
      { name: "Travel Stories", href: "#" },
      { name: "Join Community", href: "#" },
      { name: "Share Experience", href: "#" },
      { name: "Travel Meetups", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" }
    ]
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-hero p-1.5 shadow-card">
                <img src={logoIcon} alt="Travel Log Master" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Travel Log Master</h3>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Your personal travel companion for documenting adventures, sharing experiences, 
              and inspiring your next journey around the world.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                <Globe className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                <Mail className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                <MapPin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 py-8 border-t border-background/20">
          <div className="text-center space-y-4">
            <h4 className="text-2xl font-bold">Start Your Adventure Today</h4>
            <p className="text-background/80 max-w-md mx-auto">
              Join thousands of travelers and get travel tips, destination guides, and inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => handleNavClick("#add-log")}
              >
                <MapPin className="w-4 h-4" />
                Get Started Free
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-background/60 text-sm">
            © {currentYear} Travel Log Master. All rights reserved.
          </p>
          <p className="text-background/60 text-sm flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for travelers worldwide</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;