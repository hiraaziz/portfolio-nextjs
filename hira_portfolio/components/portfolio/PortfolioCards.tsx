"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TfiReload } from "react-icons/tfi";
import { work, worktype } from "./constant";
import Link from "next/link";

const PortfolioCards = ({ option }: any) => {
  const [portfolio, setPortfolio] = useState<string>(option);
  const [data, setdata] = useState<worktype[]>(work);
  let filterdata: worktype[];

  useEffect(() => {
    if (option == "all") {
      setPortfolio("all");
      setdata(work);
    } else if (option == "reactjs") {
      filterdata = work.filter((value) => value.type == "reactjs");
      setPortfolio("reactjs");
      setdata(filterdata);
    }
  }, []);

  function setPortfolios(value: string) {
    if (value == "all") {
      setPortfolio("all");
      setdata(work);
    } else if (value == "nextjs") {
      filterdata = work.filter((value) => value.type == "nextjs");
      setPortfolio("nextjs");
      setdata(filterdata);
    } else if (value == "reactjs") {
      filterdata = work.filter((value) => value.type == "reactjs");
      setPortfolio("reactjs");
      setdata(filterdata);
    } else if (value == "ui") {
      filterdata = work.filter((value) => value.type == "ui");
      setPortfolio("ui");
      setdata(filterdata);
    }
  }
  return (
    <section className=" flex flex-col items-center w-full h-full relative mt-28 lg:mt-0 ">
      <div className="flex space-x-2 text-sm flex-wrap">
        {option == "all" ? (
          <button
            onClick={() => setPortfolios("all")}
            className={`${
              portfolio == "all"
                ? "bg-light-primary text-white border-none transition-all duration-200 hover:shadow-sm hover:shadow-[#ffb1b1]"
                : "bg-transparent text-text"
            } border border-slate-300 py-2 rounded-md w-28`}
          >
            All
          </button>
        ) : null}
        <button
          onClick={() => setPortfolios("nextjs")}
          className={`${
            portfolio == "nextjs"
              ? "bg-light-primary text-white border-none transition-all duration-200 hover:shadow-sm hover:shadow-[#ffb1b1]"
              : "bg-transparent text-text"
          } border border-slate-300 py-2 rounded-md w-28`}
        >
          Nextjs
        </button>
        <button
          onClick={() => setPortfolios("reactjs")}
          className={`${
            portfolio == "reactjs"
              ? "bg-light-primary text-white border-light-primary transition-all duration-200 hover:shadow-sm hover:shadow-[#ffb1b1]"
              : "bg-transparent text-text"
          } border border-slate-300 py-2 rounded-md w-28`}
        >
          Reactjs
        </button>
        <button
          onClick={() => setPortfolios("ui")}
          className={`${
            portfolio == "ui"
              ? "bg-light-primary text-white border-light-primary transition-all duration-200 hover:shadow-sm hover:shadow-[#ffb1b1]"
              : "bg-transparent text-text"
          } border border-slate-300  px-6 py-2 rounded-md w-28`}
        >
          UI
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center w-800 h-full ">
        {data.map((data, ind) => (
          <motion.div
            key={ind}
            className=" flex flex-col justify-self-center self-center shadow-lg mt-10 mr-10
            hover:scale-110 transition-all duration-300 hover:shadow-2xl overflow-hidden"
          >
            <div key={ind} className="w-full h-[300px]">
              <Image
                src={data.img}
                alt="img"
                width={300}
                height={300}
                className="rounded-t-md transition-all duration-300 hover:scale-110 object-cover border border-t-text"
              />
            </div>

            <div className="bg-white z-10 px-6rounded-b-md py-4 text-slate-600 tracking-widest flex flex-col justify-center items-center ">
              <Link href={data.routelink}>
                <h1 className="text-xl cursor-pointer">{data.title}</h1>
              </Link>
              <p className="text-sm py-2">{data.type}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioCards;
