"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/app/context/LanguageContext";

const ProjectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, non.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Solstice Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, non.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "Evolve Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, non.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Ignite Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, non.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Envision Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, non.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Nova Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, non.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "fullstack",
    name: "Zenith Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, non.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, non.",
    link: "/",
    github: "/",
  },
];

const Work = ({ blogPosts }) => {
  const { language } = useLanguage();

  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">
            {language == "en" ? "Latest Projects" : "Últimos Projetos"}
          </h2>
          <p className="subtitle mb-8">
            {language == "en"
              ? "Check out some of my projects that I've developed over the years."
              : "Confira alguns dos trabalhos que desenvolvi ao longo dos anos."}
          </p>
          {/* <p className="subtitle mb-8 !text-red-600">
            {language == "en"
              ? "This portfolio is under construction, checkout all my works on Github"
              : "Este portfólio está em construção, você pode conferir todos os meus trabalho no Github"}{" "}
            <Link
              href="https://github.com/thiagosullivan"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-xl underline uppercase"
            >
              {language == "en" ? "here" : "aqui"}
            </Link>
          </p> */}
          {language == "en" ? (
            <Link href="/projects">
              <Button>All Projects</Button>
            </Link>
          ) : (
            <Link href="/projects">
              <Button>Todos os Projetos</Button>
            </Link>
          )}
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[500px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the firsdt 4 projects for the slides */}
            {/* {ProjectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            )
                        })} */}
            <div className="h-[90%]">
              {blogPosts.slice(0, 4).map((project, index) => {
                return (
                  <SwiperSlide key={index} className="!h-[95%]">
                    <ProjectCard project={project} />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
