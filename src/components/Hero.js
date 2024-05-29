import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { IconContext } from "react-icons";

export default function Hero() {
  return (
    <section className="w-full max-w-[1480px] min-h-[800px] px-10 md:px-20 pt-28 pb-14 md:py-52 flex justify-start items-center md:gap-5 flex-wrap md:flex-nowrap lg:gap-[10%]">
      <div className="relative w-full  text-white flex flex-col items-center md:items-start font-semibold lg:font-bold">
        <div className="max-w-full w-fit">
          <p className="text-base md:text-lg z-10 mb-2 lg:mb-5 text-secondary">
            $ recap
          </p>
          <h2 className="z-10 relative text-3xl lg:text-5xl text-gray-200 whitespace-nowrap">
            Karim Bouaouina
          </h2>
          <h2 className="z-10 relative text-2xl lg:text-4xl mt-7 text-gray-400  sm:whitespace-nowrap">
            and I'm a Full-Stack Developer..
          </h2>
          <p className="mt-7 mb-5 max-w-3xl md:my-7 lg:my-8 text-xs font-medium md:text-sm lg:text-base text-gray-500">
            <span className="text-secondary/80 text-xs"></span>Specializing in MERN stack with a degree in Computer Science.
Experienced in building robust web applications and always eager to put my skills to the test and
push myself to new heights
            <span className="text-secondary/80 text-xs"></span>
          </p>
        </div>
        <div className="max-w-[386px] w-full flex justify-center md:justify-start  lg:justify-center items-center gap-3 md:gap-4 lg:gap-5 mt-6">
          <div className="w-fit h-fit bg-secondary rounded overflow-visible">
            <a
              href="/CV_KarimBouaouina.pdf"
              target="_blank"
              className="text-primary bg-secondary px-3 py-1 md:px-4 md:py-1.5 lg:px-8 lg:py-2.5 text-xs md:text-sm font-semibold lg:font-bold flex gap-3 items-center transition-all hover:translate-x-0.5 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer border rounded border-secondary hover:border-l-primary hover:border-b-primary"
            >
              Resume
            </a>
          </div>

          <div className="w-fit h-fit bg-secondary overflow-visible rounded">
            <a
              href="#contact-section"
              className="text-secondary bg-primary px-4 py-1 md:px-6 md:py-1.5 lg:px-8 lg:py-2.5 text-xs md:text-sm font-semibold lg:font-bold flex gap-3 items-center transition-all hover:translate-x-0.5 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer border rounded border-secondary"
            >
              Hire me &#8594;
            </a>
          </div>
        </div>
        <div className="w-full max-w-[400px] z-10 mt-8 flex gap-0 md:gap-20 lg:gap-0 justify-evenly md:justify-start lg:justify-evenly items-center">

          <a
            href="https://www.linkedin.com/in/karim-bouaouina/"
            target="_blank"
            className="z-10 hover:-translate-y-0.5 transition-all"
          >
            <IconContext.Provider
              value={{ className: "w-5 h-5 md:h-6 md:w-6" }}
            >
              <FiLinkedin />
            </IconContext.Provider>
          </a>

          <a
            href="https://github.com/karimbouaouina"
            target="_blank"
            className="z-10 hover:-translate-y-0.5 transition-all"
          >
            <IconContext.Provider
              value={{ className: "w-5 h-5 md:h-6 md:w-6" }}
            >
              <FiGithub />
            </IconContext.Provider>
          </a>
        </div>
      </div>
      {/* <div className="w-full max-w-[400px] md:max-w-[50%] md:w-1/2">
        <div className="w-full min-w-[350px] lg:min-w-[400px]">
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_tno6cg2w.json"
            background="transparent"
            speed="1"
            style={{ width: "100%", aspectRatio: "1/1" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div> */}
    </section>
  );
}
