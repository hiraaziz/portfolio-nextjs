import Banner from "@/components/Banner";
import Expertise from "@/components/expertise/Expertise";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className=" bg-secondary">
      <Nav background={"primarylight"} />
      <Banner />
      <Expertise />
      <Portfolio />
      <Contact />
    </div>
  );
}
