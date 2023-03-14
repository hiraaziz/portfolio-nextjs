"use client";
import Image from "next/image";
import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hira Aziz", "Hira Aziz"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="w-full max-h-[140vh] lg:h-[100vh] bg-primarylight">
      <div className="w-full h-full flex flex-col lg:flex-row ">
        <div
          ref={el}
          className="w-80 self-center text-6xl text-text font-bold tracking-widest z-30 mt-20 lg:translate-x-60"
        >
          H
        </div>
        <div className=" md:basis-1/3 mt-40 lg:ml-14 xl:translate-x-0  flex justify-center items-end">
          <Image
            src={"/pic10.png"}
            alt="pic"
            width={600}
            height={600}
            className="absolute z-10"
          />
          <Image
            src={"/image2rm.png"}
            alt="pic"
            width={400}
            height={400}
            className="hidden md:block absolute z-20 translate-x-48 -translate-y-80"
          />

          <div
            className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[700px]
             lg:h-[350x] bg-light-primary translate-y-24 lg:translate-y-0  self-end rounded-full 
             lg:rounded-none lg:rounded-tl-full lg:rounded-tr-full  z-0"
          />
        </div>

        <motion.div
          initial={{ x: "0px", opacity: 0 }}
          animate={{ x: "-200px", opacity: 1 }}
          transition={{ type: "spring", duration: 1.5 }}
          className=" max-w-[250px] sm:max-w-[400px] lg:basis-1/4 flex-shrink-1 -mr-[400px] mb-10 h-52 flex flex-col  
          justify-between self-center translate-y-6  backdrop-blur-lg  lg:-translate-x-72 lg:mt-72
          bg-white/40 rounded-lg p-4 tracking-widest z-20 text-text"
        >
          <h1 className="text-xl font-medium">
            I'm Professional Web Developer
          </h1>
          <p className="font-extralight">
            Obviously I'm a Web Designer. Web Developer with over 3 years of
            experience.
          </p>
          <button className="bg-light-primary hover:bg-[#be2e2e] px-4 py-2 rounded-lg w-32 text-white">
            Hire me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
// .typewriter h1 {
//   overflow: hidden;
//   white-space: nowrap;
//   margin: 0 auto;
//   animation: typing 3.5s steps(30, end), blink-caret .75s step-end infinite;
//   font-size: 80px;
//   font-family: Arial, Helvetica, sans-serif;
//   color: #c0164f;
// }

// @keyframes typing {
//   from {
//     width: 0
//   }
//   to {
//     width: 100%
//   }
// }
