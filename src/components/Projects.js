import React, { useCallback, useRef, useState } from "react";
import Gallery from "./Gallery";
import { IconContext } from "react-icons";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Project() {
  const aweniObserver = useRef();
  const quickObserver = useRef();
  const bwsObserver = useRef();
  const aweniGalleryRef = useRef();
  const quickGalleryRef = useRef();
  const bwsGalleryRef = useRef();
  const portfolioGalleryRef = useRef();
  const dentrainGalleryRef = useRef();
  const academicGalleryRef = useRef();

  const [Show, setShow] = useState(false);
  const [AweniViewing, setAweniViewing] = useState(false);
  const [QuickViewing, setQuickViewing] = useState(false);
  const [BWSViewing, setBWSViewing] = useState(false);

  const AweniSection = useCallback((node) => {
    if (aweniObserver.current) aweniObserver.current.disconnect();
    aweniObserver.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setAweniViewing(true);
      }
    });
    if (node) aweniObserver.current.observe(node);
  });

  const QuickSection = useCallback((node) => {
    if (quickObserver.current) quickObserver.current.disconnect();
    quickObserver.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setQuickViewing(true);
      }
    });
    if (node) quickObserver.current.observe(node);
  });

  const BWSSection = useCallback((node) => {
    if (bwsObserver.current) bwsObserver.current.disconnect();
    bwsObserver.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setBWSViewing(true);
      }
    });
    if (node) bwsObserver.current.observe(node);
  });

  const handleOpenGallery = (Ref) => {
    Ref.current.firstChild.firstChild.click();
  };

  return (
    <section id="projects-section" className="w-full max-w-[1200px] py-32">
      <h2 className="text-secondary px-10">$ projects</h2>
      <div className="w-full flex flex-col mt-14 items-center">
        <div
          ref={AweniSection}
          className={`flex items-center justify-center w-full mb-28 flex-wrap px-5 md:px-0 transition-all duration-1000 ${
            AweniViewing
              ? "opacity-1 translate-x-0"
              : "opacity-0 translate-x-72"
          }`}
        >
          <div className="w-full md:w-[50%] order-2 md:order-1 relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-secondary/[25%] z-10 group-hover:hidden opacity-100 transition-all "></div>
            <div ref={aweniGalleryRef}>
              <Gallery
                galleryID="aweni-gallery"
                className="grayscale"
                images={[
                  {
                    largeURL: "/support2go/full.png",
                    thumbnailURL: "/support2go/1.png",
                    width: 1903,
                    height: 2459,
                  },
                  {
                    largeURL: "/support2go/1.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/support2go/2.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/support2go/3.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/support2go/11.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/support2go/12.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/support2go/5.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/support2go/4.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/support2go/6.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/support2go/7.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/support2go/8.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/support2go/9.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/support2go/10.png",
                    width: 1397,
                    height: 727,
                  },
                ]}
              />
            </div>
          </div>
          <div className="w-full md:w-[40%] order-1 my-5 md:my-0 flex flex-col justify-start md:justify-end items-start md:items-end">
            <h3 className="text-xs text-secondary self-start pl-0 md:pl-3">
              Academic project
            </h3>
            <h3 className="text-white text-2xl mb-3 self-start pl-0 md:pl-3">
              Support2Go
            </h3>
            <div className="bg-primary_dark rounded-md w-full md:w-[110%] h-fit text-white text-sm z-20 px-5 py-3 shadow-card">
              <span className="text-secondary">&#123;"</span>  Developing and maintaining a support tickets platform<span className="text-secondary"> "&#125;</span>
            </div>
            <div className="flex gap-3 text-white w-fit self-start mt-5 h-fit flex-wrap text-xs pl-0 md:pl-3">
              <span>ReactJS</span>
              <span>Tailwind CSS</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
            <button
              className="px-3 py-1 border mt-3 border-secondary text-secondary rounded text-sm hover:bg-secondary hover:text-primary self-start ml-0 md:ml-3"
              onClick={() => handleOpenGallery(aweniGalleryRef)}
            >
              View more
            </button>
          </div>
        </div>

        <div
          ref={QuickSection}
          className={`flex items-center w-full mb-28 flex-wrap px-5 md:px-0 justify-center transition-all duration-1000 ${
            QuickViewing
              ? "opacity-1 translate-x-0"
              : "opacity-0 -translate-x-72"
          }`}
        >
          <div className="w-full md:w-[40%] order-1 my-5 md:my-0 flex flex-col justify-start items-start">
            <h3 className="text-xs text-secondary">Academic project</h3>
            <h3 className="text-white text-2xl mb-3">Kiki Streetwear</h3>
            <div className="bg-primary_dark rounded-md w-full md:w-[110%] h-fit text-white text-sm z-20 px-5 py-3 shadow-card">
              <span className="text-secondary">&#123;"</span> Developing and maintaining a clothing brand e-commerce website
              <span className="text-secondary"> "&#125;</span>
            </div>
            <div className="flex gap-3 text-white w-full pr-3 mt-5 h-fit flex-wrap text-xs">
              <span>Laravel</span>
              <span>Tailwind CSS</span>
            </div>
            <button
              className="px-3 py-1 border mt-3 border-secondary text-secondary rounded text-sm hover:bg-secondary hover:text-primary"
              onClick={() => handleOpenGallery(quickGalleryRef)}
            >
              View more
            </button>
          </div>

          <div className="w-full md:w-[50%] order-2 relative group cursor-pointer rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-secondary/[25%] z-10 group-hover:hidden opacity-100 transition-all "></div>
            <div ref={quickGalleryRef}>
              <Gallery
                galleryID="quick-gallery"
                className="grayscale"
                images={[
                  {
                    largeURL: "/kikistreetwear/1.png",
                    thumbnailURL: "/kikistreetwear/1.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/kikistreetwear/3.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/kikistreetwear/4.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/kikistreetwear/2.png",
                    width: 1903,
                    height: 1420,
                  },
                  {
                    largeURL: "/kikistreetwear/5.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/kikistreetwear/8.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/kikistreetwear/7.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/kikistreetwear/11.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/kikistreetwear/6.png",
                    width: 1397,
                    height: 727,
                  },
                  {
                    largeURL: "/kikistreetwear/10.png",
                    width: 1378,
                    height: 689,
                  },
                  {
                    largeURL: "/kikistreetwear/9.png",
                    width: 1378,
                    height: 689,
                  },
                ]}
              />
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
