"use client";
import React, { createContext, useRef } from "react";

export const Navcontext = createContext<null | any>(null);
const Contextapi = ({ children }: { children: React.ReactNode }) => {
  const expertiseRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Navcontext.Provider value={{ expertiseRef, contactRef, servicesRef }}>
        {children}
      </Navcontext.Provider>
    </div>
  );
};

export default Contextapi;
