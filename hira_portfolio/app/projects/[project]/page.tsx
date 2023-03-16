"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { projectdata, projectTypes } from "./constants";
import { motion } from "framer-motion";

export function generateStaticParams() {
  return [
    { project: "panaverse" },
    { project: "pricing" },
    { project: "emaan" },
    { project: "quiz" },
    { project: "resume" },
    { project: "todo" },
  ];
}
const page = ({
  params,
  searchParams,
}: {
  params: { project: string };
  searchParams: { id: string };
}) => {
  const [data, setdata] = useState<projectTypes>(projectdata[0]);
  useEffect(() => {
    if (params.project == "panaverse") {
      setdata(projectdata[0]);
    } else if (params.project == "pricing") {
      setdata(projectdata[1]);
    } else if (params.project == "emaan") {
      setdata(projectdata[2]);
    } else if (params.project == "quiz") {
      setdata(projectdata[3]);
    } else if (params.project == "resume") {
      setdata(projectdata[4]);
    } else if (params.project == "todo") {
      setdata(projectdata[5]);
    }
    console.log(data);
  }, []);

  return (
    <div
      className="relative h-[100vh] w-full flex flex-col justify-start  md:flex-row md:items-start
     md:justify-center mt-20 mb-[450px] md:mb-0"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="w-full md:basis-2/5 h-full order-2 md:order-1 flex flex-col items-center md:items-center"
      >
        <h1 className="py-4 px-4 md:px-0 font-semibold tracking-wider text-text text-2xl">
          {data.title}
        </h1>
        <div className="w-96 h-[1px] bg-slate-300" />
        <p className="py-4 px-4 md:px-0 font-medium text-sm text-gray-400 leading-loose w-96">
          {data.description}
        </p>

        <div className="max-w-96 h-fit bg-[#F9FAFD] p-6 mx-4 md:mx-0 rounded-md">
          <h1 className="py-4 font-semibold tracking-wider text-2xl">
            Project Info:
          </h1>
          <div className="max-w-72 h-[1px] bg-slate-200" />
          <p className="py-3">
            <span className="font-semibold">Category:</span> {data.category}
          </p>
          <p className="py-3">
            <span className="font-semibold">Subject:</span> {data.subject}
          </p>
          <p className="py-3">
            <span className="font-semibold">Webiste:</span>{" "}
            <a>{data.website}</a>
          </p>
          <p className="py-3">
            <span className="font-semibold">Github:</span> {data.github}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="flex w-full justify-center md:basis-2/5 h-fit order-1 md:order-2"
      >
        <Image
          src={data.img}
          alt="image"
          width={400}
          height={400}
          className=" shadow-lg rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default page;
