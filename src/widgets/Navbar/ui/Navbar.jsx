"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/shared/ui/Container/Container";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset"; // Menyu yopilganda scrollni tiklash
    };
  }, []);

  // Menyu ochilganda orqa fon scroll bo'lmasligi uchun
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "HOME", active: true },
    { name: "ABOUT", active: false },
    { name: "CASE", active: false },
    { name: "SERVICES", active: false },
    { name: "PAGE", active: false, hasDropdown: true },
    { name: "NEWS", active: false },
    { name: "CONTACT US", active: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-[#14110e]/95 backdrop-blur-md py-4 shadow-2xl"
          : "bg-transparent py-8"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer relative z-[110]">
          <div className="w-8 h-8 rounded-full border-2 border-[#C59D5F] flex items-center justify-center">
            <div className="w-4 h-4 bg-[#C59D5F] rounded-full" />
          </div>
          <span className="text-[#C59D5F] text-2xl font-bold tracking-[0.25em] uppercase">
            LAWONE
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <li key={idx} className="relative group">
                <button
                  className={`flex items-center gap-1 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                    link.active
                      ? "text-[#C59D5F]"
                      : "text-white hover:text-[#C59D5F]"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <MdKeyboardArrowDown className="group-hover:rotate-180 transition-transform" />
                  )}
                </button>
                {link.active && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#C59D5F]"
                  />
                )}
              </li>
            ))}
          </ul>
          {/* Desktop Languages */}
          <div className="flex items-center gap-4 border-l border-white/10 ml-4 pl-6 font-serif">
            {["UZ", "RU", "EN"].map((l, i) => (
              <span
                key={l}
                className={`text-[10px] font-black cursor-pointer ${
                  i === 2 ? "text-[#C59D5F]" : "text-gray-400 hover:text-white"
                }`}
              >
                {l}
              </span>
            ))}
          </div>
        </div>

        {/* Burger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-3xl relative z-[110] focus:outline-none"
        >
          {isOpen ? <HiX className="text-[#C59D5F]" /> : <HiMenuAlt3 />}
        </button>
      </Container>

      {/* --- MODERNIZE MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101] lg:hidden"
            />

            {/* Side Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-[85%] sm:w-[400px] bg-[#0f0d0b] z-[105] shadow-[-10px_0_30px_rgba(0,0,0,0.5)] flex flex-col p-10 lg:hidden"
            >
              {/* Menu Header (Logo in Menu) */}
              <div className="mt-10 mb-16">
                <span className="text-[#C59D5F] text-sm font-bold tracking-[0.4em] uppercase block mb-2">
                  Navigation
                </span>
                <div className="h-[1px] w-12 bg-[#C59D5F]" />
              </div>

              {/* Navigation Links */}
              <ul className="flex flex-col gap-6 flex-grow">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <button
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl font-serif tracking-widest uppercase transition-all flex items-center gap-4 group ${
                        link.active
                          ? "text-[#C59D5F]"
                          : "text-white hover:text-[#C59D5F]"
                      }`}
                    >
                      <span className="text-[10px] text-gray-600 font-sans group-hover:text-[#C59D5F]">
                        0{idx + 1}
                      </span>
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>

              {/* Menu Footer: Languages & Socials */}
              <div className="mt-auto pt-10 border-t border-white/5 space-y-8">
                {/* Languages */}
                <div className="flex gap-6">
                  {["UZB", "RUS", "ENG"].map((l, i) => (
                    <span
                      key={l}
                      className={`text-xs font-bold tracking-widest cursor-pointer ${
                        i === 2 ? "text-[#C59D5F]" : "text-gray-500"
                      }`}
                    >
                      {l}
                    </span>
                  ))}
                </div>

                {/* Socials */}
                <div className="flex gap-5">
                  {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C59D5F] hover:border-[#C59D5F] transition-all"
                      >
                        <Icon size={14} />
                      </a>
                    )
                  )}
                </div>

                <p className="text-[10px] text-gray-600 uppercase tracking-widest">
                  © 2026 LAWONE ADVISORY
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
