"use client";
import React, { useRef, useContext } from "react";
import Nav from "./Nav";
import { Navcontext } from "./Contextapi";

export const Navwrapper = ({ background }: { background: string }) => {
  const { expertiseRef, contactRef, servicesRef } = useContext(Navcontext);

  return (
    <Nav
      background={background}
      scrolexp={expertiseRef}
      scrolcontact={contactRef}
      scrolservice={servicesRef}
    />
  );
};
