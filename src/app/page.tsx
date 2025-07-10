import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slide from "./components/Slide";
import Services from "./components/Services";
import Subhero from "./components/Subhero";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <div >
    <Navbar />
    <Hero />
    <Slide/>
    <Services />
    <Subhero />
    <CaseStudies/>
    <Contact/>



    </div>
  );
}
