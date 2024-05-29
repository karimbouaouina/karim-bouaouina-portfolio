import React, { useCallback, useRef, useState } from "react";

export default function Biography() {
  const observer = useRef();
  const indicatorRef = useRef();

  const [TabIndex, setTabIndex] = useState(0);
  const [Viewing, setViewing] = useState(false);

  const biographySection = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setViewing(true);
      }
    });
    if (node) observer.current.observe(node);
  });

  const handleBiographyChangeTab = (index) => {
    setTabIndex(index);
    indicatorRef.current.style.top = `${index * 44 + 40}px`;
  };

  const handleEducationChangeTab = (index) => {
    setTabIndex(index);
    indicatorRef.current.style.top = `${index * 44 + 100}px`;
  };

  return (
    <section
      id="biography-section"
      className="relative w-full bg-primary flex flex-col items-center justify-center mb-20 pb-14"
    >
      <div
        className={`w-full grid max-w-[1280px] gap-8 py-10 px-5 mx-auto rounded-lg md:px-12 lg:px-16 xl:px-32 bg-transparent text-gray-100 transition-all duration-1000 ${
          Viewing ? "opacity-1 translate-y-0" : "opacity-0 translate-y-52"
        }`}
      >
        <h2 className="text-secondary w-full">$ biography</h2>
        <div
          ref={biographySection}
          className="w-full flex flex-col sm:flex-row justify-start gap-5 items-start mt-10 overflow-hidden"
        >
          <div
            className={`w-full h-fit max-w-full sm:max-w-[220px] overflow-x-auto`}
          >
            <div className="relative w-fit max-w-fit sm:min-w-[220px] sm:max-w-[220px] sm:w-[220px] flex flex-row overflow-x-scroll hidden-scrollbar sm:overflow-hidden overflow-y-hidden sm:flex-col items-start text-white/80 border-l-0 sm:border-l-2 border-primary_dark">
              <div
                ref={indicatorRef}
                className={`hidden sm:block absolute w-1 transition-all top-10 -left-[1px] h-11 bg-secondary`}
              ></div>
              <h2 className="relative text-secondary px-5 py-2 before:absolute before:top-0 before:left-0.5 before:content-['▹'] before:text-secondary before:mt-2">
                Experience
              </h2>
              <button
                className={`py-2.5 w-fit sm:w-full text-left px-4 sm:px-2 rounded-md sm:rounded-r-md transition-all whitespace-nowrap overflow-hidden overflow-ellipsis max-w-fit sm:max-w-full ${
                  TabIndex == 0
                    ? "text-secondary bg-primary_dark/70"
                    : "hover:text-secondary/80 hover:translate-x-0.5 hover:-translate-y-0.5 "
                }`}
                onClick={() => handleBiographyChangeTab(0)}
              >
                Satoripop
              </button>
              
              <h2 className="relative text-secondary px-5 py-2 before:absolute before:top-0 before:left-0.5 before:content-['▹'] before:text-secondary before:mt-2 sm:mt-5">
                Education
              </h2>
              <button
                className={`py-2.5 w-fit sm:w-full text-left px-4 sm:px-2 rounded-md sm:rounded-r-md transition-all whitespace-nowrap overflow-hidden overflow-ellipsis max-w-fit sm:max-w-full ${
                  TabIndex == 1
                    ? "text-secondary bg-primary_dark/70"
                    : "hover:text-secondary/80 hover:translate-x-0.5 hover:-translate-y-0.5 "
                }`}
                onClick={() => handleEducationChangeTab(1)}
              >
                Ecole Polytechnique Sousse
              </button>
              
            </div>
          </div>
          {TabIndex == 0 && (
            <div className="w-full simple-fade-in-animation p-4 min-h-[250px]">
              <h3>
                Summer internship as a Frontend Developer{" "}
                <span className="text-secondary">@ Satoripop</span>
              </h3>
              <p className="text-sm text-zinc-400 mt-1 mb-6">
                July - August 2023
              </p>
              <p className="relative pl-5 text-sm text-zinc-300 before:absolute before:top-0 before:left-0.5 before:content-['▹'] before:text-secondary">
              Gained hands-on experience with React, enhancing frontend development skills.
              </p>
              <p className="mt-3 relative pl-5 text-sm text-zinc-300 before:absolute before:top-0 before:left-0.5 before:content-['▹'] before:text-secondary">
              Developed multiple projects, including a PokeApp and various portfolios.


              </p>
              <p className="mt-3 relative pl-5 text-sm text-zinc-300 before:absolute before:top-0 before:left-0.5 before:content-['▹'] before:text-secondary">
              Gained hands-on experience with React, enhancing frontend development skills.
              </p>
              <div className="w-full flex flex-wrap items-center mt-4 gap-2">
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  React
                </p>
                
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  Tailwind CSS
                </p>
                <p className="text-xs bg-secondary/30 text-secondary rounded p-1 w-fit">
                  Bootstrap
                </p>
                
              </div>
            </div>
          )}
        
          {TabIndex == 1 && (
            <div className="w-full simple-fade-in-animation p-4 min-h-[250px]">
              <h3>
                Preparatory cycle{" "}
                <span className="text-secondary">
                  @ Ecole Polytechnique Sousse
                </span>
              </h3>
              <p className="text-sm text-zinc-400 mt-1 mb-6">2020 - 2022</p>
              <h3>
                Software Engineering Degree{" "}
                <span className="text-secondary">
                  @ Ecole Polytechnique Sousse
                </span>
              </h3>
              <p className="text-sm text-zinc-400 mt-1 mb-6">2022 - Present</p>
            </div>
          )}
        </div>
      </div>
      <div className="h-[3px] opacity-90 absolute -bottom-20 left-0 right-0 mx-auto w-32 rounded-md bg-secondary seperation-animation-1"></div>
      <div className="absolute h-[3px] rounded-md -bottom-14 right-0 left-0 mx-auto w-48 bg-secondary opacity-90 seperation-animation-2"></div>
      <div className="h-[3px] absolute opacity-90 -bottom-8 left-0 right-0 w-40 mx-auto rounded-md bg-secondary seperation-animation-3"></div>
    </section>
  );
}
