"use client";
import Image from "next/image";
import { projectdetail, projectTypes } from "./constants";
import { motion } from "framer-motion";

export function generateStaticParams() {
  const projectParams: projectTypes[] = projectdetail();
  return projectParams.map((p) => ({
    project: p.pagename,
  }));
}
const Page = ({ params }: { params: { project: string } }) => {
  const [singleProject]: projectTypes[] = projectdetail(params.project);
  console.log(singleProject);
  return (
    <div
      className="relative min-h-[100vh] w-full flex flex-col justify-start  md:flex-row md:items-start
     md:justify-center mt-20 pb-[100px] md:pb-0"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="w-full md:basis-2/5 h-full order-2 md:order-1 flex flex-col items-center md:items-center"
      >
        <h1 className="py-4 px-4 md:px-0 font-semibold tracking-wider text-text text-2xl">
          {singleProject?.title}
        </h1>
        <div className="w-96 h-[1px] bg-slate-300" />
        <p className="py-4 px-4 md:px-0 font-medium text-sm text-gray-400 leading-loose w-96">
          {singleProject?.description}
        </p>

        <div className="max-w-96 h-fit bg-[#F9FAFD] p-6 mx-4 md:mx-0 rounded-md">
          <h1 className="py-4 font-semibold tracking-wider text-2xl">
            Project Info:
          </h1>
          <div className="max-w-72 h-[1px] bg-slate-200" />
          <p className="py-3">
            <span className="font-semibold">Category:</span>{" "}
            {singleProject.category}
          </p>
          <p className="py-3">
            <span className="font-semibold">Subject:</span>{" "}
            {singleProject.subject}
          </p>
          <p className="py-3">
            <span className="font-semibold">Webiste:</span>{" "}
            <a>{singleProject.website}</a>
          </p>
          <p className="py-3">
            <span className="font-semibold">Github:</span>{" "}
            {singleProject.github}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="flex w-full justify-center md:basis-2/5 h-fit order-1 md:order-2"
      >
        <Image
          src={singleProject.img}
          alt="image"
          width={400}
          height={400}
          className=" shadow-lg rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default Page;
