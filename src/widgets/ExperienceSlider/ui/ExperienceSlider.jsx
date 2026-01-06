"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Container } from "@/shared/ui/Container/Container";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Swiper stillari
import "swiper/css";
import "swiper/css/navigation";

const services = [
  { title: "Criminal Law", category: "Personal Law", img: "/lawho09.png" },
  {
    title: "Domestic Violence",
    category: "Personal Law",
    img: "/lawho07-800x517.png.png",
  },
  {
    title: "Divorce Law",
    category: "Personal Law",
    img: "/lawho03-800x347.png.png",
  },
  { title: "Company Law", category: "Business Law", img: "/lawho08.png" },
  {
    title: "Real Estate Law",
    category: "Property Law",
    img: "/lawho06.png.png",
  },
];

const ExperienceSlider = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden">
      {/* Statistika qismi (O'zgarishsiz) */}
      <div className="relative py-16 border-b border-white/5" ref={ref}>
        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-baseline gap-4">
              <span className="text-6xl md:text-7xl font-serif text-[#C59D5F] min-w-[100px]">
                {inView ? <CountUp end={10} duration={3} /> : "0"}
              </span>
              <div className="text-lg md:text-xl font-serif text-white uppercase tracking-widest leading-tight">
                years of <br /> experience
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-[#141414] p-6 min-w-[180px] text-center border border-white/5">
                <div className="text-3xl font-serif text-white mb-1">
                  {inView ? (
                    <CountUp end={2456} separator="," duration={2.5} />
                  ) : (
                    "0"
                  )}
                </div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-[#C59D5F]">
                  Satisfied Clients
                </div>
              </div>

              <div className="bg-[#C59D5F] p-6 min-w-[180px] text-center shadow-lg">
                <div className="text-3xl font-serif text-[#1a1612] mb-1">
                  {inView ? <CountUp end={25} duration={3} /> : "0"}
                </div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-[#1a1612] font-bold">
                  Winning Awards
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* --- SOZLANGAN SWIPER SLIDER --- */}
      {/* Balandlik h-[550px] dan h-[450px] ga tushirildi */}
      <div className="relative w-full h-[450px]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{ prevEl, nextEl }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }, // 4 ta slayd turganda rasmlar proporsiyasi to'g'ri bo'ladi
          }}
          className="h-full"
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full overflow-hidden border-r border-white/5 cursor-pointer group">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  // object-cover o'rniga ba'zida rasmni siqmaslik uchun yaxshi sifatli rasm kerak
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Overlay xiralashtirildi, rasm aniqroq ko'rinishi uchun */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500" />

                <div className="absolute bottom-16 left-8 z-20">
                  <h3 className="text-xl font-serif text-white mb-1 group-hover:text-[#C59D5F] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-[1px] bg-[#C59D5F]" />
                    <span className="text-[10px] uppercase tracking-widest text-gray-300">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C59D5F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation tugmalari (O'lchami biroz kichraytirildi) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
          <button
            ref={(node) => setPrevEl(node)}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white bg-black/40 backdrop-blur-md hover:bg-[#C59D5F] transition-all"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            ref={(node) => setNextEl(node)}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white bg-black/40 backdrop-blur-md hover:bg-[#C59D5F] transition-all"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSlider;
