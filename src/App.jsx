import "./styles/globals.css";
import "./icons/TechIcons";
import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Blobs from "./components/Blobs";
// import ParallaxNature from "./components/ParallaxNature";

function App() {
  return (
    <>
      <Blobs />
      <NavBar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
