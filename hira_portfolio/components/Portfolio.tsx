"use client";
import React, { useState } from "react";
import Image from "next/image";

const work = [
  {
    title: "Working keyboard",
    type: "nextjs",
    img: "/pic1.png",
  },
  {
    title: "The micro Headphones",
    type: "reactjs",
    img: "/pic2.png",
  },
];
const Portfolio = () => {
  const [portfolio, setPortfolio] = useState();

  function setPortfolios(value: string) {
    if (value == "all") {
    }
  }
  return (
    <section className="flex flex-col items-center w-full h-screen">
      <h1 className="text-3xl font-bold tracking-widest text-text">
        MY PORTFOLIO
      </h1>
      <Image src={"/line.png"} alt="line" width={300} height={10} />
      <p className="text-md font-normal text-textlight max-w-[80%] lg:max-w-[600px] text-center mb-20">
        Obviously I'm a Web Designer. Experienced with all stages of the
        development cycle for dynamic web projects.
      </p>

      <div>
        <button
          onClick={() => setPortfolios("all")}
          className={`${
            portfolio == "all"
              ? "bg-light-primary text-white border-light-primary"
              : "bg-transparent"
          } border border-slate-300 text-text px-4 py-2 rounded-lg`}
        >
          All
        </button>
        <button>Nextjs</button>
        <button>Reactjs</button>
        <button>UI</button>
      </div>
    </section>
  );
};

export default Portfolio;
