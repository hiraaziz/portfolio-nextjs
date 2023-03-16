"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { projectdata, projectTypes } from "./constants";

export function generateStaticParams() {
  return [
    { project: "panaverse" },
    { project: "pricing" },
    { project: "emaan" },
    { project: "quiz" },
    { project: "resume" },
    { project: "todo" },
  ];
}
const page = ({
  params,
  searchParams,
}: {
  params: { project: string };
  searchParams: { id: string };
}) => {
  const [data, setdata] = useState<projectTypes>(projectdata[0]);
  useEffect(() => {
    if (params.project == "panaverse") {
      setdata(projectdata[0]);
    } else if (params.project == "pricing") {
      setdata(projectdata[1]);
    } else if (params.project == "emaan") {
      setdata(projectdata[2]);
    }

    console.log(data);
  }, []);

  return (
    <div className=" h-screen w-full bg-slate-100 flex items-center justify-center ">
      <div className="basis-2/5 bg-pink-100 h-full"></div>
      <div className="basis-2/5 bg-purple-100 h-full">
        {/* <Image src={} alt="image" /> */}
      </div>
    </div>
  );
};

export default page;
