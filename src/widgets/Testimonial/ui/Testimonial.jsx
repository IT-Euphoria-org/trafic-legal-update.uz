"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/shared/ui/Container/Container";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    // Services bo'limidan keyin bo'shliqsiz ulanadi
    <section className="relative w-full bg-[#0a0a0a] lg:py-24 overflow-hidden -mt-1">
      {/* Background Image (xira gumbaz) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/Images/capitol-dome.jpg"
          alt="Background Decoration"
          fill
          className="object-contain object-center"
        />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Chap qism: Mijoz fikri (Testimonial Card) */}
          <div className="w-full lg:w-[55%]">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#C59D5F] text-[11px] font-bold tracking-[0.4em] uppercase mb-8 block"
            >
              Our Testimonial
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#141414] p-8 md:p-12 relative border border-white/5 shadow-2xl"
            >
              {/* Katta qo'shtirnoq belgisi */}
              <FaQuoteRight className="absolute bottom-8 right-8 text-4xl md:text-6xl text-white/5" />

              <p className="text-gray-400 italic text-base md:text-lg leading-relaxed mb-10">
                "Mollis aenean fermentum arcu diam nulla egestas malesuada
                viverra, ullamcorper pharetra porta turpis semper etiam
                habitasse varius."
              </p>

              {/* Mijoz haqida ma'lumot */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C59D5F]">
                  <Image
                    src="/lawho08.png.png" // Mijoz kichik rasmi
                    alt="Sonny Rachel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg leading-none mb-1">
                    SONNY RACHEL
                  </h4>
                  <p className="text-[#C59D5F] text-[12px] uppercase tracking-wider">
                    California Lawyer
                  </p>
                </div>
              </div>

              {/* Slider nuqtalari */}
              <div className="flex gap-2 mt-10">
                <div className="w-2 h-2 rounded-full bg-[#C59D5F]" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
            </motion.div>
          </div>

          {/* O'ng qism: Katta advokat rasmi */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[450px] h-[400px] md:h-[550px]"
            >
              <Image
                src="/lawho08.png.png" // Qollarini qovushtirib turgan advokat (PNG)
                alt="Professional Lawyer"
                fill
                className="object-contain object-bottom"
              />
              {/* Rasm orqasidagi xira yorug'lik */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
