import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiFigma } from "react-icons/fi";
import { GrReactjs } from "react-icons/gr";
import { SiAdobeacrobatreader } from "react-icons/si";

const Services = ({ scrol }: { scrol: React.LegacyRef<HTMLDivElement> }) => {
  return (
    <section
      ref={scrol}
      className="bg-backgroundtwo mt-20 flex flex-col items-center justify-center w-full h-[160vh] md:h-screen "
    >
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
        className=" text-3xl font-bold tracking-widest text-text text-center"
      >
        WHAT DO I OFFER ?
      </motion.h1>
      <Image src={"/line.png"} alt="line" width={300} height={10} />
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="text-md font-normal text-textlight max-w-[80%] lg:max-w-[600px] text-center mb-20"
      >
        Obviously Im a Web Designer. Experienced with all stages of the
        development cycle for dynamic web projects.
      </motion.p>

      <div className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4 px-2">
        <div
          className="relative bg-[#F9FAFD] flex flex-col basis-1/4 justify-center items-center 
          text-center border border-text rounded-md space-y-4 p-4 h-72 hover:bg-white  
          hover:border-b-4 hover:border-b-[#E54B4B] transition-all duration-200 cursor-text 
          hover:shadow-lg "
        >
          <FiFigma className=" w-10 h-10" />
          <h1 className="font-semibold text-xl">UX/UI Design</h1>
          <p className="font-medium text-sm text-gray-400 w-3/4">
            It is a long established fact that a reader will be distracted by
            the when looking at its layout.
          </p>
        </div>

        <div
          className="relative bg-[#F9FAFD] flex flex-col basis-1/4 justify-center items-center 
          text-center border border-text rounded-md space-y-4 p-4 h-72 hover:bg-white  
          hover:border-b-4 hover:border-b-[#E54B4B] transition-all duration-200 cursor-text 
          hover:shadow-lg"
        >
          <GrReactjs className="text-secondary w-10 h-10" />
          <h1 className="font-semibold text-xl">UX/UI Design</h1>
          <p className="font-medium text-sm text-gray-400 w-3/4">
            It is a long established fact that a reader will be distracted by
            the when looking at its layout.
          </p>
        </div>
        <div
          className="relative bg-[#F9FAFD] flex flex-col basis-1/4 justify-center items-center 
          text-center border border-text rounded-md space-y-4 p-4 h-72 hover:bg-white  
          hover:border-b-4 hover:border-b-[#E54B4B] transition-all duration-200 cursor-text 
          hover:shadow-lg"
        >
          <SiAdobeacrobatreader className="text-secondary w-10 h-10" />
          <h1 className="font-semibold text-xl">UX/UI Design</h1>
          <p className="font-medium text-sm text-gray-400 w-3/4">
            It is a long established fact that a reader will be distracted by
            the when looking at its layout.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
