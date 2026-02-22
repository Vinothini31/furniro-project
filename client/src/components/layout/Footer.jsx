import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo + Address */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Funiro.</h2>
          <p className="text-gray-500 leading-7 text-sm">
            400 University Drive Suite 200 <br />
            Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-gray-400 font-semibold mb-6 uppercase text-sm">
            Links
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li>
              <Link to="/" className="hover:text-yellow-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-yellow-600 transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-gray-400 font-semibold mb-6 uppercase text-sm">
            Help
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="hover:text-yellow-600 transition cursor-pointer">
              Payment Options
            </li>
            <li className="hover:text-yellow-600 transition cursor-pointer">
              Returns
            </li>
            <li className="hover:text-yellow-600 transition cursor-pointer">
              Privacy Policies
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-gray-400 font-semibold mb-6 uppercase text-sm">
            Newsletter
          </h3>

          <form className="flex items-center border-b border-gray-400 pb-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 outline-none text-sm placeholder-gray-400"
            />
            <button
              type="submit"
              className="text-sm font-semibold hover:text-yellow-600 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
        2026 Funiro. All rights reserved
      </div>
    </footer>
  )
}
