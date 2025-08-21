import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TravelLogsSection from "@/components/TravelLogsSection";
import AddTravelLogForm from "@/components/AddTravelLogForm";
import BlogSection from "@/components/BlogSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <TravelLogsSection />
      <AddTravelLogForm />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
