"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/shared/ui/Container/Container";

const timelineData = [
  {
    year: "2014",
    title: "STARTED JOURNEY",
    desc: "Accumsan enim potenti aliquet arcu nisi proin mollis class.",
  },
  {
    year: "2016",
    title: "WE EMPLOYED LAWYERS",
    desc: "Accumsan enim potenti aliquet arcu nisi proin mollis class.",
  },
  {
    year: "2017",
    title: "WINNING BEST AWARDS",
    desc: "Accumsan enim potenti aliquet arcu nisi proin mollis class.",
  },
  {
    year: "2021",
    title: "IMPROVED TEAM",
    desc: "Accumsan enim potenti aliquet arcu nisi proin mollis class.",
  },
];

const Timeline = () => {
  return (
    <section className="relative w-full bg-white py-2 lg:py-32">
      <Container>
        <div className="relative">
          {/* Gorizontal chiziq - Markazda */}
          <div className="absolute top-[45px] left-0 w-full h-[2px] bg-gray-200 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                {/* Yil matni */}
                <span className="text-[16px] font-bold text-[#1a1612] mb-4 tracking-wider">
                  {item.year}
                </span>

                {/* Doira (Node) */}
                <div className="w-[18px] h-[18px] rounded-full border-4 border-gray-200 bg-white mb-8 group-hover:border-[#C59D5F] group-hover:scale-125 transition-all duration-300 relative">
                  {/* Markazdagi nuqta faqat hoverda ko'rinadi */}
                  <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-[#C59D5F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Sarlavha */}
                <h3 className="text-[14px] font-black text-[#1a1612] uppercase tracking-[0.1em] mb-4">
                  {item.title}
                </h3>

                {/* Tavsif */}
                <p className="text-gray-400 text-[13px] leading-relaxed max-w-[200px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
