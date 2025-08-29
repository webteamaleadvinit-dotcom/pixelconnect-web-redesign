import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../Assets/PixelConnectLogo.jpeg"
export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-900 text-white pt-14 mt-14">


      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Company Info with Logo */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            {/* If logo is inside public/ */}
            <img src={Logo} alt="Pixcel Connect Logo" className="h-10 w-auto" />
          </div>
          <p className="text-sm leading-relaxed text-white">
            Where creativity meets code. We are a modern creative & technical
            freelancing agency built by emerging talent, delivering exceptional
            results for businesses worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white/80 transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-white/80 transition-colors">Services</Link></li>
            <li><Link to="/our-work" className="hover:text-white/80 transition-colors">Our Work</Link></li>
            <li><Link to="/contact" className="hover:text-white/80 transition-colors">Contact</Link></li>
            <li><Link to="/career" className="hover:text-white/80 transition-colors">Career</Link></li>
            <li><Link to="/verify-certificate" className="hover:text-white/80 transition-colors">Verify Certificate</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Resources</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white/80 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white/80 transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white/80 transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Follow Us</h2>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/40 no-underline">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/40 no-underline">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/40 no-underline">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/40 no-underline">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-sm text-white/60 border-t border-white/30 pt-6">
        © 2025 Pixcel Connect. All rights reserved.
      </div>
    </footer>
  );
}
