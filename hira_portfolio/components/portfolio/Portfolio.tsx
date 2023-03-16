"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TfiReload } from "react-icons/tfi";
import PortfolioCards from "./PortfolioCards";

const Portfolio = () => {
  return (
    <section className="bg-backgroundtwo  flex flex-col items-center w-full h-full relative mt-28 lg:mt-0 ">
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
        className=" relative text-3xl font-bold tracking-widest text-text"
      >
        My Portfolio
      </motion.h1>
      <Image src={"/line.png"} alt="line" width={300} height={10} />
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="text-md font-normal text-textlight max-w-[80%] lg:max-w-[600px] text-center mb-20"
      >
        Obviously Im a Web Designer. Experienced with all stages of the
        development cycle for dynamic web projects.
      </motion.p>
      <PortfolioCards option={"reactjs"} />
      <Link href="/projects">
        <button
          className="flex justify-evenly mt-20 text-[#E54B4B] border border-1 border-[#E54B4B] py-2  
      rounded-md w-40 hover:bg-[#E54B4B] hover:text-white hover:shadow-md hover:shadow-[#ffb1b1]
      transition-all duration-200"
        >
          View More
          <TfiReload />
        </button>
      </Link>
    </section>
  );
};

export default Portfolio;
