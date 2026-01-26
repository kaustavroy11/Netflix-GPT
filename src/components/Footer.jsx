import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 py-12 w-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-6 text-white text-xl mb-8">
          <FaFacebookF className="cursor-pointer hover:text-gray-400 transition" />
          <FaInstagram className="cursor-pointer hover:text-gray-400 transition" />
          <FaTwitter className="cursor-pointer hover:text-gray-400 transition" />
          <FaYoutube className="cursor-pointer hover:text-gray-400 transition" />
        </div>
        <div className="flex flex-wrap justify-between gap-8 text-sm">
          <div className="flex flex-col gap-2 min-w-37.5">
            <span className="hover:underline cursor-pointer">
              Audio Description
            </span>
            <span className="hover:underline cursor-pointer">
              Investor Relations
            </span>
            <span className="hover:underline cursor-pointer">
              Legal Notices
            </span>
          </div>

          <div className="flex flex-col gap-2 min-w-37.5">
            <span className="hover:underline cursor-pointer">Help Centre</span>
            <span className="hover:underline cursor-pointer">Jobs</span>
            <span className="hover:underline cursor-pointer">
              Cookie Preferences
            </span>
          </div>

          <div className="flex flex-col gap-2 min-w-37.5">
            <span className="hover:underline cursor-pointer">Gift Cards</span>
            <span className="hover:underline cursor-pointer">Terms of Use</span>
            <span className="hover:underline cursor-pointer">
              Corporate Information
            </span>
          </div>

          <div className="flex flex-col gap-2 min-w-37.5">
            <span className="hover:underline cursor-pointer">Media Centre</span>
            <span className="hover:underline cursor-pointer">Privacy</span>
            <span className="hover:underline cursor-pointer">Contact Us</span>
          </div>
        </div>

        <p className="mt-10 text-xs text-gray-500">© 1997-2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
