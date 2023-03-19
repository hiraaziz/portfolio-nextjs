"use client";
import Nav from "@/components/Nav";
import Image from "next/image";
import React, { useRef } from "react";

type scrolType = {
  title: string;
  link: string;
};
const layout = ({ children }: { children: React.ReactNode }) => {
  const scrollinks: scrolType[] = [
    {
      title: "EXPERTISE",
      link: "/",
    },

    {
      title: "SERVICES",
      link: "/",
    },
    {
      title: "CONTACT",
      link: "/",
    },
  ];
  return (
    <>
      <Nav background={"transparent"} scrollink={scrollinks} />
      <div className="bg-secondary">
        <div className="relative w-full h-[200px] md:h-[400px] overflow-hidden">
          <Image
            src={"/bg-portfolio.png"}
            alt="bg-portfolio"
            width={1200}
            height={200}
            className="absolute w-full object-cover "
          />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default layout;
