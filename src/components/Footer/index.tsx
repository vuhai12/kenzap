import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-20 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">DevPlatform</h2>
          <p className="text-sm leading-6">
            Build modern, fast and scalable websites with our powerful tools.
            Designed for developers and startups who want to launch products
            quickly.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Product</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="hover:text-purple-600 transition" to="#">
              Features
            </Link>
            <Link className="hover:text-purple-600 transition" to="#">
              Pricing
            </Link>
            <Link className="hover:text-purple-600 transition" to="#">
              Integrations
            </Link>
            <Link className="hover:text-purple-600 transition" to="#">
              Roadmap
            </Link>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Resources</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="hover:text-purple-600 transition" to="#">
              Documentation
            </Link>
            <Link className="hover:text-purple-600 transition" to="#">
              Blog
            </Link>
            <Link className="hover:text-purple-600 transition" to="#">
              Tutorials
            </Link>
            <Link className="hover:text-purple-600 transition" to="#">
              Support
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-900">Contact</h3>
          <p className="text-sm">Email: hello@devplatform.io</p>
          <p className="text-sm">Phone: +1 (555) 123-4567</p>
          <p className="text-sm">Location: San Francisco, CA</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 py-6 text-center text-sm text-gray-600">
        © 2026 DevPlatform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
