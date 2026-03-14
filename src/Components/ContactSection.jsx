import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/more/logo1.png";

const ContactSection = () => {
  return (
    <div className="bg-base-200 lg:pt-16 px-6 lg:py-12 md:py-6 py-3">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="logo" className="w-12" />
            <h2 className="text-3xl font-bold">Espresso Emporium</h2>
          </div>

          <p className="text-sm mb-6 text-gray-600">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl mb-6">
            <FaFacebookF className="cursor-pointer hover:text-primary" />
            <FaTwitter className="cursor-pointer hover:text-primary" />
            <FaInstagram className="cursor-pointer hover:text-primary" />
            <FaLinkedinIn className="cursor-pointer hover:text-primary" />
          </div>

          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +88 01533 333 333
            </p>

            <p className="flex items-center gap-2">
              <FaEnvelope /> info@gmail.com
            </p>

            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> 72, Wall street, King Road, Dhaka
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Connect with Us</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />

            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />

            <textarea
              placeholder="Message"
              className="textarea textarea-bordered w-full h-32"
            ></textarea>

            <button className="btn btn-outline btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
