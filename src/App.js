import { Routes, Route, Router } from "react-router-dom";

import Home from "./Home/Home";
import ProjectsHome from "./Projects/ProjectsHome";
import Navbar from "./shared/Navbar";
import WebDevelopment from "./Services/WebDevelopment";
import ServiceHome from "./Services/ServiceHome";
import Footer from "./shared/Footer";

function App() {
  return (
     <Router>
      <div className="bg-white min-h-screen px-10">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServiceHome />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />


          <Route path="/projects" element={<ProjectsHome />} />

        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
