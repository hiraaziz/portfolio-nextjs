import Nav from "@/components/Nav";
import Image from "next/image";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav background={"tranparent"} />
      <div className="bg-secondary">
        <div className=" relative w-full h-[400px] overflow-hidden">
          <Image
            src={"/bg-portfolio.jpg"}
            alt="bg-portfolio"
            width={1200}
            height={200}
            className="absolute w-full"
          />
          <div className=" flex justify-center items-center w-full z-20 h-full absolute bg-secondary opacity-50">
            Portfolio
          </div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default layout;
