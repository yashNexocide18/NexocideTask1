import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Slide from "../components/Slide";
import Services from "../components/Services";
import Subhero from "../components/Subhero";
import CaseStudies from "../components/CaseStudies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Slide />
            <Services />
            <Subhero />
            <CaseStudies />
            <div className="overflow-x-hidden">
                <Contact />
            </div>
            <Footer />
        </>
    );
}
