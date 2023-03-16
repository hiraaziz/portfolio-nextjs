import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#3C4858] relative h-72">
      <div className="text-[#C6C9CE] flex flex-col justify-center items-center w-full h-full">
        <h1 className="2xl font-semibold -translate-y-12">HIRA.</h1>
        <p className="md font-medium -translate-y-12 max-w-md text-center">
          Obviously I'm a Web Designer. Experienced with all stages of the
          development cycle for dynamic web projects.
        </p>
        <div className="border-t-2 border-slate-500 w-full text-center mt-5 translate-y-16 py-4">
          <p> © 2023 HIRA. Design by Hira Aziz</p>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Footer;
