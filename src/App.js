import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import ServiceHome from "./Services/ServiceHome";
import ProjectsHome from "./Projects/ProjectsHome";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import WebDevelopment from "./Services/WebDevelopment";
import GraphicsDesign from "./Services/GraphicsDesign";
import ECommerceSolution from "./Services/EcommerceSolution";
import AiAutomation from "./Services/AiAutomation";
import CustomAIModels from "./Services/CustomAIModels";
import AIWebIntegration from "./Services/AIWebIntegration";
import AboutUsHome from "./About Us/AboutUsHome";
import ContactUs from "./Contact Us/ContactUsHome";
import CursorFollower from "./shared/CursorFollower";


function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen px-10">
        <Navbar />
        <CursorFollower />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServiceHome />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/graphics-design" element={<GraphicsDesign />} />
          <Route path="/services/ecommerce" element={<ECommerceSolution />} />
          <Route path="/services/ai-automation" element={<AiAutomation />} />
          <Route path="/services/custom-ai-models" element={<CustomAIModels />} />
          <Route path="/services/ai-web-integration" element={<AIWebIntegration />} />
        

          <Route path="/about-us" element={<AboutUsHome />} />

          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/projects" element={<ProjectsHome />} />

        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
