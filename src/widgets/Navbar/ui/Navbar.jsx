"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/shared/ui/Container/Container";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const lang = params.lang || "en";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navLinks = [
    { name: "HOME", path: `/${lang}` },
    { name: "ABOUT", path: `/${lang}/about` },
    { name: "CASE", path: `/${lang}/case` },
    { name: "SERVICES", path: `/${lang}/service` },
    { name: "CONTACT US", path: `/${lang}/contact` },
  ];

  // Mobile menyu animatsiyasi uchun variantlar
  const containerVars = {
    initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
        staggerDirection: 1,
      },
    },
  };

  const linkVars = {
    initial: {
      y: "30vh",
      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
    },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } },
  };

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
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 cursor-pointer relative z-[110]"
        >
          <div className="w-8 h-8 rounded-full border-2 border-[#C59D5F] flex items-center justify-center">
            <div className="w-4 h-4 bg-[#C59D5F] rounded-full" />
          </div>
          <span className="text-[#C59D5F] text-2xl font-bold tracking-[0.25em] uppercase">
            LAWONE
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.path;
              return (
                <li key={idx} className="relative group">
                  <Link
                    href={link.path}
                    className={`text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                      isActive
                        ? "text-[#C59D5F]"
                        : "text-white hover:text-[#C59D5F]"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#C59D5F]"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Languages */}
          <div className="flex items-center gap-4 border-l border-white/10 ml-4 pl-6">
            {["UZ", "RU", "EN"].map((l) => (
              <Link
                key={l}
                href={`/${l.toLowerCase()}${pathname.replace(
                  /^\/[a-z]{2}/,
                  ""
                )}`}
                className={`text-[10px] font-black cursor-pointer transition-colors ${
                  lang === l.toLowerCase()
                    ? "text-[#C59D5F]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Burger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-3xl relative z-[110]"
        >
          {isOpen ? <HiX className="text-[#C59D5F]" /> : <HiMenuAlt3 />}
        </button>
      </Container>

      {/* --- INTERACTIVE MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-screen w-full bg-[#0f0d0b] z-[105] lg:hidden"
          >
            <Container className="h-full flex flex-col justify-center py-20">
              <div className="overflow-hidden">
                <motion.ul
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col gap-6"
                >
                  {navLinks.map((link, idx) => (
                    <div key={idx} className="overflow-hidden">
                      <motion.li variants={linkVars}>
                        <Link
                          href={link.path}
                          onClick={() => setIsOpen(false)}
                          className="text-4xl md:text-6xl font-serif text-white hover:text-[#C59D5F] transition-colors flex items-center gap-6 group"
                        >
                          <span className="text-xs font-sans text-[#C59D5F] opacity-50 group-hover:opacity-100 transition-opacity">
                            0{idx + 1}
                          </span>
                          {link.name}
                        </Link>
                      </motion.li>
                    </div>
                  ))}
                </motion.ul>
              </div>

              {/* Mobile Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
              >
                <div className="flex gap-8">
                  {["UZB", "RUS", "ENG"].map((l) => (
                    <span
                      key={l}
                      className={`text-xs font-bold tracking-[0.2em] cursor-pointer ${
                        lang === l.slice(0, 2).toLowerCase()
                          ? "text-[#C59D5F]"
                          : "text-gray-500"
                      }`}
                    >
                      {l}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#C59D5F] hover:text-[#C59D5F] transition-all"
                      >
                        <Icon size={16} />
                      </a>
                    )
                  )}
                </div>
              </motion.div>
            </Container>

            {/* Background Text Decoration */}
            <div className="absolute bottom-0 right-0 opacity-[0.02] text-[20vw] font-black text-white pointer-events-none leading-none select-none">
              LAWONE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
