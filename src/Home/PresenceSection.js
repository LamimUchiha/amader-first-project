import facebook from "../images/facebook.jpg";
import linkedin from "../images/linkedin.jpg";
import github from "../images/github.jpg";
import fiverr from "../images/fiverr.jpg";
import upwork from "../images/upwork.jpg";

const platforms = [
  { name: "Facebook", img: facebook, link: "https://facebook.com/yourpage" },
  { name: "LinkedIn", img: linkedin, link: "https://linkedin.com/in/yourprofile" },
  { name: "GitHub", img: github, link: "https://github.com/yourusername" },
  { name: "Fiverr", img: fiverr, link: "https://www.fiverr.com/yourusername" },
  { name: "Upwork", img: upwork, link: "https://www.upwork.com/freelancers/~yourid" },
];

const PresenceSection = () => {
  return (
    <>
      {/* CSS */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .marquee {
            animation: marquee 25s linear infinite;
          }

          .marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-widest text-black mb-12">
            WE ARE IN
          </h2>

          {/* VISIBLE AREA (4 ICONS WIDTH) */}
          <div className="relative mx-auto overflow-hidden w-[360px] sm:w-[440px]">
            {/* Animated Row */}
            <div className="marquee flex items-center gap-10 w-max">
              {[...platforms, ...platforms].map((platform, index) => (
                <a
                  key={index}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform.name}
                  className="group"
                >
                  <div
                    className="w-20 h-20 rounded-full border border-gray-200
                    flex items-center justify-center
                    shadow-sm transition-all duration-300
                    hover:shadow-lg hover:-translate-y-1"
                  >
                    <img
                      src={platform.img}
                      alt={platform.name}
                      className="w-10 h-10 object-contain
                      transition-transform duration-300
                      group-hover:scale-110"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PresenceSection;
