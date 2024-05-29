import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [Scrolled, setScrolled] = useState(false);
  const [Show, setShow] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
      ) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  });

  return (
    <nav
      className={`w-full fixed top-0 left-0 flex justify-center z-[9998] bg-primary ${
        Scrolled || Show ? "shadow-xl" : ""
      }`}
    >
      <div className="w-full flex items-center justify-between px-5 md:px-10 py-4 flex-wrap md:flex-nowrap">
        <a href="#" className="text-white text-xl">
          <img src="/logo.gif" alt="" width={45} />
        </a>
        <button
          onClick={() => setShow((prev) => !prev)}
          className="block md:hidden"
        >
          <IconContext.Provider value={{ className: "w-6 h-6 text-secondary" }}>
            {Show ? <IoMdClose /> : <FiMenu />}
          </IconContext.Provider>
        </button>
        <ul
          className={`${
            Show
              ? "flex flex-col items-center w-full mt-10 max-h-[1000px]"
              : "flex flex-col items-center w-full mt-0 max-h-0 "
          } md:max-h-fit md:flex-row md:mt-0 overflow-hidden md:overflow-visible text-sm transition-all w-full h-fit md:flex md:w-fit gap-7`}
        >
          <li>
            <a href="#introduction-section" className="text-white group flex flex-nowrap items-center hover:text-secondary">
              <span className="text-secondary opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all">&#60;</span>Introduction
              <span className="text-secondary opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all flex items-center pt-0.5"><span className="text-[11px]">/</span>&#62;</span>
            </a>
          </li>
          <li>
            <a href="#services-section" className="text-white group flex flex-nowrap items-center hover:text-secondary">
              <span className="text-secondary opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all">&#60;</span>Services
              <span className="text-secondary opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all flex items-center pt-0.5"><span className="text-[11px]">/</span>&#62;</span>
            </a>
          </li>
          <li>
            <a href="#biography-section" className="text-white group flex flex-nowrap items-center hover:text-secondary">
              <span className="text-secondary opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all">&#60;</span>Biography
              <span className="text-secondary opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all flex items-center pt-0.5"><span className="text-[11px]">/</span>&#62;</span>
            </a>
          </li>
          <li>
            <a href="#projects-section" className="text-white group flex flex-nowrap items-center hover:text-secondary">
              <span className="text-secondary opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all">&#60;</span>Projects
              <span className="text-secondary opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all flex items-center pt-0.5"><span className="text-[11px]">/</span>&#62;</span>
            </a>
          </li>
          <li>
            <a href="#contact-section" className="text-white group flex flex-nowrap items-center hover:text-secondary">
              <span className="text-secondary opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all">&#60;</span>Contact
              <span className="text-secondary opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all flex items-center pt-0.5"><span className="text-[11px]">/</span>&#62;</span>
            </a>
          </li>
          <li className="w-fit h-fit overflow-visible">
          <div className="w-fit h-fit bg-secondary rounded">
            <a
              href="/CV_KarimBouaouina.pdf"
              target="_blank"
              className="text-secondary bg-primary px-3 py-1 md:px-4 md:py-1.5 lg:px-8 lg:py-2.5 text-sm md:text-xs font-semibold lg:font-bold flex gap-3 items-center transition-all hover:translate-x-0.5 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer border rounded border-secondary "
            >
              Resume
            </a>
          </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
