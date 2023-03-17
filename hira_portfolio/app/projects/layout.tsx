"use client";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Image from "next/image";
import React, { useRef, useContext } from "react";
import { Navwrapper } from "@/components/Navwrapper";
import { Navcontext } from "@/components/Contextapi";
const layout = ({ children }: { children: React.ReactNode }) => {
  const { expertiseRef, contactRef, servicesRef } = useContext(Navcontext);
  return (
    <>
      <Nav
        background={"primarylight"}
        scrolexp={expertiseRef}
        scrolcontact={contactRef}
        scrolservice={servicesRef}
      />
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
