import React, { useCallback, useRef, useState } from "react";
import { BiPaint } from "react-icons/bi";
import { TbCodeDots } from "react-icons/tb";
import { FiLock } from "react-icons/fi";
import { IconContext } from "react-icons";

export default function Services() {
  const observer = useRef();

  const [Viewing, setViewing] = useState(false);

  const servicesSection = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setViewing(true);
      }
    });
    if (node) observer.current.observe(node);
  });

  return (
    <>
      <h2
        
        className="text-secondary max-w-[800px] w-full -mt-40 px-10 lg:px-0"
      >
        $ services
      </h2>
      <section
        ref={servicesSection}
        className="w-full max-w-[1480px] h-fit overflow-visible flex flex-wrap justify-center pb-40 gap-8 lg:gap-14 mt-8 px-5 md:px-10"
      >
        <div
          className={`w-[300px] h-60 flex flex-col justify-evenly bg-primary shadow-card rounded px-4 py-4 text-white transition-all duration-1000 ${
            Viewing ? "opacity-1 translate-y-0" : "opacity-0 translate-y-52"
          }`}
        >
          <div className="flex gap-3">
            <div className="services-icon-container bg-primary_light w-fit text-white hover:text-primary h-fit p-3 hover:bg-secondary transition-all duration-300 cursor-pointer">
              <IconContext.Provider value={{ className: "w-5 h-5" }}>
                <TbCodeDots />
              </IconContext.Provider>
            </div>
            <h3 className="mt-4 text-secondary">Clean code</h3>
          </div>

          <div className="mt-1 flex gap-2 text-sm">
            <p className="py-5">
            {`>>  `}
              I always write clear, concise, and modular code that is easy to
              read, understand, and maintain.
            </p>
          </div>
        </div>

        <div
          className={`w-[300px] h-60 flex flex-col justify-evenly bg-primary shadow-card rounded px-4 py-4 text-white mt-6 transition-all delay-300 duration-1000 ${
            Viewing ? "opacity-1 translate-y-0" : "opacity-0 translate-y-52"
          }`}
        >
          <div className="flex gap-3">
            <div className="services-icon-container bg-primary_light w-fit text-white hover:text-primary h-fit p-3 hover:bg-secondary transition-all duration-300 cursor-pointer">
              <IconContext.Provider value={{ className: "w-5 h-5" }}>
                <BiPaint />
              </IconContext.Provider>
            </div>
            <h3 className="mt-3 text-secondary">Creative design</h3>
          </div>
          <div className="mt-1 flex gap-2 text-sm">
            <p className="py-5">
            {`>>  `}
              I strive to blend functionality with aesthetics to deliver
              visually stunning and responsive web solutions.
            </p>
          </div>
        </div>

        <div
          className={`w-[300px] h-60 flex flex-col justify-evenly bg-primary shadow-card rounded px-4 py-4 text-white transition-all duration-1000 delay-700 ${
            Viewing ? "opacity-1 translate-y-0" : "opacity-0 translate-y-52"
          }`}
        >
          <div className="flex gap-3">
            <div className="services-icon-container bg-primary_light w-fit text-white hover:text-primary h-fit p-3.5 hover:bg-secondary transition-all duration-300 cursor-pointer">
              <IconContext.Provider value={{ className: "w-4 h-5" }}>
                <FiLock />
              </IconContext.Provider>
            </div>
            <h3 className="mt-4 text-secondary">Security & performance</h3>
          </div>
          <div className="mt-1 flex gap-2 text-sm">
            <p className="py-5">
            {`>>  `}
              I ensure that your website is not only fast and reliable, but also
              protected from potential threats and vulnerabilities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
