
import NavService from "../Components/NavService";
import Timeline from "../Components/timeline";
import HeroSection from "../Components/hero";
import water from "../assets/water.jpg"
// import mangrove2 from "../assets/mangrove2.jpg"
import ContentSection from "../Components/Content";


export const Water = () =>{


  const events = [
    {
      id: 1,
      title: "Company Inception",
      description: "The company was born out of a vision to innovate.",
    },
    {
      id: 2,
      title: "Achieved $65 Million Funding",
      description: "In an affirmation of our potential and promise, we secured a substantial funding of $65 million.",
    },
    {
      id: 3,
      title: "Beta Version Launch",
      description: "Marking a significant step forward, we released the beta version of our product.",
    },
    {
      id: 4,
      title: "Product's Global Rollout",
      description: "The culmination of our efforts and dedication led to the global launch of our product.",
    },
  ];

  return(
      <div className="bg-white">
      <NavService/>
      <HeroSection 
      imageUrl={water}
      heading="Water Management"
      description="Planting and conserving trees fosters a symbiotic relationship with nature, symbolizing growth, harmony, and sustainability. Trees represent resilience and interconnectedness, offering life-giving oxygen, shelter, and beauty. By nurturing trees, we embrace our role as stewards of the Earth, ensuring a thriving, balanced ecosystem for future generations."
      textcolor={"text-blue-400"}
      buttonColor={"bg-blue-600 hover:bg-blue-700 active:bg-blue-500"}
      />
      <ContentSection
      title="Water Management"
      paragraph1="Planting and conserving mangroves fosters a symbiotic relationship with nature, symbolizing growth, harmony, and sustainability. mangroves represent resilience and interconnectedness, offering life-giving oxygen, shelter, and beauty. By nurturing mangroves, we embrace our role as stewards of the Earth, ensuring a thriving, balanced ecosystem for future generations."
      paragraph2=" We call you to partake in the sacred act of planting mangroves, a profound testament to our intertwined destiny with Earth. Each sapling embodies hope, resilience, and the eternal promise of renewal. Together, let us cultivate a legacy of life and harmony, nurturing the roots of existence for generations yet unborn."
      />
      <Timeline events={events} color="blue-600" />
      </div>
    );
}