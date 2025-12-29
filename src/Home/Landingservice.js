import Web_Developement_Pic from "../images/Web Developer Pic.jpg";
import Graphics_Design_Pic from "../images/Graphics Design Pic .jpg";
import E_Commerce_Pic from "../images/E Commerce.jpg"
import Ai_Automation_Pic from "../images/AI Automation.jpg"
import Custom_AI_Models_Pic from "../images/Custom AI Models.png"
import Ai_Web_Intergration_Pic from "../images/AI Web Integration.png"

const services = [
  {
    title: "Web Development",
    desc: "High-performance websites, landing pages, and business platforms built with modern technologies.",
    img: Web_Developement_Pic,
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
    img: Ai_Automation_Pic ,
  },
  {
    title: "Custom AI Models",
    desc: "Business-specific AI models designed for analysis, intelligence, and decision support.",
    img: Custom_AI_Models_Pic ,
  },
  {
    title: "AI Web Integration",
    desc: "Seamless AI integration into websites, dashboards, and digital platforms.",
    img:  Ai_Web_Intergration_Pic ,
  },
];

const Landingservice = () => {
  return (
    <section className="max-w-7xl mx-auto py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className=" text-5xl font-bold  text-black mb-12">OUR SERVICES</h2>
        <p className="mt-3 max-w-2xl mx-auto text-black">
          We provide intelligent digital solutions that combine design,
          development, e-commerce, and AI automation.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="card bg-slate-50 shadow-lg transition-all duration-300
                       hover:-translate-y-1 hover:shadow-xl"
          >
            <figure className="bg-slate-50 p-3">
              <img
                src={service.img}
                alt={service.title}
                className="w-full max-h-36 object-contain
                           transition-transform duration-300 hover:scale-105"
              />
            </figure>

            <div className="card-body bg-slate-50 p-5">
              <h3 className="card-title text-black font-bold  text-lg">
                {service.title}
              </h3>

              <p className="text-black leading-relaxed text-sm " >
                {service.desc}
              </p>

              <div className="card-actions justify-end mt-3">
                <button className="btn btn-sm btn-outline text-orange-400 hover:bg-green-300">
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
