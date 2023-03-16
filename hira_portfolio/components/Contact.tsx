"use client";
import React from "react";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { motion, spring } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: spring, duration: 1.5 }}
        className=" relative text-3xl font-bold tracking-widest text-text"
      >
        CONTACT ME
      </motion.h1>
      <Image src={"/line.png"} alt="line" width={300} height={10} />
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: spring, duration: 1.5 }}
        className="text-md font-normal text-textlight max-w-[80%] lg:max-w-[600px] text-center mb-20"
      >
        Obviously I'm a Web Designer. Experienced with all stages of the
        development cycle for dynamic web projects.
      </motion.p>

      <div className="flex justify-evenly w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: spring, duration: 1.5 }}
          className=" flex flex-col justify-center items-center space-y-4"
        >
          <BsTelephone className="w-10 h-10 text-text" />
          <h1 className="font-medium text-xl text-text">PHONE</h1>
          <p className="max-w-xs text-center text-slate-500">
            Promising development turmoil inclusive education transformative
            community
          </p>
          <p className="text-[#E54B4B]">03369104088</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: spring, duration: 1.5 }}
          className=" flex flex-col justify-center items-center space-y-4"
        >
          <AiOutlineMail className="w-10 h-10 text-text" />
          <h1 className="font-medium text-xl text-text">EMAIL</h1>
          <p className="max-w-xs text-center text-slate-500">
            Promising development turmoil inclusive education transformative
            community
          </p>
          <p className="text-[#E54B4B]">hiraaziz1998@gmail.com</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: spring, duration: 1.5 }}
          className=" flex flex-col justify-center items-center space-y-4"
        >
          <CiLocationOn className="w-10 h-10 text-text" />
          <h1 className="font-medium text-xl text-text">LOCATION</h1>
          <p className="max-w-xs text-center text-slate-500">
            Promising development turmoil inclusive education transformative
            community
          </p>
          <p className="text-[#E54B4B]">Islamabad, Paksitan</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
