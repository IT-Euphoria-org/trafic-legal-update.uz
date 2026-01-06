"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Container } from "@/shared/ui/Container/Container";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Swiper stillari
import "swiper/css";
import "swiper/css/navigation";

const services = [
  { title: "Criminal Law", category: "Personal Law", img: "/Margin.png" },
  { title: "Domestic Violence", category: "Personal Law", img: "/Margin.png" },
  { title: "Divorce Law", category: "Personal Law", img: "/Margin.png" },
  { title: "Company Law", category: "Business Law", img: "/Margin.png" },
  { title: "Real Estate Law", category: "Property Law", img: "/Margin.png" },
];

const ExperienceSlider = () => {
  // Ref o'rniga State ishlatamiz, shunda Swiper dom elementlarini aniq ko'radi
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden">
      {/* Statistika qismi (O'zgarishsiz) */}
      <div className="relative py-20 border-b border-white/5">
        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-baseline gap-4">
              <span className="text-7xl md:text-8xl font-serif text-[#C59D5F]">
                10
              </span>
              <div className="text-xl md:text-2xl font-serif text-white uppercase tracking-widest leading-tight">
                years of <br /> experience
              </div>
            </div>
            <div className="flex gap-6">
              <div className="bg-[#141414] p-8 min-w-[180px] text-center border border-white/5">
                <div className="text-3xl font-serif text-white mb-2">2,456</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#C59D5F]">
                  Satisfied Clients
                </div>
              </div>
              <div className="bg-[#C59D5F] p-8 min-w-[180px] text-center">
                <div className="text-3xl font-serif text-[#1a1612] mb-2">
                  25
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#1a1612] font-bold">
                  Winning Awards
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Swiper Slider */}
      <div className="relative w-full h-[550px]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          // Navigatsiyani state orqali bog'laymiz
          navigation={{
            prevEl,
            nextEl,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="h-full group"
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full overflow-hidden border-r border-white/5 cursor-pointer">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                <div className="absolute bottom-24 left-10 z-20">
                  <h3 className="text-2xl font-serif text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-[#C59D5F]" />
                    <span className="text-[11px] uppercase tracking-widest text-gray-300">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C59D5F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- CUSTOM NAVIGATION ARROWS --- */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
          <button
            ref={(node) => setPrevEl(node)}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white bg-black/50 hover:bg-[#C59D5F] hover:border-[#C59D5F] transition-all duration-300 active:scale-90"
          >
            <FaChevronLeft size={16} />
          </button>

          <button
            ref={(node) => setNextEl(node)}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white bg-black/50 hover:bg-[#C59D5F] hover:border-[#C59D5F] transition-all duration-300 active:scale-90"
          >
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSlider;
