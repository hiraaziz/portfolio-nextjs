import Nav from "@/components/Nav";
import Image from "next/image";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav background={"tranparent"} />
      <div className="bg-secondary">
        <div className="relative w-full h-[200px] md:h-[400px] overflow-hidden">
          <Image
            src={"/bg-portfolio.png"}
            alt="bg-portfolio"
            width={1200}
            height={200}
            className="absolute w-full object-cover "
          />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default layout;
