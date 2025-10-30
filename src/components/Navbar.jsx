// Navbar.jsx
import { useState } from "react";
import logoImg from "../img/logo/logo.png";
import BuyTicket from "./BuyTicket.jsx";
import LoginModal from "./LoginModal.jsx";
import { useAuth } from "./AuthContext.jsx";

const linkClass =
  "text-gray-300 hover:text-white hover:border-b-amber-300 hover:border-b-1 px-4 py-2 transition-colors duration-200 font-medium";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { auth, logout } = useAuth();

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="#">
          <img src={logoImg} alt="logo" className="h-6" />
        </a>

        {/* Hamburger dugme — prikazuje se SAMO na mobile */}
        <button
          className="text-white text-3xl lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop links — skrivamo na mobile (hidden lg:flex) */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#home" className={linkClass}>
            Home
          </a>
          <a href="#about" className={linkClass}>
            About
          </a>
          <a href="#speakers" className={linkClass}>
            Speakers
          </a>
          <a href="#schedule" className={linkClass}>
            Schedule
          </a>
          <BuyTicket className="px-4 py-2">Buy tickets</BuyTicket>
          {!auth ? (
            <button
              className="text-gray-300 hover:text-white hover:border-b-(--primary-color) hover:border-b px-4 py-2 transition-colors duration-200 font-medium"
              onClick={() => setIsLoginOpen(true)}
            >
              Login
            </button>
          ) : (
            <button
              className="text-gray-300 hover:text-white hover:border-b-(--primary-color) hover:border-b px-4 py-2 transition-colors duration-200 font-medium"
              onClick={logout}
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* Mobile meni — pojavi se kad je hamburger otvoren */}
      {isOpen && (
        <div className="lg:hidden bg-[#0b0016]/95 backdrop-blur-md py-4 transition-all">
          <div className="flex flex-col items-center space-y-4 pb-4">
            <a href="#home" className={linkClass}>
              Home
            </a>
            <a href="#about" className={linkClass}>
              About
            </a>
            <a href="#speakers" className={linkClass}>
              Speakers
            </a>
            <a href="#schedule" className={linkClass}>
              Schedule
            </a>
            <BuyTicket className="px-4 py-2">Buy tickets</BuyTicket>
            {!auth ? (
              <button
                className="text-gray-300 hover:text-white hover:border-b-(--primary-color) hover:border-b px-4 py-2 transition-colors duration-200 font-medium"
                onClick={() => setIsLoginOpen(true)}
              >
                Login
              </button>
            ) : (
              <button
                className="text-gray-300 hover:text-white hover:border-b-(--primary-color) hover:border-b px-4 py-2 transition-colors duration-200 font-medium"
                onClick={logout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
    </header>
  );
}
