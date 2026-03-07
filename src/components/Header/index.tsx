import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

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
        className={`w-full z-50 transition-all duration-300 ${
          isHome
            ? "absolute text-white"
            : "sticky top-0 bg-[#0f172a]/90 backdrop-blur-md shadow-md text-white"
        }`}
      >
        <div className="container h-[70px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-[30px] font-bold tracking-wide">
            KENZAP
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 uppercase text-[14px] font-semibold">
            {menu.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#5cc35c] transition duration-300"
                    : "hover:text-[#5cc35c] transition duration-300"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Get Quote Button */}
          <button
            onClick={() => setLoginOpen(true)}
            className="hidden md:block border border-white px-5 py-2 rounded-lg font-semibold transition hover:bg-white hover:text-[#0f172a] cursor-pointer"
          >
            Get Quote
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-3xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-[#0f172a] border-t border-white/20">
            <div className="flex flex-col items-center gap-6 py-6 uppercase text-[14px] font-semibold">
              {menu.map((item) => (
                <Link key={item.name} to={item.path}>
                  {item.name}
                </Link>
              ))}

              <button
                onClick={() => setLoginOpen(true)}
                className="bg-[#5cc35c] px-6 py-2 rounded-lg cursor-pointer"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </header>

      {/* LOGIN MODAL */}
      {loginOpen && (
        <div
          onClick={() => setLoginOpen(false)}
          className="fixed  inset-0 z-[100] flex items-center justify-center bg-black/60 "
        >
          <Login
            onClose={() => setLoginOpen(false)}
            onOpenRegister={() => {
              setLoginOpen(false);
              setRegisterOpen(true);
            }}
          />
        </div>
      )}
      {registerOpen && (
        <div
          onClick={() => setRegisterOpen(false)}
          className="fixed  inset-0 z-[100] flex items-center justify-center bg-black/60 "
        >
          <Register onClose={() => setRegisterOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Header;
