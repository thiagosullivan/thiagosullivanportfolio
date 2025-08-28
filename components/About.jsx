"use client";

import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  Link2Icon,
} from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useLanguage } from "@/app/context/LanguageContext";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Thiago Santos",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+55 43 998481727",
  },
  {
    icon: <MailIcon size={20} />,
    text: "thiago.sullivan.dev@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 04 Jun, 1992",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachalor on Software Engineer",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachalor in Product Design",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Londrina, Paraná - Brazil",
  },
];

const infoDataPt = [
  {
    icon: <User2 size={20} />,
    text: "Thiago Santos",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+55 43 998481727",
  },
  {
    icon: <MailIcon size={20} />,
    text: "thiago.sullivan.dev@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Nascido em 04 de Junho, 1992",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bacharelado em Engenharia de Software",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bacharelado em Design de Produto",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Londrina, Paraná - Brasil",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "UNOPAR - Universidade Norte do Paraná",
        qualification: "Bachalor in Product Design",
        years: "2013 - 2017",
      },
      {
        university: "Alura Cursos",
        qualification: "Web Development",
        years: "2017 - 2018",
      },
      {
        university: "Rocketseat",
        qualification: "Fullstack Development",
        years: "2020 - 2022",
      },
      {
        university: "Fullstack Club",
        qualification: "Fullstack Development",
        years: "2023 - 2025",
      },
      {
        university: "UNIFIL - Universidade Filadélfia",
        qualification: "Software Engineer",
        years: "2024 - 2028",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "BizCommerce",
        role: "Frontend Developer",
        years: "Jun 2019 - Feb 2020",
        link: "https://www.linkedin.com/company/bizcommerce",
      },
      {
        company: "Agência Guia-se Londrina",
        role: "Fullstack Developer",
        years: "Feb 2020 - Jul 2021",
        link: "https://www.linkedin.com/company/guiaseagenciadigital",
      },
      {
        company: "Compass UOL",
        role: "Frontend Developer",
        years: "Jul 2021 - May 2023",
        link: "https://www.linkedin.com/company/compass-uol",
      },
      {
        company: "Surto MKT",
        role: "Fullstack Developer",
        years: "Jan 2023 - Dec 2023",
        link: "https://www.linkedin.com/company/surtomkt/",
      },
      {
        company: "FidenTech",
        role: "Fullstack Developer",
        years: "Mar 2024 - Jan 2025",
        link: "https://www.linkedin.com/company/fidentech-solutions",
      },
      {
        company: "ATS Web Solutions",
        role: "Fullstack Developer",
        years: "Jun 2024 - Jul 2025",
        link: "https://www.linkedin.com/company/fidentech-solutions",
      },
    ],
  },
];

const qualificationDataPt = [
  {
    title: "educação",
    data: [
      {
        university: "UNOPAR - Universidade Norte do Paraná",
        qualification: "Bacharelado em Design de Produto",
        years: "2013 - 2017",
      },
      {
        university: "Alura Cursos",
        qualification: "Desenvolvimento Web",
        years: "2017 - 2018",
      },
      {
        university: "Rocketseat",
        qualification: "Desenvolvedor Fullstack",
        years: "2020 - 2022",
      },
      {
        university: "Fullstack Club",
        qualification: "Desenvolvedor Fullstack",
        years: "2023 - 2025",
      },
      {
        university: "UNIFIL - Universidade Filadélfia",
        qualification: "Engenharia de Software",
        years: "2024 - 2028",
      },
    ],
  },
  {
    title: "experiência",
    data: [
      {
        company: "BizCommerce",
        role: "Desenvolvedor Frontend",
        years: "Jun 2019 - Fev 2020",
        link: "https://www.linkedin.com/company/bizcommerce",
      },
      {
        company: "Agência Guia-se Londrina",
        role: "Desenvolvedor Fullstack",
        years: "Fev 2020 - Jul 2021",
        link: "https://www.linkedin.com/company/guiaseagenciadigital",
      },
      {
        company: "Compass UOL",
        role: "Desenvolvedor Frontend",
        years: "Jul 2021 - Mai 2023",
        link: "https://www.linkedin.com/company/compass-uol",
      },
      {
        company: "Surto MKT",
        role: "Desenvolvedor Fullstack",
        years: "Jan 2023 - Dez 2023",
        link: "https://www.linkedin.com/company/surtomkt/",
      },
      {
        company: "FidenTech",
        role: "Desenvolvedor Fullstack",
        years: "Mar 2024 - Jan 2025",
        link: "https://www.linkedin.com/company/fidentech-solutions",
      },
      {
        company: "ATS Web Solutions",
        role: "Desenvolvedor Fullstack",
        years: "Jun 2024 - Jul 2025",
        link: "https://www.linkedin.com/company/fidentech-solutions",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: [
          '• Frontend:',
          <br key="break" />,
          'React, Next.js, Redux, KnockoutJS, Bootstrap, TailwindCSS, Styled-Components, Shadcn, Material UI, Vite,'
        ],
      },
      {
        name: [
          '• Backend:',
          <br key="break" />,
          'Node.js (Express), Prisma, Supabase, Firebase, MongoDB, Drizzle, NeonDB'
        ]
      },
      {
        name: [
          '• Authentication & Security:',
          <br key="break" />,
          'JWT (JSON Web Tokens), OAuth 2.0, Session Management, bcrypt, NextAuth, Auth0, Better Auth,'
        ]
      },
      {
        name: [
          '• Mobile:',
          <br key="break" />,
          'React Native,'
        ]
      },
      {
        name: [
          '• DevOps:',
          <br key="break" />,
          'AWS, Vercel, Heroku, Netlify, CI/CD,'
        ]
      },
      {
        name: [
          '• Tools:',
          <br key="break" />,
          'Jira, Git, Figma, Adobe XD, Photoshop,'
        ]
      },
      {
        name: [
          '• Others:',
          <br key="break" />,
          'SEO, PWA, GraphQL, Docker.'
        ]
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/html5.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        name: "HTML5",
      },
      {
        imgPath: "/about/css3.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        name: "CSS3",
      },
      {
        imgPath: "/about/react.svg",
        link: "https://react.dev/",
        name: "ReactJS",
      },
      {
        imgPath: "/about/nextjs.svg",
        link: "https://nextjs.org/",
        name: "NextJS",
      },
      {
        imgPath: "/about/nodejs.svg",
        link: "https://nodejs.org/en",
        name: "NodeJS",
      },
      {
        imgPath: "/about/tailwind-css.svg",
        link: "https://tailwindcss.com/",
        name: "Tailwind CSS",
      },
      {
        imgPath: "/about/sass.svg",
        link: "https://sass-lang.com/",
        name: "SASS",
      },
      {
        imgPath: "/about/mongo-db.svg",
        link: "https://www.mongodb.com/",
        name: "MongoDB",
      },
      {
        imgPath: "/about/postgresql.svg",
        link: "https://www.postgresql.org/",
        name: "PostgresQL",
      },
      {
        imgPath: "/about/express-js.svg",
        link: "https://expressjs.com/",
        name: "Express JS",
      },
      {
        imgPath: "/about/supabase.svg",
        link: "https://supabase.com/",
        name: "Supabase",
      },
      {
        imgPath: "/about/docker.svg",
        link: "https://www.docker.com/",
        name: "Docker",
      },
      {
        imgPath: "/about/eslint.svg",
        link: "https://eslint.org/",
        name: "ESLint",
      },
      {
        imgPath: "/about/figma.svg",
        link: "https://www.figma.com/",
        name: "Figma",
      },
      {
        imgPath: "/about/firebase.svg",
        link: "https://firebase.google.com/",
        name: "Firebase",
      },
      {
        imgPath: "/about/github.svg",
        link: "https://github.com/",
        name: "Github",
      },
      {
        imgPath: "/about/graphql.svg",
        link: "https://graphql.org/",
        name: "GraphQL",
      },
      {
        imgPath: "/about/photoshop.svg",
        link: "https://www.adobe.com/br/products/photoshop.html",
        name: "Photoshop",
      },
      {
        imgPath: "/about/vercel.svg",
        link: "https://vercel.com/",
        name: "Vercel",
      },
      {
        imgPath: "/about/vite-js.svg",
        link: "https://vitejs.dev/",
        name: "ViteJS",
      },
      {
        imgPath: "/about/vs-code.svg",
        link: "https://code.visualstudio.com/",
        name: "VS Code",
      },
    ],
  },
];

const skillDataPt = [
  {
    title: "skills",
    data: [
      {
        name: [
          '• Frontend:',
          <br key="break" />,
          'React, Next.js, Redux, KnockoutJS, Bootstrap, TailwindCSS, Styled-Components, Shadcn, Material UI, Vite,'
        ],
      },
      {
        name: [
          '• Backend:',
          <br key="break" />,
          'Node.js (Express), Prisma, Supabase, Firebase, MongoDB, Drizzle, NeonDB'
        ]
      },
      {
        name: [
          '• Autenticação e Segurança:',
          <br key="break" />,
          'JWT (JSON Web Tokens), OAuth 2.0, Session Management, bcrypt, NextAuth, Auth0, Better Auth,'
        ]
      },
      {
        name: [
          '• Mobile:',
          <br key="break" />,
          'React Native,'
        ]
      },
      {
        name: [
          '• DevOps:',
          <br key="break" />,
          'AWS, Vercel, Heroku, Netlify, CI/CD,'
        ]
      },
      {
        name: [
          '• Ferramentas:',
          <br key="break" />,
          'Jira, Git, Figma, Adobe XD, Photoshop,'
        ]
      },
      {
        name: [
          '• Outros:',
          <br key="break" />,
          'SEO, PWA, GraphQL, Docker.'
        ]
      },
    ],
  },
  {
    title: "ferramentas",
    data: [
      {
        imgPath: "/about/html5.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        name: "HTML5",
      },
      {
        imgPath: "/about/css3.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        name: "CSS3",
      },
      {
        imgPath: "/about/react.svg",
        link: "https://react.dev/",
        name: "ReactJS",
      },
      {
        imgPath: "/about/nextjs.svg",
        link: "https://nextjs.org/",
        name: "NextJS",
      },
      {
        imgPath: "/about/nodejs.svg",
        link: "https://nodejs.org/en",
        name: "NodeJS",
      },
      {
        imgPath: "/about/tailwind-css.svg",
        link: "https://tailwindcss.com/",
        name: "Tailwind CSS",
      },
      {
        imgPath: "/about/sass.svg",
        link: "https://sass-lang.com/",
        name: "SASS",
      },
      {
        imgPath: "/about/mongo-db.svg",
        link: "https://www.mongodb.com/",
        name: "MongoDB",
      },
      {
        imgPath: "/about/postgresql.svg",
        link: "https://www.postgresql.org/",
        name: "PostgresQL",
      },
      {
        imgPath: "/about/express-js.svg",
        link: "https://expressjs.com/",
        name: "Express JS",
      },
      {
        imgPath: "/about/supabase.svg",
        link: "https://supabase.com/",
        name: "Supabase",
      },
      {
        imgPath: "/about/docker.svg",
        link: "https://www.docker.com/",
        name: "Docker",
      },
      {
        imgPath: "/about/eslint.svg",
        link: "https://eslint.org/",
        name: "ESLint",
      },
      {
        imgPath: "/about/figma.svg",
        link: "https://www.figma.com/",
        name: "Figma",
      },
      {
        imgPath: "/about/firebase.svg",
        link: "https://firebase.google.com/",
        name: "Firebase",
      },
      {
        imgPath: "/about/github.svg",
        link: "https://github.com/",
        name: "Github",
      },
      {
        imgPath: "/about/graphql.svg",
        link: "https://graphql.org/",
        name: "GraphQL",
      },
      {
        imgPath: "/about/photoshop.svg",
        link: "https://www.adobe.com/br/products/photoshop.html",
        name: "Photoshop",
      },
      {
        imgPath: "/about/vercel.svg",
        link: "https://vercel.com/",
        name: "Vercel",
      },
      {
        imgPath: "/about/vite-js.svg",
        link: "https://vitejs.dev/",
        name: "ViteJS",
      },
      {
        imgPath: "/about/vs-code.svg",
        link: "https://code.visualstudio.com/",
        name: "VS Code",
      },
    ],
  },
];

const About = () => {
  const { language } = useLanguage();
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    // xl:h-[860px]
    <section className=" pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          {language == "en" ? "About me" : "Sobre mim"}
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            {/* <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc="/about/developer.png" /> */}
            <div className="w-[505px] h-[505px] bg-no-repeat relative">
              <Image src="/about/sully.png" fill priority alt="Dev Image" />
            </div>
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  {language == "en" ? "Personal Info" : "Informações Pessoais"}
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  {language == "en" ? "Qualifications" : "Qualificações"}
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tabs Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      {language == "en"
                        ? "Deliverying Quality projects for over 6 Years"
                        : "Entregando projetos de qualidades há mais de 6 anos"}
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      {language == "en"
                        ? " I specialize in crafting intuitive and responsive websites, phone apps, and database with cutting-edge technology, delivering dynamic and engaging user experience."
                        : "Sou especializado em produzir sites intuitívos e responsivos, apps de celular e banco de dados com tecnologia de ponta, proporcionando uma experiência de usuário dinâmica e envolvente."}
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {language == "en" ? (
                        <>
                          {infoData.map((item, index) => {
                            return (
                              <div
                                className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="text-primary">{item.icon}</div>
                                <div>{item.text}</div>
                              </div>
                            );
                          })}
                        </>
                      ) : (
                        <>
                          {infoDataPt.map((item, index) => {
                            return (
                              <div
                                className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="text-primary">{item.icon}</div>
                                <div>{item.text}</div>
                              </div>
                            );
                          })}
                        </>
                      )}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">
                        {language == "en" ? "Language Skill" : "Idiomas"}
                      </div>
                      <div className="border-b border-border"></div>
                      <div>
                        {language == "en" ? (
                          <>
                            <strong>English</strong> (B2)
                          </>
                        ) : (
                          <>
                            <strong>Inglês</strong> (B2)
                          </>
                        )}
                        ,{" "}
                        {language == "en" ? (
                          <>
                            <strong>Potuguese</strong> (Native)
                          </>
                        ) : (
                          <>
                            <strong>Português</strong> (Nativo)
                          </>
                        )}
                        ,{" "}
                        {language == "en" ? (
                          <>
                            <strong>Spanish</strong> (Basic)
                          </>
                        ) : (
                          <>
                            <strong>Espanhol</strong> (Básico)
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      {language == "en"
                        ? "My Awesome Journey"
                        : "Minha Jornada até aqui"}
                    </h3>
                  </div>

                  {/* experience and education wrapper */}
                  <div className="grid md:grid-cols-2 gap-y-8 ">
                    {/* experience */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">
                          {language == "en" ? (
                            <>
                              {getData(qualificationData, "experience").title}
                            </>
                          ) : (
                            <>
                              {
                                getData(qualificationDataPt, "experiência")
                                  .title
                              }
                            </>
                          )}
                        </h4>
                      </div>
                      <div className="flex flex-col gap-y-4">
                        {language == "en" ? (
                          <>
                            {getData(qualificationData, "experience").data.map(
                              (item, index) => {
                                const { company, role, years } = item;
                                return (
                                  <div
                                    className="flex gap-x-8 group"
                                    key={index}
                                  >
                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                    </div>
                                    <div className="flex items-center max-w-[209px]">
                                      <div>
                                        <div className="font-semibold text-xl leading-none mb-2">
                                          {company}
                                        </div>
                                        <div className="text-lg leading-none text-muted-foreground">
                                          {role}
                                        </div>
                                        <div className="text-base font-medium">
                                          {years}
                                        </div>
                                      </div>
                                      <div className="ml-6">
                                        <Link
                                          href={item.link}
                                          className="transition ease-in-out delay-75 hover:text-primary"
                                        >
                                          <Link2Icon />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </>
                        ) : (
                          <>
                            {getData(
                              qualificationDataPt,
                              "experiência"
                            ).data.map((item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div className="flex items-center max-w-[209px]">
                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2">
                                        {company}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground">
                                        {role}
                                      </div>
                                      <div className="text-base font-medium">
                                        {years}
                                      </div>
                                    </div>
                                    <div className="ml-6">
                                      <Link
                                        href={item.link}
                                        className="transition ease-in-out delay-75 hover:text-primary"
                                      >
                                        <Link2Icon />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </div>
                    {/* education */}
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <GraduationCap size={28} />
                        <h4 className="capitalize font-medium">
                          {language == "en" ? (
                            <>{getData(qualificationData, "education").title}</>
                          ) : (
                            <>
                              {getData(qualificationDataPt, "educação").title}
                            </>
                          )}
                        </h4>
                      </div>
                      <div className="flex flex-col gap-y-4">
                        {language == "en" ? (
                          <>
                            {getData(qualificationData, "education").data.map(
                              (item, index) => {
                                const { university, qualification, years } =
                                  item;
                                return (
                                  <div
                                    className="flex gap-x-8 group"
                                    key={index}
                                  >
                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2">
                                        {university}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground">
                                        {qualification}
                                      </div>
                                      <div className="text-base font-medium">
                                        {years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </>
                        ) : (
                          <>
                            {getData(qualificationDataPt, "educação").data.map(
                              (item, index) => {
                                const { university, qualification, years } =
                                  item;
                                return (
                                  <div
                                    className="flex gap-x-8 group"
                                    key={index}
                                  >
                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2">
                                        {university}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground">
                                        {qualification}
                                      </div>
                                      <div className="text-base font-medium">
                                        {years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skill */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">
                      {language == "en"
                        ? "What I Use Everyday"
                        : "O que eu uso todos os dias"}
                    </h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div className="ml-4 gridd grid-cols-2">
                        {language == "en" ? (
                          <>
                            {getData(skillData, "skills").data.map(
                              (item, index) => {
                                const { name } = item;
                                return (
                                  <div
                                    className="text-left xl:text-lest mx-auto xl:mx-0 "
                                    key={index}
                                  >
                                    <div className="font-medium">{name}</div>
                                  </div>
                                );
                              }
                            )}
                          </>
                        ) : (
                          <>
                            {getData(skillDataPt, "skills").data.map(
                              (item, index) => {
                                const { name } = item;
                                return (
                                  <div
                                    className="text-left xl:text-lest mx-auto xl:mx-0 "
                                    key={index}
                                  >
                                    <div className="font-medium">{name}</div>
                                  </div>
                                );
                              }
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        {language == "en" ? "Tools" : "Ferramentas"}
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tools list */}
                      <div className="flex flex-wrap gap-2 justify-center xl:justify-start">
                        {language == "en" ? (
                          <>
                            {getData(skillData, "tools").data.map(
                              (item, index) => {
                                const { imgPath, link, name } = item;
                                return (
                                  <div key={index}>
                                    <TooltipProvider>
                                      <Tooltip>
                                        <TooltipTrigger>
                                          <Link
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            <Image
                                              src={imgPath}
                                              width={48}
                                              height={48}
                                              alt="image"
                                              className="grayscale hover:grayscale-0 transition-all"
                                            />
                                          </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>{name}</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  </div>
                                );
                              }
                            )}
                          </>
                        ) : (
                          <>
                            {getData(skillDataPt, "ferramentas").data.map(
                              (item, index) => {
                                const { imgPath, link, name } = item;
                                return (
                                  <div key={index}>
                                    <TooltipProvider>
                                      <Tooltip>
                                        <TooltipTrigger>
                                          <Link
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            <Image
                                              src={imgPath}
                                              width={48}
                                              height={48}
                                              alt="image"
                                              className="grayscale hover:grayscale-0 transition-all"
                                            />
                                          </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>{name}</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  </div>
                                );
                              }
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
