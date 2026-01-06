"use client";
import { motion } from "framer-motion";
import { Container } from "@/shared/ui/Container/Container";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col bg-[#14110e] overflow-hidden lg:overflow-visible">
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14110e] via-[#14110e]/40 to-transparent lg:block hidden" />
        <div className="absolute inset-0 bg-[#14110e]/60 lg:hidden block" />
      </div>

      {/* 2. Main Content Area */}
      <div className="relative z-10 flex-grow flex items-center pt-32 lg:pt-0 pb-10 lg:pb-0 min-h-screen lg:min-h-0">
        <Container className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Chap qism: Matnlar - Mobilada text-start qilindi */}
          <div className="w-full lg:w-[60%] text-white text-start order-1 lg:order-1">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#C59D5F] text-[12px] md:text-[14px] font-bold tracking-[0.4em] uppercase mb-6 block"
            >
              We Help For
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-[85px] font-serif leading-[1.1] mb-8 uppercase tracking-tight"
            >
              Law Expertise 
              <span className="italic font-light">It's Our Policy</span>
            </motion.h1>

            <motion.p className="text-gray-400 text-sm md:text-base max-w-2xl mb-10 leading-relaxed uppercase tracking-[0.2em] opacity-80">
              Risus feugiat metus fringilla dignissim rhoncus, tellus ante
              pretium sollicitudin auctor semper.
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#fff",
                color: "#14110e",
              }}
              className="bg-[#C59D5F] text-[#14110e] px-14 py-5 text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-300 shadow-2xl"
            >
              Free Consulting
            </motion.button>
          </div>

          {/* O'ng qism: Rasm */}
          <div className="relative top-0 lg:-top-[150px] w-full lg:w-[40%] flex justify-center lg:justify-end items-end h-[400px] md:h-[600px] lg:h-[850px] mt-10 lg:mt-0 order-2 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src="/Container.png"
                alt="Professional Lawyer"
                fill
                className="object-contain object-bottom z-10"
                priority
              />
            </motion.div>
          </div>
        </Container>
      </div>

      {/* 3. Bottom Features Grid - lg:-bottom-[60px] orqali tepaga surildi */}
      <div className="relative lg:absolute bottom-0 lg:-bottom-[60px] left-0 w-full z-20">
        <Container className="grid grid-cols-1 md:grid-cols-3 shadow-2xl">
          <FeatureCard title="Experienced" icon="⚖️" />
          <FeatureCard title="Effective" icon="🏛️" isDark={true} />
          <FeatureCard title="Here For You" icon="📜" />
        </Container>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, icon, isDark = false }) => (
  <div
    className={`${
      isDark ? "bg-[#110e0c]/98" : "bg-[#1a1612]/98"
    } p-10 lg:p-12 border-b md:border-b-0 md:border-r border-white/5 flex items-center gap-6 group cursor-pointer hover:bg-[#C59D5F] transition-all duration-500`}
  >
    <div className="text-3xl lg:text-4xl text-[#C59D5F] group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <div className="flex flex-col">
      <h3 className="text-white group-hover:text-[#14110e] font-bold uppercase text-[14px] tracking-[0.2em]">
        {title}
      </h3>
      <p className="text-gray-500 group-hover:text-[#14110e]/80 text-[10px] mt-2 uppercase tracking-widest leading-tight">
        Praesent maecenas <br className="hidden lg:block" /> ullamcorper congue
      </p>
    </div>
  </div>
);

export default Hero;
