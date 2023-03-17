"use client";
import React, { useRef } from "react";
import Nav from "./Nav";

export const Navwrapper = ({ background }: { background: string }) => {
  const expertiseRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  return (
    <Nav
      background={background}
      scrolexp={expertiseRef}
      scrolcontact={contactRef}
      scrolservice={servicesRef}
    />
  );
};
