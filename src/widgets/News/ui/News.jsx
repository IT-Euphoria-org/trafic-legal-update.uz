"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/shared/ui/Container/Container";

const newsData = [
  {
    title: "WHAT WE ARE CAPABLE OF GETS DISCOVERED.",
    date: "May 20, 2021",
    author: "onepressury4",
    desc: "Senectus suspendisse montes hac sem habitant tempor vitae in magna arcu eros maecenas, potenti",
  },
  {
    title: "IN ON ANNOUNCING IF OF COMPARISON PIANOFORTE",
    date: "May 20, 2021",
    author: "onepressury4",
    desc: "Senectus suspendisse montes hac sem habitant tempor vitae in magna arcu eros maecenas, potenti",
  },
  {
    title: "SOMETHING CONSULTED AGE EXTREMELY END PROCURING",
    date: "May 20, 2021",
    author: "onepressury4",
    desc: "Senectus suspendisse montes hac sem habitant tempor vitae in magna arcu eros maecenas, potenti",
  },
];

const News = () => {
  return (
    <section className="relative w-full bg-white py-20 lg:py-32 overflow-hidden">
      {/* O'ng tomondagi dekorativ chiziqli naqsh (Pattern) */}
      <div
        className="absolute right-0 top-0 h-full w-1/4 bg-[url('/path-to-your-lines-pattern.png')] opacity-10 pointer-events-none"
        style={{
          backgroundSize: "20px 20px",
          backgroundImage:
            "linear-gradient(45deg, #C59D5F 1px, transparent 1px)",
        }}
      />

      <Container>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#C59D5F] text-[12px] font-bold tracking-[0.4em] uppercase mb-4 block"
          >
            News
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif text-[#1a1612] uppercase tracking-tight"
          >
            Learn more from <br /> our latest news
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white p-8 lg:p-10 border border-[#C59D5F]/30 hover:border-[#C59D5F] transition-all duration-500 flex flex-col h-full shadow-sm hover:shadow-xl"
            >
              <div className="mb-6">
                <h3 className="text-lg font-serif text-[#1a1612] leading-snug mb-3 group-hover:text-[#C59D5F] transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400">
                  <span>{item.author}</span>
                  <span className="w-1 h-1 bg-[#C59D5F] rounded-full" />
                  <span>{item.date}</span>
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>

              <button className="text-[#C59D5F] text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group/btn">
                Read More
                <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">
                  »
                </span>
              </button>

              {/* Hoverda chiqadigan pastki chiziq effekti */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C59D5F] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default News;
