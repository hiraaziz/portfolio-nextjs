"use client";
import React, { useState } from "react";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

function ThemeSwitcher({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <button
        onClick={toggleMode}
        className=" fixed z-50 ml-[80%] lg:mt-[22px] sm:mt-[4px] border-2 border-text p-2 rounded-xl text-text"
      >
        {isDarkMode ? <BsToggle2On /> : <BsToggle2Off />}
      </button>
      {children}
    </div>
  );
}

export default ThemeSwitcher;
