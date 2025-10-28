// src/components/Footer.jsx

import {Twitter, Facebook, Instagram, Linkedin, Mail} from "lucide-react";
import SocialIcon from "./SocialIcon";
import logoImg from "../img/logo/logo.png";
const usefulLinks = [
    { label: "Home", href: "#home" },
    { label: "About us", href: "#about" },
    { label: "Speakers", href: "#speakers" },
    { label: "Schedule", href: "#schedule" },
    { label: "Tickets", href: "#tickets" }
];
const socialLinks = [
    {icon: <Twitter size={20}/>, href: "#"},
    {icon: <Facebook size={20}/>, href: "#"},
    {icon: <Instagram size={20}/>, href: "#"},
    {icon: <Linkedin size={20}/>, href: "#"},
    {icon: <Mail size={20}/>, href: "#"}
];

export default function Footer() {
    return (
        <footer className="bg-[#2D223C] text-white py-14">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">

                {/* Lef side */}
                <div>
                    <img src={logoImg} alt="Logo" className="w-44 mb-4"/>
                    <p className="text-sm opacity-80">
                        TheDevWorld is a 3-day conference dedicated to innovation...
                    </p>

                    <div className="flex gap-3 mt-5">
                        {socialLinks.map((s, index) => (
                            <SocialIcon key={index} href={s.href}>
                                {s.icon}
                            </SocialIcon>
                        ))}
                    </div>
                </div>

                {/* Useful links */}
                <div>
                    <h2 className="font-bebas text-[32px]">Useful Links</h2>
                    <ul className="flex flex-col gap-2 opacity-90">
                        {usefulLinks.map((link, i) => (
                            <li key={i}>
                                <a
                                    href={link.href}
                                    className="flex items-center gap-2 hover:text-[#FFBD00] transition"
                                >
                                    <span className="text-[#FFBD00]">›</span> {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tickets */}
                <div className="flex flex-col ">
                    <h2 className="font-bebas text-[32px]">Get your ticket</h2>
                    <p className="text-sm opacity-80">
                        Stay updated and secure your spot…
                    </p>
                    <button
                        className="mt-5 bg-[#FFBD00] text-white rounded-[100px] transition-all duration-300 ease-in-out border border-solid border-[#FFBD00]  hover:bg-transparent hover:border text-center cursor-pointer w-full py-2 font-bebas text-[24px]"
                    >
                        GET YOUR TICKET
                    </button>
                </div>

            </div>
        </footer>
    );
}
