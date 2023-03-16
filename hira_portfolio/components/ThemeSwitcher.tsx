"use client";
import React, { useState } from "react";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

function ThemeSwitcher({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  function toggleMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <button
        onClick={toggleMode}
        className=" fixed z-50 translate-y-20 border-2 border-text p-2 rounded-xl text-text"
      >
        {isDarkMode ? <BsToggle2On /> : <BsToggle2Off />}
      </button>
      {children}
    </div>
  );
}

export default ThemeSwitcher;
