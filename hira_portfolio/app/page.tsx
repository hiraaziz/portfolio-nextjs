import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import Portfolio from "@/components/Portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-secondary">
      <Banner />
      <Expertise />
      <Portfolio />
    </div>
  );
}
