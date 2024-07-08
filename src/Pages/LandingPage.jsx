import ShuffleHero from "../Components/Lading";
import Team from "../Components/Team";
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
import FAQ from "../Components/Faq";
import ComponentsSection from "../Components/Component";
import About from "../Components/About";


export const LandingPage = () =>{
    return (
        <div className="bg-white">
            <Navbar></Navbar>
            <ShuffleHero></ShuffleHero>
            <About></About>
            <ComponentsSection></ComponentsSection>
            <FAQ></FAQ>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
}