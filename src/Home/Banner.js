import banner from "../images/image banner.png";

const Banner = () => {
  return (
    <div className="hero bg-slate min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">

        {/* Image */}
        <img
          src={banner}
          alt="Neuravixor Services Banner"
          className="w-full max-w-xl sm:max-w-l rounded-lg "
        />

        {/* Text */}
        <div className="text-center lg:text-left">
          <h1 className=" sm:text-4xl lg:text-5xl font-bold leading-tight">
          
            <span className="block text-black text-7xl font-serif ">
              Building Smart Digital Solutions
            </span>
        
            <span className="block text-orange-400">
              with Web, AI & Design
            </span>
          </h1>

          <p className="py-6 text-base sm:text-lg text-black  ">
            We help businesses grow with modern web development, intelligent AI
            solutions, and visually stunning graphic design. From idea to
            execution — we turn concepts into powerful digital experiences.
          </p>

          <button className="btn bg-green-400 hover: bg-green-400">
            Let’s Work Together
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;
