import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import DigitalSkills from "@/components/DigitalSkills";
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Carousel />
      <Courses />
      <DigitalSkills />
      <Contact />
    </div>
  );
};

export default Index;
