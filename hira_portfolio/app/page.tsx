"use client";
import React, { useRef } from "react";
import Banner from "@/components/Banner";
import Expertise from "@/components/expertise/Expertise";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Services from "@/components/Services";

export default function Home() {
  const expertiseRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  return (
    <div className=" bg-secondary">
      <Nav
        background={"primarylight"}
        scrolexp={expertiseRef}
        scrolcontact={contactRef}
        scrolservice={servicesRef}
      />
      <Banner />
      <Expertise scrol={expertiseRef} />
      <Portfolio />
      <Services scrol={servicesRef} />
      <Contact scrol={contactRef} />
    </div>
  );
}
