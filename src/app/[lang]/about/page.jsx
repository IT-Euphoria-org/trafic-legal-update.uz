"use client";
import React from "react";
import Image from "next/image";
import { Container } from "@/shared/ui/Container/Container";
import { motion } from "framer-motion";
import { About } from "@/widgets/About";
import { ExperienceSlider } from "@/widgets/ExperienceSlider";
import { Timeline } from "@/widgets/Timeline";
import { Benefits } from "@/widgets/Benefits";
import { Statistics } from "@/widgets/Statistics";
import { Appointment } from "@/widgets/Appointment";

const AboutPage = () => {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      {/* 1. Breadcrumb / Header Section */}
      <section className="relative h-[400px] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bronze.jpg"
            alt="About Us"
            fill
            /* Klasslar bitta qatorga yozildi */
            className="object-cover object-[70%_center] md:object-contain md:object-right-bottom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 md:via-[#0a0a0a]/60 to-transparent" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-[#C59D5F]" />
              <h1 className="text-[#C59D5F] text-2xl md:text-3xl font-serif italic">
                Page - About
              </h1>
            </div>
            <div className="w-24 h-[2px] bg-[#C59D5F] ml-16" />
          </motion.div>
        </Container>
      </section>

      {/* Widgets */}
      <About />
      <ExperienceSlider />
      <Benefits />
      <Timeline />
      <Statistics />
      <Appointment />
    </main>
  );
};

export default AboutPage;
