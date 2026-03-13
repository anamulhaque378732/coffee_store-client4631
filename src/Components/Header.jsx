import cupIcon from "../assets/more/logo1.png";
import bgImage from "../assets/more/headerBg.jpg";
const Header = () => {
  return (
    <div
      className="flex  py-2 justify-center gap-4 items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <img className="w-12" src={cupIcon} alt="" />
      <h1 className="text-3xl font-bold text-center"> Espresso Emporium</h1>
    </div>
  );
};

export default Header;
