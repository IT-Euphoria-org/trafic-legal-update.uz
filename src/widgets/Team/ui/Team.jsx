"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/shared/ui/Container/Container";
import Image from "next/image";

const teamMembers = [
  { name: "NADIM", role: "Criminal Lawyer", image: "/lawho09.png" },
  { name: "JASHON", role: "Criminal Lawyer", image: "/lawho09.png" },
  { name: "MALIK", role: "Criminal Lawyer", image: "/lawho09.png" },
];

const Team = () => {
  return (
    <section className="relative w-full bg-white py-16 lg:py-28 z-10 overflow-hidden">
      <Container>
        {/* 1-Qism: Sarlavha qismi */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
          <div className="w-full lg:w-1/2">
            <span className="text-[#C59D5F] text-[12px] font-bold tracking-[0.4em] uppercase mb-4 block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#1a1612] leading-tight mb-8 uppercase">
              Most Successful Expert & Attorney <br />
              Works With Our Team
            </h2>
            <button className="bg-[#C59D5F]/10 text-[#1a1612] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#C59D5F] hover:text-white transition-all duration-300 border border-[#C59D5F]/30">
              View All Our Team
            </button>
          </div>

          <div className="w-full lg:w-1/2 lg:pt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-500 text-[14px] leading-relaxed">
              <p>
                Mi turpis imperdiet nulla feugiat magnis pellentesque venenatis
                litora quam purus. Ante natoq sapien mollis.
              </p>
              <p>
                Felis sociosqu pharetra hac varius odio cursus. Natoque ut
                molestie. Annuxit bouee ida py = 20.
              </p>
            </div>
          </div>
        </div>

        {/* 2-Qism: Jamoa Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Rasm konteyneri (To'q fon va Kichikroq hajm) */}
              <div className="relative w-[90%] aspect-[4/5] bg-[#1a1612] overflow-hidden p-8">
                {/* Hoverda paydo bo'ladigan tilla border */}
                <div className="absolute inset-4 border border-[#C59D5F]/0 group-hover:border-[#C59D5F]/60 transition-all duration-500 z-20 pointer-events-none" />

                <div className="relative w-full h-full z-10 transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain object-bottom grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Ism va Lavozim bloki - O'ngda va Overlap (Ustiga chiqqan) */}
              <div className="absolute bottom-[-30px] right-0 w-[75%] bg-white p-6 shadow-[20px_20px_60px_rgba(0,0,0,0.1)] z-30 transform transition-all duration-500 group-hover:-translate-y-3">
                {/* Tilla rangli dekorativ chiziq */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-[#C59D5F]" />

                <div className="pl-4">
                  <h3 className="text-lg md:text-xl font-serif text-[#1a1612] mb-1 group-hover:text-[#C59D5F] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                    {member.role}
                  </p>
                </div>

                {/* Dekorativ nuqtalar (Pattern) */}
                <div className="absolute top-2 right-2 flex gap-1 opacity-10">
                  <div className="w-1 h-1 bg-black rounded-full" />
                  <div className="w-1 h-1 bg-black rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
