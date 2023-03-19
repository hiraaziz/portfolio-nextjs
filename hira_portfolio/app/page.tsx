"use client";
import React, { useRef } from "react";
import Banner from "@/components/Banner";
import Expertise from "@/components/expertise/Expertise";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Services from "@/components/Services";

type scrolType = {
  title: string;
  link: React.RefObject<HTMLDivElement>;
};
export default function Home() {
  const expertiseRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const scrollinks: scrolType[] = [
    {
      title: "EXPERTISE",
      link: expertiseRef,
    },

    {
      title: "SERVICES",
      link: contactRef,
    },
    {
      title: "CONTACT",
      link: servicesRef,
    },
  ];
  return (
    <div className=" bg-secondary">
      <Nav background={"primarylight"} scrollinks={scrollinks} />

      <Banner />
      <Expertise scrol={expertiseRef} />
      <Portfolio />
      <Services scrol={servicesRef} />
      <Contact scrol={contactRef} />
    </div>
  );
}
