import React, { useCallback, useRef, useState } from "react";

export default function Introduction() {
  const [Viewing, setViewing] = useState(false);

  const observer = useRef();
  const introductionSection = useCallback((node) => {
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
      <section
        id="introduction-section"
        className={`w-full bg-primary_dark shadow-card flex flex-col items-center justify-center pt-32 pb-80`}
      >
        <h2 className="text-secondary max-w-[800px] w-full px-10 lg:px-0">
          $ introduction
        </h2>
        <div
          ref={introductionSection}
          className={`mockup-code bg-primary_light max-w-[800px] w-11/12 overflow-visible shadow-2xl mt-5 transition-all duration-1000 ${
            Viewing ? "opacity-1 translate-y-0" : "opacity-0 translate-y-52"
          } `}
        >
          <pre data-prefix="$" className="text-secondary pl-4 pt-3">
            <code className="text-sm md:text-lg"> info</code>
          </pre>
          <pre
            data-prefix=">"
            className="text-white whitespace-normal pl-4 pt-2"
          >
            <code className="text-sm md:text-base">
              {" "}
              Karim is a highly enthusiastic individual who is deeply passionate about the field of computer science engineering, whether it's designing algorithms, debugging code, he is always eager to put his skills to the test and push himself to new heights as a well experienced front-end and back-end developer.
            </code>
          </pre>
          <pre data-prefix="$" className="text-secondary pl-4 pt-6">
            <code className="text-sm md:text-lg"> skills</code>
          </pre>
          <pre data-prefix=">" className="text-white  pl-6 flex pt-4">
            <code className="flex flex-row items-start justify-center flex-wrap">
              {" "}
              <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/python.png"
                  alt="Python icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Python
                </span>
              </div>
              
              <div className="w-11 h-11 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/java.png"
                  alt="Java icon"
                  width={45}
                  height={45}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Java
                </span>
              </div>
              
              <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648513/next_csitru.svg"
                  alt="Next.js icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Next.js
                </span>
              </div>
              
              <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648515/react_ak0sla.svg"
                  alt="ReactJS icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  ReactJS
                </span>
              </div>
              
              <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648517/tailwind_k1zaze.png"
                  alt="Tailwind CSS icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-24 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Tailwind CSS
                </span>
              </div>
              
              <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648514/node_nj2kde.svg"
                  alt="Node.js icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Node.js
                </span>
              </div>
              
              <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648512/express_n1saii.png"
                  alt="Express.js icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Express.js
                </span>
              </div>
              
              
              <div className="w-11 h-11 z-10 mb-4 rounded-full bg-transparent relative p-1 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1670160372/icons8-stripe-48_egmca6.png"
                  alt="Stripe icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Stripe
                </span>
              </div>
              
              <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1670160372/icons8-json-web-token-48_ujle0l.png"
                  alt="JWT icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  JWT
                </span>
              </div>
              
              <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648514/mongo_uqpcud.svg"
                  alt="MongoDB icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  MongoDB
                </span>
              </div>
              
              <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative  hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648509/firebase_ztz5rt.png"
                  alt="Firebase icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Firebase
                </span>
              </div>
              
              <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1683493768/pfe/mysql_n3hwqg.png"
                  alt="MySQL icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  MySQL
                </span>
              </div>
              
             
              <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1640648510/git_b23wnr.svg"
                  alt="Git icon"
                  width={40}
                  height={40}
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Git
                </span>
              </div>
              
              <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative p-1 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/laravel.png"
                  alt="Laravel icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Laravel
                </span>
              </div>
              
              <div className="w-9 h-9 z-10 mb-4 rounded-full bg-transparent relative px-0.5 py-0.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/symfony.png"
                  alt="Symfony icon"
                  width={40}
                  height={40}
                  id="services-section"
                />
                <span className="absolute text-center p-1 w-20 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Symfony
                </span>
              </div>
              
              <div className="w-10 h-10 z-10 mb-4 rounded-full bg-transparent relative p-1.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="https://res.cloudinary.com/dwvwjxizk/image/upload/v1683426735/codeigniter_evfxab.png"
                  alt="CodeIgniter 4 icon"
                  width={35}
                  height={35}
                />
                <span className="absolute text-center p-1 w-24 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  CodeIgniter 4
                </span>
              </div>
              
              <div className="w-10 h-10 z-10 mb-4 rounded-full bg-transparent relative p-1.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/apollo.png"
                  alt="Apollo Server icon"
                  width={35}
                  height={35}
                />
                <span className="absolute text-center p-1 w-24 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                Apollo Server
                </span>
              </div>
              
              <div className="w-10 h-10 z-10 mb-4 rounded-full bg-transparent relative p-1.5 hover:scale-110 hover:cursor-pointer group transition-all hover:z-20">
                <img
                  src="/skills/kafka.png"
                  alt="Kafka icon"
                  width={35}
                  height={35}
                />
                <span className="absolute text-center p-1 w-24 top-[110%] left-1/2 -translate-x-1/2 z-[9999] origin-bottom-top rounded-lg shadow-md text-white bg-gray-900 text-xs f transition-all duration-100 hidden group-hover:block">
                  Kafka
                </span>
              </div>
            </code>
          </pre>
        </div>
      </section>
    </>
  );
}
