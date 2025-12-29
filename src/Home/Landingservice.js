import Web_Developement_Pic from "../images/Web Developer Pic.jpg";
import Graphics_Design_Pic from "../images/Graphics Design Pic .jpg";

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
    img: "https://img.daisyui.com/images/stock/photo-1556740749-887f6717d7e4.webp",
  },
  {
    title: "AI Automation",
    desc: "Workflow automation using AI to reduce manual work and increase operational efficiency.",
    img: "https://img.daisyui.com/images/stock/photo-1535378917042-10a22c95931a.webp",
  },
  {
    title: "Custom AI Models",
    desc: "Business-specific AI models designed for analysis, intelligence, and decision support.",
    img: "https://img.daisyui.com/images/stock/photo-1504384308090-c894fdcc538d.webp",
  },
  {
    title: "AI Web Integration",
    desc: "Seamless AI integration into websites, dashboards, and digital platforms.",
    img: "https://img.daisyui.com/images/stock/photo-1498050108023-c5249f4df085.webp",
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
              <h3 className="card-title text-orange-400  text-lg">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed ">
                {service.desc}
              </p>

              <div className="card-actions justify-end mt-3">
                <button className="btn btn-sm btn-outline btn-primary">
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
