import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-neutral-black text-neutral-White py-10 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Column - Logo and Social Media */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <img src="/logo.png" alt="Company Logo" className="h-8 w-auto" />
            <span className="text-xl font-semibold">Nexcent</span>
          </div>

          <p className="text-sm">&copy; Copyright Nexcent ltd.</p>
          <p className="text-sm">All rights reserved.</p>
          <div className="flex space-x-4 pt-5">
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
            <FaTwitter className="hover:text-gray-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Column 1 */}
        <div className="flex flex-col space-y-2 gap-6">
          <h3 className="text-lg text-neutral-White font-semibold">Company</h3>
          <div className="flex flex-col space-y-2 font-normal text-sm text-neutral-Silver">
            <a href="#">About us</a>
            <a href="#">Blog</a>
            <a href="#">Contact us</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials</a>
          </div>
        </div>

        {/* Column 2 */}

        <div className="flex flex-col space-y-2 gap-6">
          <h3 className="text-lg text-neutral-White font-semibold">Support</h3>
          <div className="flex flex-col space-y-2 font-normal text-sm text-neutral-Silver">
            <a href="#">Help center</a>
            <a href="#">Terms of service</a>
            <a href="#">Legal</a>
            <a href="#">Privacy policy</a>
            <a href="#">Status</a>
          </div>
        </div>

        {/* Column 3 - Email Subscription */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold">Stay up to date</h3>
          {/* <p className="text-sm">
            Subscribe to our newsletter to receive updates.
          </p> */}
          <div className="flex items-center relative">
            <input
              type="email"
              placeholder="Your email address"
              className="text-sm rounded flex-grow p-2 pr-2 text-neutral-White bg-neutral-D_Grey focus:outline-none"
            />
            <button className="absolute right-1 md:-right-4 lg:right-2 text-neutral-White">
              <FiSend className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
