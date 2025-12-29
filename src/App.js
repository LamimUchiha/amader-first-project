import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import ServiceHome from "./Services/ServiceHome";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen px-10">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServiceHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
