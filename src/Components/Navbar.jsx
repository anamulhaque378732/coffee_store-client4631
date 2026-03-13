import bgNav from "../assets/more/BgNav.png";

const Navbar = () => {
  return (
    <>
      <div className="hero " style={{ backgroundImage: `url(${bgNav})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md   lg:py-12 md:py-6 my-2 py-2 lg:my-32 md:my-16 md:ml-20 ml-2">
            <h1 className="mb-5 text-4xl font-bold">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn btn-primary ">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
