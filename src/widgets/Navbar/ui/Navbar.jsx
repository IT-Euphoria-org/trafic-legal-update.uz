"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/shared/ui/Container/Container";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

// Navbar endi dict va lang proplarini qabul qiladi
export const Navbar = ({ dict, lang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const pathname = usePathname();

  // Tarjimalarni dict ichidan olish (agar dict.navbar mavjud bo'lmasa xato bermasligi uchun default qiymatlar)
  const t = dict?.navbar || {};

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Navigatsiya linklarini tarjimalarga bog'laymiz
  const navLinks = [
    { name: t.home || "Home", path: `/${lang}` },
    { name: t.about || "About", path: `/${lang}/about` },
    { name: t.case || "Case", path: `/${lang}/case` },
    { name: t.services || "Services", path: `/${lang}/service` },
    {
      name: t.page || "Page",
      path: "#",
      hasDropdown: true,
      subLinks: [
        { name: t.team || "Our Team", path: `/${lang}/team` },
        {
          name: t.teamDetails || "Team Details",
          path: `/${lang}/team-details`,
        },
        {
          name: t.caseDetails || "Case Details",
          path: `/${lang}/case-details`,
        },
        {
          name: t.testimonials || "Testimonials",
          path: `/${lang}/testimonials`,
        },
        { name: t.faq || "FAQ", path: `/${lang}/faq` },
      ],
    },
    { name: t.news || "News", path: `/${lang}/news` },
    { name: t.contact || "Contact Us", path: `/${lang}/contact` },
  ];

  // Til o'zgartirilganda pathni saqlab qolish funksiyasi
  const getRedirectPath = (targetLang) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = targetLang; // /uz/about -> /ru/about
    return segments.join("/");
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
        {/* Logo Section */}
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 cursor-pointer relative z-[110]"
        >
          <div className="w-8 h-8 rounded-full border-2 border-[#C59D5F] flex items-center justify-center">
            <div className="w-4 h-4 bg-[#C59D5F] rounded-full" />
          </div>
          <span className="text-[#C59D5F] text-2xl font-bold tracking-[0.25em] uppercase">
            TRAFFIC LEGAL
          </span>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.path;
              return (
                <li key={idx} className="relative group py-2">
                  <Link
                    href={link.path}
                    className={`flex items-center gap-1 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                      isActive
                        ? "text-[#C59D5F]"
                        : "text-white hover:text-[#C59D5F]"
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <MdKeyboardArrowDown className="group-hover:rotate-180 transition-transform duration-300 text-sm" />
                    )}
                  </Link>

                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <ul className="bg-[#1a1612] border-t-2 border-[#C59D5F] w-[220px] shadow-2xl p-4 flex flex-col gap-1">
                        {link.subLinks.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              href={sub.path}
                              className="text-white text-[10px] uppercase tracking-widest font-bold py-3 px-4 hover:bg-[#C59D5F] hover:text-black block transition-all duration-300"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {isActive && !link.hasDropdown && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#C59D5F]"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Languages Switcher Desktop */}
          <div className="flex items-center gap-4 border-l border-white/10 ml-4 pl-6">
            {["UZ", "RU", "EN"].map((l) => (
              <Link
                key={l}
                href={getRedirectPath(l.toLowerCase())}
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

        {/* --- MOBILE BURGER BUTTON --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-end gap-1.5 relative z-[110] focus:outline-none group"
        >
          <motion.span
            animate={
              isOpen
                ? { rotate: 45, y: 8, width: "100%" }
                : { rotate: 0, y: 0, width: "100%" }
            }
            className="h-[2px] bg-white block rounded-full"
          />
          <motion.span
            animate={
              isOpen
                ? { opacity: 0, x: 20 }
                : { opacity: 1, x: 0, width: "70%" }
            }
            className="h-[2px] bg-[#C59D5F] block rounded-full"
          />
          <motion.span
            animate={
              isOpen
                ? { rotate: -45, y: -8, width: "100%" }
                : { rotate: 0, y: 0, width: "40%" }
            }
            className="h-[2px] bg-white block rounded-full"
          />
        </button>
      </Container>

      {/* --- MOBILE SIDEBAR --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[101] lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
              className="fixed top-0 right-0 h-screen w-[85%] bg-[#0f0d0b] z-[105] shadow-[-10px_0_40px_rgba(0,0,0,0.8)] flex flex-col p-8 lg:hidden"
            >
              {/* Language Switcher for Mobile */}
              <div className="flex gap-4 mt-8 mb-6">
                {["UZ", "RU", "EN"].map((l) => (
                  <Link
                    key={l}
                    onClick={() => setIsOpen(false)}
                    href={getRedirectPath(l.toLowerCase())}
                    className={`text-xs font-bold ${lang === l.toLowerCase() ? "text-[#C59D5F]" : "text-white/50"}`}
                  >
                    {l}
                  </Link>
                ))}
              </div>

              <ul className="flex flex-col gap-4 flex-grow overflow-y-auto pr-4">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={idx}
                    className="flex flex-col border-b border-white/5 pb-3"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.path}
                        onClick={() => !link.hasDropdown && setIsOpen(false)}
                        className={`text-xl font-serif italic tracking-widest flex items-center gap-4 ${
                          pathname === link.path
                            ? "text-[#C59D5F]"
                            : "text-white"
                        }`}
                      >
                        <span className="text-[10px] text-gray-600 not-italic">
                          0{idx + 1}
                        </span>
                        {link.name}
                      </Link>

                      {link.hasDropdown && (
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === idx ? null : idx,
                            )
                          }
                        >
                          <MdKeyboardArrowDown
                            size={24}
                            className={
                              activeDropdown === idx
                                ? "rotate-180 text-[#C59D5F]"
                                : "text-white"
                            }
                          />
                        </button>
                      )}
                    </div>

                    {link.hasDropdown && activeDropdown === idx && (
                      <div className="bg-white/5 mt-4 rounded-sm flex flex-col p-4 gap-4">
                        {link.subLinks.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={sub.path}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 text-sm italic flex items-center gap-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C59D5F]" />
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-8 border-t border-white/5">
                <div className="flex gap-4 mb-6">
                  {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400"
                      >
                        <Icon size={16} />
                      </a>
                    ),
                  )}
                </div>
                <p className="text-[9px] text-gray-600 uppercase tracking-widest italic">
                  © 2026 TRAFFIC LEGAL
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
