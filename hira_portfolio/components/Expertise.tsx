"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, spring } from "framer-motion";

const frontend = [
  {
    title: "React.js",
    percent: 70,
  },
  {
    title: "Typescript",
    percent: 60,
  },
  {
    title: "Javascript",
    percent: 80,
  },
];
const design = [
  {
    title: "Figma",
    percent: 70,
  },
  {
    title: "ChakraUI",
    percent: 80,
  },
  {
    title: "Tailwind css",
    percent: 80,
  },
];
const backend = [
  {
    title: "Node.js",
    percent: 60,
  },
  {
    title: "Mongo DB",
    percent: 70,
  },
  {
    title: "AWS",
    percent: 30,
  },
];
const Expertise = () => {
  const [expert, setExpert] = useState("design");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [progress]);

  return (
    <section className="flex flex-col mt-20 md:mt-0 md:flex-row justify-center h-full items-center lg:h-screen bg-secondary w-full">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: spring, duration: 1.5 }}
        className="basis-14/12"
      >
        <Image
          src={"/3dimage0bgrm.png"}
          alt="pic4"
          width={700}
          height={1400}
          className="object-cover"
        />
      </motion.div>

      <motion.div className="flex flex-col justify-center items-center basis-8/12 w-full  h-full ">
        <motion.h1
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: spring, duration: 1.5 }}
          className=" relative text-3xl font-bold tracking-widest text-text"
        >
          Work Expertise
        </motion.h1>
        <Image src={"/line.png"} alt="line" width={300} height={10} />
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: spring, duration: 1.5 }}
          className="text-md font-normal text-textlight max-w-[80%] lg:max-w-[600px] text-center mb-20"
        >
          Obviously I'm a Web Designer. Experienced with all stages of the
          development cycle for dynamic web projects.
        </motion.p>

        <div className="flex w-10/12 justify-evenly">
          <div className="flex flex-col self-center basis-1/4 space-y-4">
            <button
              onClick={() => setExpert("design")}
              className={`${
                expert == "design"
                  ? "bg-light-primary text-white border-light-primary"
                  : "bg-transparent text-text"
              } border border-slate-300  px-4 py-2 rounded-lg`}
            >
              Designing
            </button>
            <button
              onClick={() => setExpert("frontend")}
              className={`${
                expert == "frontend"
                  ? "bg-light-primary text-white border-light-primary"
                  : "bg-transparent text-text"
              } border border-slate-300  px-4 py-2 rounded-lg`}
            >
              Frontend
            </button>
            <button
              onClick={() => setExpert("backend")}
              className={`${
                expert == "backend"
                  ? "bg-light-primary text-white border-light-primary"
                  : "bg-transparent text-text"
              } border border-slate-300  px-4 py-2 rounded-lg`}
            >
              Backend
            </button>
          </div>
          <div className="basis-3/5 space-y-2">
            {expert == "design"
              ? design.map((link, ind) => (
                  <>
                    <div className="text-xs text-gray-500 text-right">{`${link.title}%`}</div>
                    <div className="w-full h-4 rounded-lg bg-gray-300 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${link.percent}%` }}
                        transition={{ type: "spring", duration: 2 }}
                        className="h-full bg-light-primary"
                      />
                    </div>
                  </>
                ))
              : null}
            {expert == "frontend"
              ? frontend.map((link, ind) => (
                  <>
                    <div className="text-xs text-gray-500 text-right">{`${link.title}%`}</div>
                    <div className="w-full h-4 rounded-lg bg-gray-300 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${link.percent}%` }}
                        transition={{ type: "spring", duration: 2 }}
                        className="h-full bg-light-primary"
                      />
                    </div>
                  </>
                ))
              : null}
            {expert == "backend"
              ? backend.map((link, ind) => (
                  <>
                    <div className="text-xs text-gray-500 text-right">{`${link.title}%`}</div>
                    <div className="w-full h-4 rounded-lg bg-gray-300 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${link.percent}%` }}
                        transition={{ type: "spring", duration: 2 }}
                        className="h-full bg-light-primary"
                      />
                    </div>
                  </>
                ))
              : null}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Expertise;

// {expert == "design"
//               ? design.map((link, ind) => (
//                   <>
//                     <h1 className="-mb-6">{link.title}</h1>
//                     <ProgressBar
//                       width="auto"
//                       height="12px"
//                       rect
//                       fontColor="gray"
//                       percentage={link.percent}
//                       rectPadding="1px"
//                       rectBorderRadius="20px"
//                       trackPathColor="#E9ECEF"
//                       trackBorderColor="white"
//                       defColor={{
//                         fair: "#E54B4B",
//                         good: "#E54B4B",
//                         excellent: "#E54B4B",
//                         poor: "#E54B4B",
//                       }}
//                     />
//                   </>
//                 ))
//               : null}
//             {expert == "frontend"
//               ? frontend.map((link, ind) => (
//                   <>
//                     <h1 className="-mb-6">{link.title}</h1>
//                     <ProgressBar
//                       width="auto"
//                       height="12px"
//                       rect
//                       fontColor="gray"
//                       percentage={link.percent}
//                       rectPadding="1px"
//                       rectBorderRadius="20px"
//                       trackPathColor="#E9ECEF"
//                       trackBorderColor="white"
//                       defColor={{
//                         fair: "#E54B4B",
//                         good: "#E54B4B",
//                         excellent: "#E54B4B",
//                         poor: "#E54B4B",
//                       }}
//                     />
//                   </>
//                 ))
//               : null}
//             {expert == "backend"
//               ? backend.map((link, ind) => (
//                   <>
//                     <h1 className="-mb-6">{link.title}</h1>
//                     <ProgressBar
//                       width="auto"
//                       height="12px"
//                       rect
//                       fontColor="gray"
//                       percentage={link.percent}
//                       rectPadding="1px"
//                       rectBorderRadius="20px"
//                       trackPathColor="#E9ECEF"
//                       trackBorderColor="white"
//                       defColor={{
//                         fair: "#E54B4B",
//                         good: "#E54B4B",
//                         excellent: "#E54B4B",
//                         poor: "#E54B4B",
//                       }}
//                     />
//                   </>
//                 ))
//               : null}
