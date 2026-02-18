import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import DigitalSkills from "@/components/DigitalSkills";
import Carousel from "@/components/Carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Carousel />
      <Courses />
      <DigitalSkills />
    </div>
  );
};

export default Index;
