"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/shared/ui/Container/Container";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative w-full bg-white  lg:py-32 flex flex-col justify-center min-h-screen">
      {/* 1. Background Image - Section balandligiga nisbatan ideal markazlash */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/Section.png"
          alt="Building Background"
          fill
          className="object-cover object-center opacity-[0.15]" // Opacity qaytarildi, bo'lmasa matn o'qilmaydi
          priority
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col">
          {/* Top Content Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-12">
            {/* Left: Heading */}
            <div className="w-full lg:w-1/2 text-start">
              <span className="text-[#C59D5F] text-[12px] font-bold tracking-[0.3em] uppercase mb-4 block">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif text-[#1a1612] leading-[1.2] uppercase tracking-tight">
                Personal Lawyer & <br className="hidden md:block" /> Accident
                Attorney
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-8 lg:mt-10 bg-[#C59D5F] text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#1a1612] transition-all duration-300"
              >
                Read More
              </motion.button>
            </div>

            {/* Right: Description Text & Certificate Card */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-10 mt-10 lg:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-gray-500 text-[14px] leading-relaxed tracking-wide">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit viverra
                  at vestibulum, sagittis mattis nisl donec neque velit
                  curabitur felis.
                </p>
                <p>
                  Tempor vivamus, hendrerit nascetur praesent varius sem,
                  pharetra justo sodales, at vestibulum, sagittis mattis nisl.
                </p>
              </div>

              {/* Certificate Card */}
              <motion.div
                whileHover={{ y: -8 }}
                className="self-start lg:self-end bg-[#1a1612] p-6 lg:p-7 pr-10 lg:pr-14 flex items-center gap-5 lg:gap-6 shadow-2xl relative overflow-hidden"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 border-[#C59D5F] flex items-center justify-center p-1">
                  <div className="w-full h-full rounded-full border border-[#C59D5F] bg-[#C59D5F]/10 flex items-center justify-center text-[#C59D5F] text-xl lg:text-2xl">
                    ⚖️
                  </div>
                </div>
                <div>
                  <h4 className="text-[#C59D5F] text-[15px] lg:text-[17px] font-bold uppercase tracking-wider">
                    CERTIFICATE
                  </h4>
                  <p className="text-white/60 text-[10px] lg:text-[11px] uppercase tracking-widest mt-1">
                    Personal Lawyer
                  </p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1.5 bg-[#C59D5F]" />
              </motion.div>
            </div>
          </div>

          {/* Bottom Row: Team Image - Mobilada margin va balandlik optimallashdi */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full relative mt-4 lg:mt-12 h-[200px] sm:h-[300px] md:h-[450px] lg:h-[550px]"
          >
            <Image
              src="/lawho03-800x347.png.png"
              alt="Lawyers Team"
              fill
              className="object-contain object-bottom" // Rasm har doim pastga taqaladi
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
