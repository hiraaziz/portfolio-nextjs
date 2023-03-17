"use client";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Image from "next/image";
import React, { useRef } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const expertiseRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Nav
        background={"transparent"}
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
        <Contact scrol={contactRef} />
      </div>
    </>
  );
};

export default layout;
