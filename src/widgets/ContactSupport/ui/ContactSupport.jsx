"use client";
import React from "react";
import Image from "next/image";
import { Container } from "@/shared/ui/Container/Container";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export const ContactSupport = () => {
  return (
    <section className="py-24 bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Chap qism: Ofislar ma'lumotlari */}
        <div className="flex flex-col gap-12">
          <div>
            <span className="text-[#C59D5F] text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a1612] leading-tight">
              Contact our support
            </h2>
          </div>

          {/* Office 01 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative w-full md:w-[240px] h-[160px] flex-shrink-0">
              <Image
                src="/towr.avif"
                alt="UK Office"
                fill
                className="object-cover border-l-4 border-[#C59D5F]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[#C59D5F] text-[10px] font-bold italic uppercase tracking-widest">
                Office 01
              </span>
              <h3 className="text-xl font-serif text-[#1a1612]">
                United Kingdom
              </h3>
              <div className="text-gray-500 text-sm flex flex-col gap-2 mt-2">
                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-[#C59D5F]" /> lawone@ukmail.com
                </p>
                <p className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#C59D5F]" /> +6209-0826-9263
                </p>
                <p className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#C59D5F]" /> Jl.
                  Soekarno-Hatta Km05
                </p>
              </div>
            </div>
          </div>

          {/* Office 02 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative w-full md:w-[240px] h-[160px] flex-shrink-0">
              <Image
                src="/towr.avif"
                alt="Netherlands Office"
                fill
                className="object-cover border-l-4 border-[#C59D5F]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-[#C59D5F] text-[10px] font-bold italic uppercase tracking-widest">
                Office 02
              </span>
              <h3 className="text-xl font-serif text-[#1a1612]">Netherlands</h3>
              <div className="text-gray-500 text-sm flex flex-col gap-2 mt-2">
                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-[#C59D5F]" /> lawone@nsmail.com
                </p>
                <p className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#C59D5F]" /> +6209-0826-9263
                </p>
                <p className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#C59D5F]" /> Jl.
                  Soekarno-Hatta Km09
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* O'ng qism: Tilla rangli bog'lanish formasi */}
        <div className="bg-[#C59D5F] p-10 md:p-14 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-10">
            Contact With Us
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/10 border-none p-4 placeholder-black/60 text-black outline-none focus:bg-black/20 transition-all"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full bg-black/10 border-none p-4 placeholder-black/60 text-black outline-none focus:bg-black/20 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black/10 border-none p-4 placeholder-black/60 text-black outline-none focus:bg-black/20 transition-all"
            />
            <select className="w-full bg-black/10 border-none p-4 text-black/60 outline-none focus:bg-black/20 transition-all appearance-none">
              <option>Choose Services</option>
              <option>Legal Advice</option>
              <option>Criminal Law</option>
            </select>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-black/10 border-none p-4 placeholder-black/60 text-black outline-none focus:bg-black/20 transition-all resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#1a1612] text-[#C59D5F] py-5 font-black uppercase tracking-[0.3em] hover:bg-black transition-all mt-4"
            >
              Send
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};
