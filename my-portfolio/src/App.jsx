import ContactMe from "./ContactMe";

import MySkills from "./MySkills";
import MyPortfolio from "./MyPortfolio.jsx";
import Footer from "./Footer";
import HeroSection from "./HeroSection.jsx";
import AboutMe from "./AboutMe";
import Navbar from "./Navbar.jsx";
//import Slideshow from './Slideshow';
export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MyPortfolio />
      <MySkills />

      <AboutMe />

      <ContactMe />

      <Footer />
    </>
  );
}
