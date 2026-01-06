"use client";
import React from "react";
import Image from "next/image";
import { Container } from "@/shared/ui/Container/Container";
import { motion } from "framer-motion";

const cases = [
  { title: "Personal Injury", img: "/Margin.png" },
  { title: "Investment", img: "/Margin.png" },
  { title: "Legal Separation", img: "/Margin.png" },
  { title: "Domestic Violence", img: "/Margin.png" },
  { title: "Illegal", img: "/Margin.png" },
  { title: "Digital Crime", img: "/Margin.png" },
];

export const CaseStudies = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Header qismi */}
        <div className="mb-16">
          <span className="text-[#C59D5F] text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a1612] max-w-xl leading-tight">
            Many projects Done that make us Stand out
          </h2>
        </div>

        {/* Grid qismi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden"
            >
              {/* Rasm konteyneri */}
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>

              {/* Ma'lumot qismi */}
              <div className="relative -mt-10 mx-6 bg-white p-6 shadow-xl z-10 text-center">
                <h3 className="text-lg font-bold text-[#1a1612] uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-4">
                  Lorem ipsum dolor
                </p>
                <button className="w-full bg-[#C59D5F] text-black py-3 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#1a1612] hover:text-white transition-all duration-300">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
