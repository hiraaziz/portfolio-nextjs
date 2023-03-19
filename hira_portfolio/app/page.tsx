"use client";
import React, { useContext } from "react";
import Banner from "@/components/Banner";
import Expertise from "@/components/expertise/Expertise";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import Contextapi, { Navcontext } from "@/components/Contextapi";

type scrolType = {
  title: string;
  link: React.RefObject<HTMLDivElement>;
};
export default function Home() {
  const { expertiseRef, contactRef, servicesRef } = useContext(Navcontext);
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
