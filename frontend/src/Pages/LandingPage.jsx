import ShuffleHero from "../Components/Lading";
import Team from "../Components/Team";
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
import Accordion from "../Components/Faq";
import ComponentsSection from "../Components/Component";
import About from "../Components/About";
export const LandingPage = () =>{
    return (
        <div className="bg-white">
            <Navbar></Navbar>
            <ShuffleHero></ShuffleHero>
            <About></About>
            <ComponentsSection></ComponentsSection>
            <Accordion></Accordion>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
}