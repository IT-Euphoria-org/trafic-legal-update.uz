"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/shared/ui/Container/Container";
import Image from "next/image";
import {
  FaBuilding,
  FaBalanceScale,
  FaGavel,
  FaBriefcase,
  FaFileInvoiceDollar,
  FaLaptopCode,
} from "react-icons/fa";

const practiceAreas = [
  {
    title: "Real State Law",
    icon: <FaBuilding />,
    desc: "Leo varius nunc himenaeos neque lacinia justo venenatis nibh sagittis",
  },
  {
    title: "Criminal Lawyer",
    icon: <FaBalanceScale />,
    desc: "Leo varius nunc himenaeos neque lacinia justo venenatis nibh sagittis",
  },
  {
    title: "Domestic Violence",
    icon: <FaGavel />,
    desc: "Leo varius nunc himenaeos neque lacinia justo venenatis nibh sagittis",
  },
  {
    title: "Corporate Law",
    icon: <FaBriefcase />,
    desc: "Leo varius nunc himenaeos neque lacinia justo venenatis nibh sagittis",
  },
  {
    title: "Financial Settlements",
    icon: <FaFileInvoiceDollar />,
    desc: "Leo varius nunc himenaeos neque lacinia justo venenatis nibh sagittis",
  },
  {
    title: "Digital Media Law",
    icon: <FaLaptopCode />,
    desc: "Leo varius nunc himenaeos neque lacinia justo venenatis nibh sagittis",
  },
];

const Services = () => {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden">
      {/* Background Image - Markazda bino gumbazi xira ko'rinadi */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/buld.png" // Rasmdagi gumbazli bino (Capitol)
          alt="Practice Background"
          fill
          className="object-contain "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-[#C59D5F] text-[12px] font-bold tracking-[0.4em] uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white uppercase">
            Legal Practice Areas
          </h2>
        </motion.div>

        {/* Xizmatlar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center"
            >
              {/* Ikona - Oltin rangli va hoverda harakatlanadi */}
              <div className="text-[#C59D5F] text-5xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {area.icon}
              </div>

              <h3 className="text-white text-xl font-serif mb-4 group-hover:text-[#C59D5F] transition-colors">
                {area.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
                {area.desc}
              </p>

              {/* Tagida kichik dekorativ chiziq */}
              <div className="mt-6 w-0 h-[1px] bg-[#C59D5F] group-hover:w-20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
