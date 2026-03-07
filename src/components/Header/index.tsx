import Login from "@/pages/Login";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <>
      <header
        className={`w-full text-white absolute z-50 transition ${
          !isHome ? "bg-purple-600/90 backdrop-blur-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-[30px] font-bold">
            KENZAP
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 uppercase text-[14px] font-semibold">
            {menu.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-[#5cc35c] transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Get Quote Button */}
          <button
            onClick={() => setLoginOpen(true)}
            className="hidden md:block border border-white px-5 py-2 rounded font-semibold transition hover:bg-white hover:text-purple-700"
          >
            Get Quote
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-[#013c74] border-t border-white/20">
            <div className="flex flex-col items-center gap-6 py-6 uppercase text-[14px] font-semibold">
              {menu.map((item) => (
                <Link key={item.name} to={item.path}>
                  {item.name}
                </Link>
              ))}

              <button
                onClick={() => setLoginOpen(true)}
                className="bg-[#5cc35c] px-6 py-2 rounded"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </header>

      {/* LOGIN MODAL */}
      {loginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-none">
          <Login onClose={() => setLoginOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Header;
