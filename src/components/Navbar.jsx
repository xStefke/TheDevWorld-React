// Navbar.jsx
import { useState } from "react";
import logoImg from "../img/logo/logo.png";
import BuyTicket from "./BuyTicket.jsx";
import LoginModal from "./LoginModal.jsx";
import { useAuth } from "./AuthContext.jsx";
import {User, UserIcon} from "lucide-react";

const linkClass =
  "text-gray-300 hover:text-white hover:border-b-amber-300 hover:border-b-1 px-4 py-2 transition-colors duration-200 font-medium";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { auth, logout } = useAuth();
  const [userMenuOpen,setUserMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-20 w-full bg-transparent">
      <nav className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="#">
          <img src={logoImg} alt="logo" className="h-6" />
        </a>

        {/* Hamburger dugme — prikazuje se SAMO na mobile */}
        <button
          className="text-3xl text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop links — skrivamo na mobile (hidden lg:flex) */}
        <div className="items-center hidden space-x-6 lg:flex">
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
          {auth ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="px-3 py-2 text-gray-300 rounded-full hover:text-white"
              >
                <UserIcon className="w-5 h-5"/>
              </button>
              {userMenuOpen && (<div className="absolute right-0 mt-2 w-32 bg-[#120426] border border-purple-500/20 rounded-lg shadow-lg py-2 text-white z-50">
                  <button
                    onClick={() => { logout(); setUserMenuOpen(false); }}
                    className="w-full px-4 py-2 text-left hover:bg-purple-700/50"
                  >
                    Logout
                  </button>
                </div>)}
            </div>
          ) : (
            <button
              className="text-gray-300 hover:text-white hover:border-b-(--primary-color) hover:border-b px-4 py-2 transition-colors duration-200 font-medium"
              onClick={() => setIsLoginOpen(true)}
            >
              Login
            </button>
          )}
        </div>
      </nav>

      {/* Mobile meni — pojavi se kad je hamburger otvoren */}
      {isOpen && (
        <div className="lg:hidden bg-[#0b0016]/95 backdrop-blur-md py-4 transition-all">
          <div className="flex flex-col items-center pb-4 space-y-4">
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
