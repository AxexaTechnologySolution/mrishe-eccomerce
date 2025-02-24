// Footer.jsx  
import { Link } from 'react-router-dom';  
import { Facebook, Instagram, Twitter } from 'lucide-react';  

export default function Footer() {  
  return (  
    <footer className="bg-gray-900 text-gray-300">  
      <div className="max-w-7xl mx-auto px-4 py-12">  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">  
          {/* Brand Section */}  
          <div className="space-y-4">  
            <h2 className="text-2xl font-bold text-white">DressShop</h2>  
            <p className="text-sm">  
              Your one-stop destination for trendy fashion and accessories.  
              Discover the latest styles and express your unique personality.  
            </p>  
            <div className="flex space-x-4">  
              <a href="#" className="hover:text-white transition-colors">  
                <Facebook className="w-5 h-5" />  
              </a>  
              <a href="#" className="hover:text-white transition-colors">  
                <Instagram className="w-5 h-5" />  
              </a>  
              <a href="#" className="hover:text-white transition-colors">  
                <Twitter className="w-5 h-5" />  
              </a>  
            </div>  
          </div>  

          {/* Quick Links */}  
          <div>  
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>  
            <ul className="space-y-2">  
              <li>  
                <Link to="/shop" className="hover:text-white transition-colors">  
                  Shop  
                </Link>  
              </li>  
              <li>  
                <Link to="/about" className="hover:text-white transition-colors">  
                  About Us  
                </Link>  
              </li>  
              <li>  
                <Link to="/contact" className="hover:text-white transition-colors">  
                  Contact  
                </Link>  
              </li>  
              <li>  
              <Link to="/blog" className="hover:text-white transition-colors">  
                  Blog  
                </Link>  
              </li>  
            </ul>  
          </div>  

          {/* Customer Service */}  
          <div>  
            <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>  
            <ul className="space-y-2">  
              <li>  
                <Link to="/faq" className="hover:text-white transition-colors">  
                  FAQ  
                </Link>  
              </li>  
              <li>  
                <Link to="/shipping" className="hover:text-white transition-colors">  
                  Shipping Information  
                </Link>  
              </li>  
              <li>  
                <Link to="/returns" className="hover:text-white transition-colors">  
                  Returns & Exchanges  
                </Link>  
              </li>  
              <li>  
                <Link to="/size-guide" className="hover:text-white transition-colors">  
                  Size Guide  
                </Link>  
              </li>  
            </ul>  
          </div>  

          {/* Newsletter */}  
          <div>  
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>  
            <p className="text-sm mb-4">  
              Subscribe to our newsletter and get 10% off your first purchase.  
            </p>  
            <form className="space-y-2">  
              <input  
                type="email"  
                placeholder="Your email address"  
                className="w-full px-4 py-2 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:border-pink-500"  
              />  
              <button  
                type="submit"  
                className="w-full bg-pink-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-pink-700 transition-colors"  
              >  
                Subscribe  
              </button>  
            </form>  
          </div>  
        </div>  

        {/* Bottom Bar */}  
        <div className="border-t border-gray-800 mt-12 pt-8">  
          <div className="flex flex-col md:flex-row justify-between items-center">  
            <p className="text-sm">  
              © {new Date().getFullYear()} DressShop. All rights reserved.  
            </p>  
            <div className="flex space-x-6 mt-4 md:mt-0">  
              <Link to="/privacy" className="text-sm hover:text-white transition-colors">  
                Privacy Policy  
              </Link>  
              <Link to="/terms" className="text-sm hover:text-white transition-colors">  
                Terms of Service  
              </Link>  
            </div>  
          </div>  
        </div>  
      </div>  
    </footer>  
  );  
}