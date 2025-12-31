import Web_Developement_Pic from "../images/Web Developer Pic.jpg";
import Graphics_Design_Pic from "../images/Graphics Design Pic .jpg";
import E_Commerce_Pic from "../images/E Commerce.jpg"
import Ai_Automation_Pic from "../images/AI Automation.jpg"
import Custom_AI_Models_Pic from "../images/Custom AI Models.png"
import Ai_Web_Intergration_Pic from "../images/AI Web Integration.png"
import { useNavigate } from "react-router-dom";


const services = [
  {
    title: "Web Development",
    desc: "High-performance websites, landing pages, and business platforms built with modern technologies.",
    img: Web_Developement_Pic,
    path: "/services/web-development",
  },
  {
    title: "Graphic Design",
    desc: "Branding, UI design, and social media visuals that communicate trust and authority.",
    img: Graphics_Design_Pic,
  },
  {
    title: "E-commerce Solutions",
    desc: "Optimized product listings, store setup, and conversion-focused e-commerce systems.",
    img: E_Commerce_Pic,
  },
  {
    title: "AI Automation",
    desc: "Workflow automation using AI to reduce manual work and increase operational efficiency.",
    img: Ai_Automation_Pic,
  },
  {
    title: "Custom AI Models",
    desc: "Business-specific AI models designed for analysis, intelligence, and decision support.",
    img: Custom_AI_Models_Pic,
  },
  {
    title: "AI Web Integration",
    desc: "Seamless AI integration into websites, dashboards, and digital platforms.",
    img: Ai_Web_Intergration_Pic,
  },
];

const Landingservice = () => {

  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto py-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className=" text-4xl font-bold  text-orange-400 mb-2">OUR SERVICES</h2>
        <p className="mt-2 max-w-2xl mx-auto text-black">
          We provide intelligent digital solutions that combine design,
          development, e-commerce, and AI automation.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="card bg-white shadow-lg transition-all duration-300
                       hover:-translate-y-1 hover:shadow-xl"
          >
            <figure className="bg-white p-3">
              <img
                src={service.img}
                alt={service.title}
                className="w-full max-h-36 object-contain
                           transition-transform duration-300 hover:scale-105"
              />
            </figure>

            <div className="card-body bg-white p-5">
              <h3 className="card-title text-black font-bold  text-lg">
                {service.title}
              </h3>

              <p className="text-black leading-relaxed text-sm " >
                {service.desc}
              </p>

              <div className="card-actions justify-end mt-3">
                <button
                  onClick={() => navigate(service.path)}
                  className="btn btn-sm btn-outline text-orange-400 hover:bg-green-300">

                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Landingservice;
