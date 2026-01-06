"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/shared/ui/Container/Container";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStripe,
  FaPaypal,
  FaApplePay,
  FaAmazonPay,
  FaCcVisa,
  FaGooglePay,
} from "react-icons/fa";
import {
  SiUber,
  SiAirbnb,
  SiSlack,
  SiSpotify,
  SiNetflix,
} from "react-icons/si";

// Hamkorlar uchun turli xil iconlar
const partnerLogos = [
  { icon: <FaStripe size={40} />, name: "Stripe" },
  { icon: <SiUber size={35} />, name: "Uber" },
  { icon: <SiAirbnb size={35} />, name: "Airbnb" },
  { icon: <SiSlack size={35} />, name: "Slack" },
  { icon: <SiSpotify size={35} />, name: "Spotify" },
  { icon: <SiNetflix size={35} />, name: "Netflix" },
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-white">
      {/* 1. PARTNERS SECTION - Oq fonda Iconlar */}
      <div className="py-16 border-t border-gray-100 bg-white">
        <Container>
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 md:gap-12">
            {partnerLogos.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.3 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                className="text-gray-400 hover:text-[#C59D5F] transition-all duration-300 cursor-pointer"
                title={partner.name}
              >
                {partner.icon}
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      {/* 2. NEWSLETTER & MAIN FOOTER AREA */}
      <div className="relative bg-[#1a120b] pt-40 pb-10 mt-32">
        {/* --- NEWSLETTER OVERLAY CARD --- */}
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 -top-64 w-full bg-[#080a0b] border border-[#C59D5F]/30 p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl z-30 overflow-hidden"
          >
            {/* Newsletter Matni */}
            <div className="w-full lg:w-1/2 relative z-10">
              <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight">
                Subscribe Your Email <br />
                <span className="text-white/90">
                  for Newsletter & Promotion
                </span>
              </h2>
            </div>

            {/* Input va Tugma */}
            <div className="w-full lg:w-1/2 relative z-10 flex items-center border-b border-white/20 pb-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent py-4 text-white outline-none focus:placeholder-transparent transition-all pr-28"
              />
              <button className="absolute right-0 bg-[#C59D5F] text-[#1a120b] px-8 py-3 font-bold uppercase text-[11px] tracking-widest hover:bg-white transition-all duration-300">
                Send
              </button>
            </div>

            {/* Fondagi Bolg'a (Gavel) */}
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 pointer-events-none">
              <Image
                src="/bolga.png"
                alt="Law Gavel"
                fill
                className="object-cover object-right scale-125"
              />
            </div>

            {/* Tilla rangli ichki hoshiya */}
            <div className="absolute inset-2 border border-[#C59D5F]/10 pointer-events-none" />
          </motion.div>
        </Container>

        {/* --- MAIN FOOTER CONTENT --- */}
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Kolonka 1: Logo va Haqida */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-[#C59D5F] flex items-center justify-center">
                  <span className="text-[#C59D5F] font-serif text-xl">L</span>
                </div>
                <h3 className="text-2xl font-serif text-white tracking-widest uppercase">
                  LawOne
                </h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed italic">
                "Leo sem euismod massa iaculis ullamcorper duis potenti,
                facilisi per natoque sapien proin pulvinar habitant."
              </p>
              <div className="flex gap-4 pt-4">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#C59D5F] hover:border-[#C59D5F] transition-all"
                    >
                      <Icon size={14} />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Kolonka 2: Services */}
            <div>
              <h4 className="text-white font-serif text-lg mb-8 uppercase tracking-widest border-b border-[#C59D5F]/20 pb-2 inline-block">
                Our Services
              </h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                {[
                  "Domestic Violence",
                  "Business Activity",
                  "Murder Crime",
                  "Commercial Law",
                  "Financial Law",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-[#C59D5F] cursor-pointer transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-[1px] bg-[#C59D5F]" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolonka 3: Support */}
            <div>
              <h4 className="text-white font-serif text-lg mb-8 uppercase tracking-widest border-b border-[#C59D5F]/20 pb-2 inline-block">
                Support
              </h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                {[
                  "Professional",
                  "Contact Us",
                  "About Us",
                  "Support System",
                  "Refund Policy",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-[#C59D5F] cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolonka 4: Gallery */}
            <div>
              <h4 className="text-white font-serif text-lg mb-8 uppercase tracking-widest border-b border-[#C59D5F]/20 pb-2 inline-block">
                Galley
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden group border border-white/5"
                  >
                    <Image
                      src={`/Margin.png`}
                      alt="law"
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Details Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-white/5">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#C59D5F]">
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                  Phone
                </p>
                <p className="text-white font-serif text-base">+6297501</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#C59D5F]">
                <FaEnvelope size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                  Email
                </p>
                <p className="text-white font-serif text-base">
                  lawone@mail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#C59D5F]">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                  Location
                </p>
                <p className="text-white font-serif text-base">
                  JL. Soekarno, USA
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-10 border-t border-white/5 text-gray-600 text-[10px] uppercase tracking-[0.4em]">
            Copyright © 2021 LAWONE Design By StrongTheme
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
