// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/navLogo.png";
import menu from "../assets/menu_icon_dark.svg";
import closeIcon from "../assets/cross_icon.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* LOGO */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src={logo}
                alt="Logo"
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? "h-12" : "h-16"
                }`}
              />
            </div>

            {/* DESKTOP MENU */}
            <ul
              className={`hidden lg:flex items-center gap-10 text-lg transition-all duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline"
                    : "hover:text-blue-500 transition"
                }
              >
                Home
              </NavLink>

              {/* PACKAGES DROPDOWN */}
              <div className="relative group">
  <button
    className="flex items-center gap-2 hover:text-blue-500 transition"
  >
    Packages
    <span className="text-xs">▼</span>
  </button>

  <div
    className="
      absolute top-full left-0
      pt-2
      w-60
      opacity-0 invisible
      group-hover:opacity-100
      group-hover:visible
      transition-all duration-200
    "
  >
    <div className="bg-white rounded-xl shadow-xl border py-2 text-gray-800">
      <NavLink
        to="/packages"
        className="block px-5 py-3 hover:bg-gray-100"
      >
        All Packages
      </NavLink>

      <NavLink
        to="/packages/rinjani-trekking"
        className="block px-5 py-3 hover:bg-gray-100"
      >
        Rinjani Trekking
      </NavLink>

      <NavLink
        to="/packages/lombok-destination"
        className="block px-5 py-3 hover:bg-gray-100"
      >
        Lombok Destination
      </NavLink>

      <NavLink
        to="/packages/labuan-bajo"
        className="block px-5 py-3 hover:bg-gray-100"
      >
        Labuan Bajo
      </NavLink>
    </div>
  </div>
</div>

              <NavLink
                to="/cara-daftar"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline"
                    : "hover:text-blue-500 transition"
                }
              >
                Payment
              </NavLink>

              <NavLink
                to="/galery"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline"
                    : "hover:text-blue-500 transition"
                }
              >
                Contact
              </NavLink>
            </ul>

            {/* DESKTOP BUTTON */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => navigate("/admin/login")}
                className={`px-5 py-2 rounded-full transition ${
                  isScrolled
                    ? "border border-blue-500 text-blue-600 hover:bg-blue-50"
                    : "border border-white text-white hover:bg-white hover:text-black"
                }`}
              >
                Login
              </button>

              <button
                onClick={() => navigate("/cara-daftar")}
                className={`px-6 py-2 rounded-full transition ${
                  isScrolled
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-white text-green-600 hover:bg-gray-100"
                }`}
              >
                WhatsApp
              </button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden"
              onClick={() => setShowMobileMenu(true)}
            >
              <img
                src={menu}
                alt="Menu"
                className={`w-8 h-8 transition ${
                  isScrolled ? "" : "brightness-0 invert"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          showMobileMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      />

      {/* MOBILE SIDEBAR */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-50 transition-transform duration-300 ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button onClick={closeMobileMenu}>
              <img
                src={closeIcon}
                alt="Close"
                className="w-6 h-6"
              />
            </button>
          </div>

          <ul className="flex flex-col gap-6 text-lg font-medium text-gray-800">
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className="hover:text-blue-600"
            >
              Home
            </NavLink>

            {/* MOBILE PACKAGES */}
            <div>
              <h4 className="font-semibold mb-3">
                Packages
              </h4>

              <div className="flex flex-col gap-3 pl-4 text-base">
                <NavLink
                  to="/packages"
                  onClick={closeMobileMenu}
                  className="hover:text-blue-600"
                >
                  All Packages
                </NavLink>

                <NavLink
                  to="/packages/rinjani-trekking"
                  onClick={closeMobileMenu}
                  className="hover:text-blue-600"
                >
                  Rinjani Trekking
                </NavLink>

                <NavLink
                  to="/packages/lombok-destination"
                  onClick={closeMobileMenu}
                  className="hover:text-blue-600"
                >
                  Lombok Destination
                </NavLink>

                <NavLink
                  to="/packages/labuan-bajo"
                  onClick={closeMobileMenu}
                  className="hover:text-blue-600"
                >
                  Labuan Bajo
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/cara-daftar"
              onClick={closeMobileMenu}
              className="hover:text-blue-600"
            >
              Payment
            </NavLink>

            <NavLink
              to="/galery"
              onClick={closeMobileMenu}
              className="hover:text-blue-600"
            >
              Contact
            </NavLink>

            <button
              onClick={() => {
                closeMobileMenu();
                navigate("/admin/login");
              }}
              className="mt-4 border border-blue-500 text-blue-600 py-3 rounded-full hover:bg-blue-50 transition"
            >
              Login Admin
            </button>

            <button
              onClick={() => {
                closeMobileMenu();
                navigate("/cara-daftar");
              }}
              className="bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition"
            >
              WhatsApp
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;