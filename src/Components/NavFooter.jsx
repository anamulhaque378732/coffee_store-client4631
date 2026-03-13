import awesomeAroma from "../assets/icons/awesomeAroma.png";
import highQuality from "../assets/icons/highQuality.png";
import pureGrades from "../assets/icons/pureGrades.png";
import properRoasting from "../assets/icons/properRoasting.png";

const NavFooter = () => {
  return (
    <div className="grid grid-cols-2   my-2 lg:my-5  md:grid-cols-4 gap-5 justify-between lg:px-20">
      <div>
        <img src={awesomeAroma} alt="" />
        <h1 className="text-2xl font-medium py-2"> Awesome Aroma </h1>
        <p className="py-2">
          You will definitely be a fan of the design & aroma of your coffee
        </p>
      </div>
      <div>
        <img src={highQuality} alt="" />
        <h1 className="text-2xl font-medium py-2"> High Quality</h1>
        <p className="py-2">
          We served the coffee to you maintaining the best quality
        </p>
      </div>
      <div>
        <img src={pureGrades} alt="" />
        <h1 className="text-2xl font-medium py-2"> Pure Grades </h1>
        <p className="py-2">
          The coffee is made of the green coffee beans which you will love
        </p>
      </div>
      <div>
        <img src={properRoasting} alt="" />
        <h1 className="text-2xl font-medium py-2"> Proper Roasting </h1>
        <p className="py-2">
          Your coffee is brewed by first roasting the green coffee beans
        </p>
      </div>
    </div>
  );
};

export default NavFooter;
