import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">PixelConnect</h2>
          <p className="text-sm mb-4">
            Where creativity meets code. We're a modern creative & technical
            freelancing agency built by emerging talent, delivering exceptional
            results for businesses worldwide.
          </p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">📍 Pune, India</p>
        </div>

        {/* Quick Links (clickable with React Router) */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/our-work" className="hover:underline">Our Work</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/career" className="hover:underline">Career</Link></li>
            <li><Link to="/verify-certificate" className="hover:underline">Verify Certificate</Link></li>
          </ul>
        </div>

        {/* Resources (NOT duplicate of quick links anymore) */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Resources</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Case Studies</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-300">
        © 2025 PixelConnect. All rights reserved.
      </div>
    </footer>
  );
}
