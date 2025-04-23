import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Contact />
    </>
  );
};

export default App;
