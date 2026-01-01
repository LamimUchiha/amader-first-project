import Banner from "./Banner";
import Landingservice from "./Landingservice";
import PresenceSection from "./PresenceSection";
import FloatingBubbles from "./FloatingBubbles";
import Technologies from "./Technologies";
import LandingProjects from "./LandingProjects";

const Home = () => {
  return (
    <div className="relative">
      {/* FULL PAGE BACKGROUND BUBBLES */}
      <FloatingBubbles />

      {/* CONTENT ABOVE BUBBLES */}
      <div className="relative z-10">
        <Banner />
        <Landingservice />
        <Technologies></Technologies>
        
        <LandingProjects></LandingProjects>
        <PresenceSection></PresenceSection>
      </div>
    </div>
  );
};

export default Home;
