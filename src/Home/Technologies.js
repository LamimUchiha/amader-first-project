import html from "../images/Code Logos/Html.jpg";
import css from "../images/Code Logos/Css.jpg";
import javascript from "../images/Code Logos/Javascript.jpg";
import react from "../images/Code Logos/React.jpg";
import tailwind from "../images/Code Logos/Tailwind.jpg";
import node from "../images/Code Logos/Node_js Logo PNG Vector (SVG) Free Download.jpg";
import python from "../images/Code Logos/python logo.jpg";

// Optional extra images per tech (can reuse same for now)
const technologies = [
  { name: "HTML", img: html, previews: [html, html] },
  { name: "CSS", img: css, previews: [css, css] },
  { name: "JavaScript", img: javascript, previews: [javascript, javascript] },
  { name: "React", img: react, previews: [react, react] },
  { name: "Tailwind CSS", img: tailwind, previews: [tailwind, tailwind] },
  { name: "Node.js", img: node, previews: [node, node] },
  { name: "Python", img: python, previews: [python, python] },
];

const TechnologiesSection = () => {
  return (
    <>
      {/* CSS */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .marquee {
            animation: marquee 30s linear infinite;
          }

          .marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-widest text-black mb-16">
            TECHNOLOGIES WE USE
          </h2>

          {/* Wider visible area */}
          <div className="relative mx-auto overflow-hidden w-full">
            {/* Animated Row */}
            <div className="marquee flex items-center gap-16 w-max px-10">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center"
                >
                  {/* Main Icon */}
                  <div
                    className="
                      w-48 h-28 rounded-xl bg-white
                      flex items-center justify-center
                     
                      transition-all duration-300
                      
                    "
                  >
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="
                        w-16 h-16 object-contain
                        transition-transform duration-300
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Hover Reveal Images */}
                  <div
                    className="
                      absolute top-full mt-4
                      flex gap-3
                      opacity-0 scale-95
                      pointer-events-none
                      transition-all duration-300
                      
                    "
                  >
                    {tech.previews.map((preview, i) => (
                      <div
                        key={i}
                        className="
                          w-20 h-14 rounded-md bg-white
                          shadow-md
                          flex items-center justify-center
                        "
                      >
                        <img
                          src={preview}
                          alt={`${tech.name} preview`}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Label */}
                  <span className=" text-sm font-medium text-gray-700">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologiesSection;
