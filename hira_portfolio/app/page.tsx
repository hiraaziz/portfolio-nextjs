"use client";
import React, { useRef, useContext } from "react";
import Banner from "@/components/Banner";
import Expertise from "@/components/expertise/Expertise";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import { Navwrapper } from "@/components/Navwrapper";
import Contextapi, { Navcontext } from "@/components/Contextapi";

export default function Home() {
  const { expertiseRef, contactRef, servicesRef } = useContext(Navcontext);

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
