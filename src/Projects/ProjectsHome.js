import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "AI Business Automation Dashboard",
    shortDesc:
      "An intelligent dashboard that automates workflows and business analytics.",
    fullDesc:
      "This project includes AI-powered workflow automation, real-time analytics, role-based access, and seamless API integrations. Built for scalability and performance with a clean UI/UX approach tailored for enterprise users.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    id: 2,
    title: "E-Commerce Conversion Platform",
    shortDesc:
      "A conversion-focused e-commerce system optimized for sales growth.",
    fullDesc:
      "Includes optimized product listings, checkout flow improvements, SEO optimization, payment gateway integration, and admin dashboards. Designed to maximize conversion rate and user trust.",
    image:
      "https://images.unsplash.com/photo-1515169067865-5387ec356754",
  },
  {
    id: 3,
    title: "Modern Agency Website",
    shortDesc:
      "A high-end, animated website built for branding and authority.",
    fullDesc:
      "This project focuses on modern UI animations, smooth transitions, SEO-friendly structure, and performance optimization. Built with React, Tailwind CSS, and DaisyUI.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

const ProjectsHome= () => {
  const [activeId, setActiveId] = useState(null);

  const toggleProject = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-black">
          Our <span className="text-orange-500">Projects</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          A selection of work that reflects our expertise, innovation,
          and commitment to quality.
        </p>
      </div>

      {/* Project Cards */}
      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => toggleProject(project.id)}
            className="
              cursor-pointer
              bg-white rounded-2xl "
          >
            {/* Main Row */}
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-1/3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-black mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.shortDesc}
                </p>

                <span className="mt-4 text-sm text-orange-500 font-medium">
                  Click to view details →
                </span>
              </div>
            </div>

            {/* Expandable Section */}
            <div
              className={`
                px-8 pb-8 text-gray-700
                transition-all duration-500 ease-in-out
                ${
                  activeId === project.id
                    ? "max-h-[500px] opacity-100 mt-4"
                    : "max-h-0 opacity-0 overflow-hidden"
                }
              `}
            >
              <div className="border-t pt-6">
                <h4 className="font-semibold text-black mb-2">
                  Project Details
                </h4>
                <p className="leading-relaxed">
                  {project.fullDesc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsHome;

