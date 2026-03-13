import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import error from "../assets/404/error.gif";
const ErrorElement = () => {
  return (
    <div>
      <Link to="/">
        <button className="flex btn gap-2">
          <FaArrowLeft className="mt-1" /> Back to home
        </button>
      </Link>
      <img src={error} alt="" />
    </div>
  );
};

export default ErrorElement;
