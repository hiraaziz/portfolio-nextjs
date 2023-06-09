"use client";
import { RefObject } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import { useWindowScroll } from "react-use";

type navpropsType = {
  background: string;
  scrollinks?: {
    title: string;
    link: RefObject<HTMLDivElement>;
  }[];
  scrollink?: {
    title: string;
    link: string;
  }[];
};

export default function Nav({
  background,
  scrollinks,
  scrollink,
}: navpropsType) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { y } = useWindowScroll();
  const [shadow, setshadow] = useState<string>("shadow-none");
  const [bgColor, setBgColor] = useState<string>("transparent");

  useEffect(() => {
    if (y > 100) {
      setshadow("shadow-md");
      setBgColor("white");
    } else {
      setshadow("shadow-none");
      setBgColor("transparent");
    }
  }, [y]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  type navtypes = {
    title: string;
    link: string;
  };
  const navlinks: navtypes[] = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "PROJECTS",
      link: "/projects",
    },
  ];

  return (
    <nav className={`w-full fixed bg-${background} ${shadow} snap-y z-40`}>
      <div className={`h-14 md:h-20 bg bg-${bgColor}`}>
        <div className="hidden md:flex justify-evenly items-center h-full w-full ">
          <h1 className=" basis-1/4 w-full text-center text-black text-2xl">
            Hira.
          </h1>

          <div className="flex basis-1/3 list-none justify-evenly ">
            {navlinks.map((nav: navtypes, ind) => (
              <Link href={nav.link} key={ind}>
                <li
                  key={ind}
                  className="basis-1/6 border-b-2 border-transparent text-center cursor-pointer
               hover:border-dark-primary transition-all duration-200 
               lg:text-[13px] md:text-[9px] text-textlight font-semibold tracking-widest "
                >
                  {nav.title}
                </li>
              </Link>
            ))}
            {scrollinks &&
              scrollinks.map((nav, ind) => (
                <button
                  onClick={() =>
                    nav.link.current?.scrollIntoView({
                      block: "start",
                      inline: "start",
                      behavior: "smooth",
                    })
                  }
                  key={ind}
                >
                  <li
                    key={ind}
                    className="basis-1/6 border-b-2 border-transparent text-center cursor-pointer
               hover:border-dark-primary transition-all duration-200 
               lg:text-[13px] md:text-[9px] text-textlight font-semibold tracking-widest "
                  >
                    {nav.title}
                  </li>
                </button>
              ))}
            {scrollink &&
              scrollink.map((nav, ind) => (
                <button key={ind}>
                  <Link href={nav.link} key={ind}>
                    <li
                      key={ind}
                      className="basis-1/6 border-b-2 border-transparent text-center cursor-pointer
                    hover:border-dark-primary transition-all duration-200 
                     lg:text-[13px] md:text-[9px] text-textlight font-semibold tracking-widest "
                    >
                      {nav.title}
                    </li>
                  </Link>
                </button>
              ))}
          </div>

          <div className="flex basis-1/4 justify-center space-x-1 text-textlight">
            <a
              className="border-2 border-text p-2 rounded-xl hover:bg-light-primary hover:border-light-primary hover:text-white"
              href="#"
            >
              <AiFillFacebook className="w-4 h-4 rounded-full" />
            </a>
            <a
              className="border-2 border-text p-2 rounded-xl hover:bg-light-primary hover:border-light-primary hover:text-white"
              href="https://www.linkedin.com/in/hira-a-3b9325169/"
            >
              <AiFillLinkedin className="w-4 h-4" />
            </a>
            <a
              className="border-2 border-text p-2 rounded-xl hover:bg-light-primary hover:border-light-primary hover:text-white"
              href="https://github.com/hiraaziz?tab=repositories"
            >
              <AiFillGithub className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex justify-between md:hidden">
          <h1 className=" basis-1/4 text-center text-text text-2xl">Hira.</h1>
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-textlight
           focus:outline-none focus:ring-2 
           focus:ring-inset focus:ring-white"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {menuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden flex justify-end `}
      >
        <CSSTransition in={menuOpen} timeout={2000} classNames="fade">
          <div className="list-none h-fit py-2 m-auto w-900  bg-[#ffdada] rounded-lg">
            {navlinks.map((nav: navtypes, ind) => (
              <li
                key={ind}
                className="basis-1/12 border-b-2 border-transparent text-center cursor-pointer
               hover:border-dark-primary hover:basis-2/12 transition-all duration-200 
               text-[13px] text-slate-600 font-semibold tracking-widest"
              >
                <Link href={nav.link} key={ind}>
                  {nav.title}
                </Link>
              </li>
            ))}
            <div className="flex flex-col">
              {scrollinks &&
                scrollinks.map((nav, ind) => (
                  <button
                    onClick={() =>
                      nav.link.current?.scrollIntoView({
                        block: "start",
                        inline: "start",
                        behavior: "smooth",
                      })
                    }
                    key={ind}
                  >
                    <li
                      key={ind}
                      className=" basis-1/12 border-b-2 border-transparent text-center cursor-pointer
                  hover:border-dark-primary hover:basis-2/12 transition-all duration-200 
                  text-[13px] text-slate-600 font-semibold tracking-widest"
                    >
                      {nav.title}
                    </li>
                  </button>
                ))}
              {scrollink &&
                scrollink.map((nav, ind) => (
                  <button key={ind}>
                    <Link href={nav.link} key={ind}>
                      <li
                        key={ind}
                        className=" basis-1/12 border-b-2 border-transparent text-center cursor-pointer
                  hover:border-dark-primary hover:basis-2/12 transition-all duration-200 
                  text-[13px] text-slate-600 font-semibold tracking-widest"
                      >
                        {nav.title}
                      </li>
                    </Link>
                  </button>
                ))}
            </div>
          </div>
        </CSSTransition>
      </div>
    </nav>
  );
}
