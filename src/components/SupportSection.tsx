import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  Mail, 
  Phone, 
  MessageSquare, 
  Shield, 
  FileText, 
  Search,
  ChevronDown,
  ChevronUp,
  Send,
  Clock,
  CheckCircle
} from "lucide-react";

const SupportSection = () => {
  const [activeTab, setActiveTab] = useState("help");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const supportTabs = [
    { id: "help", label: "Help Center", icon: HelpCircle },
    { id: "contact", label: "Contact Us", icon: Mail },
    { id: "privacy", label: "Privacy Policy", icon: Shield },
    { id: "terms", label: "Terms of Service", icon: FileText }
  ];

  const faqItems = [
    {
      id: 1,
      category: "Getting Started",
      question: "How do I create my first travel log?",
      answer: "Creating your first travel log is easy! Click on 'Add Log' in the navigation menu, fill out the form with your trip details, upload photos, and share your adventure. You can add location, dates, descriptions, and even rate your experience."
    },
    {
      id: 2,
      category: "Account",
      question: "Can I make my travel logs private?",
      answer: "Yes! You have full control over your privacy settings. You can set each travel log to public (visible to everyone), private (only visible to you), or shared with specific friends. You can change these settings anytime from your profile."
    },
    {
      id: 3,
      category: "Features",
      question: "How do I add photos to my travel logs?",
      answer: "When creating or editing a travel log, you can upload multiple photos by clicking the 'Add Photos' button or simply dragging and dropping images into the form. We support JPG, PNG, and WEBP formats up to 10MB each."
    },
    {
      id: 4,
      category: "Account",
      question: "Can I export my travel data?",
      answer: "Absolutely! You can export all your travel logs as a PDF or CSV file from your profile settings. This includes all your photos, descriptions, dates, and locations. Perfect for creating a physical travel journal or backup."
    },
    {
      id: 5,
      category: "Technical",
      question: "Why can't I see the map for my locations?",
      answer: "Map functionality requires location services and a stable internet connection. Make sure you've enabled location permissions in your browser and that you're connected to the internet. If issues persist, try refreshing the page or clearing your browser cache."
    },
    {
      id: 6,
      category: "Features",
      question: "How do I share my travel logs on social media?",
      answer: "Each travel log has a share button that allows you to share directly to Twitter, Facebook, Instagram, or copy a shareable link. You can also generate beautiful travel cards to share as images on your social platforms."
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      contact: "support@travellogmaster.com",
      availability: "24/7"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team instantly",
      contact: "Available in app",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri 9AM-5PM EST"
    }
  ];

  const filteredFaqs = faqItems.filter(faq => 
    searchQuery === "" || 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="support" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-foreground">
            Support <span className="text-transparent bg-gradient-sunset bg-clip-text">Center</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get help, find answers, and learn more about Travel Log Master
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {supportTabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "secondary" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className="rounded-full"
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Help Center Content */}
        {activeTab === "help" && (
          <div className="space-y-8">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-3 text-lg"
                />
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {["Getting Started", "Account", "Features", "Technical"].map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  onClick={() => setSearchQuery(category)}
                  className="h-auto p-4 text-left flex-col items-start space-y-1"
                >
                  <span className="font-medium">{category}</span>
                  <span className="text-sm text-muted-foreground">
                    {faqItems.filter(faq => faq.category === category).length} articles
                  </span>
                </Button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <Card key={faq.id} className="bg-card/90 backdrop-blur-sm border-border/50">
                  <CardContent className="p-0">
                    <button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    >
                      <div className="space-y-1">
                        <Badge variant="outline" className="mb-2">
                          {faq.category}
                        </Badge>
                        <h3 className="font-medium text-foreground">{faq.question}</h3>
                      </div>
                      {expandedFaq === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Contact Us Content */}
        {activeTab === "contact" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              {contactMethods.map((method, index) => (
                <Card key={index} className="p-6 bg-card/90 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-0 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <method.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{method.title}</h4>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{method.contact}</span>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{method.availability}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-card/90 backdrop-blur-sm border-border/50">
              <CardContent className="p-0 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Send us a Message</h3>
                  <p className="text-muted-foreground">
                    We'll get back to you within 24 hours
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Your name" />
                    <Input type="email" placeholder="Your email" />
                  </div>
                  <Input placeholder="Subject" />
                  <Textarea 
                    placeholder="How can we help you?"
                    rows={6}
                  />
                </div>

                <Button className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>We typically respond within 24 hours</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Privacy Policy Content */}
        {activeTab === "privacy" && (
          <Card className="max-w-4xl mx-auto p-8 bg-card/90 backdrop-blur-sm border-border/50">
            <CardContent className="p-0 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Privacy Policy</h3>
                <p className="text-muted-foreground">Last updated: August 22, 2024</p>
              </div>
              
              <div className="prose max-w-none text-foreground space-y-6">
                <section className="space-y-3">
                  <h4 className="text-lg font-semibold">Information We Collect</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, 
                    add travel logs, or contact us for support. This includes your name, email address, 
                    travel destinations, photos, and descriptions of your experiences.
                  </p>
                </section>

                <section className="space-y-3">
                  <h4 className="text-lg font-semibold">How We Use Your Information</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We use the information we collect to provide, maintain, and improve our services, 
                    communicate with you, and personalize your experience. We may also use your information 
                    to send you updates about new features or travel-related content you might find interesting.
                  </p>
                </section>

                <section className="space-y-3">
                  <h4 className="text-lg font-semibold">Information Sharing</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy. We may share your information 
                    with service providers who assist us in operating our platform and serving our users.
                  </p>
                </section>

                <section className="space-y-3">
                  <h4 className="text-lg font-semibold">Data Security</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. However, no method of 
                    transmission over the internet is 100% secure.
                  </p>
                </section>

                <section className="space-y-3">
                  <h4 className="text-lg font-semibold">Your Rights</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, update, or delete your personal information at any time. 
                    You can also opt out of certain communications or request that we stop processing your 
                    information by contacting us directly.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Terms of Service Content */}
        {activeTab === "terms" && (
          <Card className="max-w-4xl mx-auto p-8 bg-card/90 backdrop-blur-sm border-border/50">
            <CardContent className="p-0 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Terms of Service</h3>
                <p className="text-muted-foreground">Last updated: August 22, 2024</p>
              </div>
              
              <div className="prose max-w-none text-foreground space-y-6">
                <section className="space-y-3">
                  <h4 className="text-lg font-semibold">Acceptance of Terms</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using Travel Log Master, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, please do 
                    not use this service.
                  </p>
                </section>

                <section className="space-y-3">
                  <h4 className="text-lg font-semibold">Use License</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Permission is granted to temporarily download one copy of Travel Log Master per device 
                    for personal, non-commercial transitory viewing only. This is the grant of a license, 
                    not a transfer of title, and under this license you may not modify or copy the materials.
                  </p>
                </section>

                <section className="space-y-3">
                  <h4 className="text-lg font-semibold">User Content</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    You retain all rights to any content you submit, post, or display on or through the service. 
                    By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, 
                    copy, reproduce, process, and display your content in connection with the service.
                  </p>
                </section>

                <section className="space-y-3">
                  <h4 className="text-lg font-semibold">Prohibited Uses</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    You may not use our service for any illegal or unauthorized purpose. You must not, in the 
                    use of the service, violate any laws in your jurisdiction including but not limited to 
                    copyright laws, or upload content that is harmful, threatening, or inappropriate.
                  </p>
                </section>

                <section className="space-y-3">
                  <h4 className="text-lg font-semibold">Limitation of Liability</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    In no case shall Travel Log Master, nor its directors, employees, partners, agents, 
                    suppliers, or affiliates, be liable for any indirect, incidental, punitive, special, 
                    or consequential damages arising out of or in connection with your use of the service.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default SupportSection;