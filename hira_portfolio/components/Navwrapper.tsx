"use client";
import React, { useRef, useContext } from "react";
import Nav from "./Nav";
import { Navcontext } from "./Contextapi";

type scrolType = {
  title: string;
  link: string;
};

export const Navwrapper = ({ background }: { background: string }) => {
  const { expertiseRef, contactRef, servicesRef } = useContext(Navcontext);
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
  return <Nav background={background} scrollink={scrollinks} />;
};
