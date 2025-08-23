import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">PixelConnect</h2>
          <p className="mb-2">📧 support@pixelconnect.com</p>
          <p className="mb-2">📞 +91 98765 43210</p>
          <p className="mb-2">📍 Pune, India</p>
          <p>📸 Instagram: 
            <a 
              href="https://instagram.com/pixelconnect.agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline ml-1"
            >
              @pixelconnect.agency
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#services" className="hover:text-blue-600">Services</a></li>
            <li><a href="#why-us" className="hover:text-blue-600">Why Choose Us</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Resources</h2>
          <ul className="space-y-2">
            <li><a href="#blog" className="hover:text-blue-600">Blog</a></li>
            <li><a href="#faqs" className="hover:text-blue-600">FAQs</a></li>
            <li><a href="#privacy" className="hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-blue-600">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h2>
          <div className="flex space-x-5 text-gray-600">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-xl">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-xl">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-xl">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com/pixelconnect.agency" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-300 text-center pt-4 text-sm text-gray-500">
        © {new Date().getFullYear()} PixelConnect. All rights reserved.
      </div>
    </footer>
  );
}
