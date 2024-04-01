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
    Briefcase
} from 'lucide-react'
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "./ui/tooltip";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Thiago Santos',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+55 43 998481727',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'thiago.sullivan.dev@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 04 Jun, 1992',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bachalor on Software Engineer',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bachalor in Product Design',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Londrina, Paraná - Brazil',
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'UNOPAR - Universidade Norte do Paraná',
                qualification: 'Bachalor in Product Design',
                years: '2013 - 2017'
            },
            {
                university: 'Alura Cursos',
                qualification: 'Web Development',
                years: '2017 - 2018'
            },
            {
                university: 'Rocketseat',
                qualification: 'Fullstack Development',
                years: '2020 - 2022'
            },
            {
                university: 'UNIFIL',
                qualification: 'Software Engineer',
                years: '2023 - 2027'
            }

        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'BizCommerce',
                role: 'Frontend Developer',
                years: 'Jun 2019 - Feb 2020'
            },
            {
                company: 'Agência Guia-se Londrina',
                role: 'Fullstack Developer',
                years: 'Feb 2020 - Jul 2021'
            },
            {
                company: 'Compass UOL',
                role: 'Frontend Developer',
                years: 'Jul 2021 - May 2023'
            },
            {
                company: 'Surto MKT',
                role: 'Fullstack Developer',
                years: 'Jan 2023 - Aug 2023'
            },
        ]
    }
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'Responsive Design,',
            },
            {
                name: 'Optimization, accessibility and SEO,',
            },
            {
                name: 'Experience with e-commerce,',
            },
            {
                name: ' Teamwork and leadership',
            },
            {
                name: 'Hooks, Redux, ContextAPI,',
            },
            {
                name: "Construction of landing pages, blogs, ecommerce, dashboards,"
            },
            {
                name: "Experience creating projects from scratch to deploy"
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/html5.svg',
                link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
                name: 'HTML5',
            },
            {
                imgPath: '/about/css3.svg',
                link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
                name: 'CSS3',
            },
            {
                imgPath: '/about/react.svg',
                link: 'https://react.dev/',
                name: 'ReactJS',
            },
            {
                imgPath: '/about/nextjs.svg',
                link: 'https://nextjs.org/',
                name: 'NextJS',
            },
            {
                imgPath: '/about/nodejs.svg',
                link: 'https://nodejs.org/en',
                name: 'NodeJS',
            },
            {
                imgPath: '/about/tailwind-css.svg',
                link: 'https://tailwindcss.com/',
                name: 'Tailwind CSS',
            },
            {
                imgPath: '/about/sass.svg',
                link: 'https://sass-lang.com/',
                name: 'SASS',
            },
            {
                imgPath: '/about/mongo-db.svg',
                link: 'https://www.mongodb.com/',
                name: 'MongoDB',
            },
            {
                imgPath: '/about/docker.svg',
                link: 'https://www.docker.com/',
                name: 'Docker',
            },
            {
                imgPath: '/about/postgresql.svg',
                link: 'https://www.postgresql.org/',
                name: 'PostgresQL',
            },
            {
                imgPath: '/about/eslint.svg',
                link: 'https://eslint.org/',
                name: 'ESLint',
            },
            {
                imgPath: '/about/figma.svg',
                link: 'https://www.figma.com/',
                name: 'Figma',
            },
            {
                imgPath: '/about/firebase.svg',
                link: 'https://firebase.google.com/',
                name: 'Firebase',
            },
            {
                imgPath: '/about/github.svg',
                link: 'https://github.com/',
                name: 'Github',
            },
            {
                imgPath: '/about/graphql.svg',
                link: 'https://graphql.org/',
                name: 'GraphQL',
            },            
            {
                imgPath: '/about/photoshop.svg',
                link: 'https://www.adobe.com/br/products/photoshop.html',
                name: 'Photoshop',
            },            
            {
                imgPath: '/about/vercel.svg',
                link: 'https://vercel.com/',
                name: 'Vercel',
            },
            {
                imgPath: '/about/vite-js.svg',
                link: 'https://vitejs.dev/',
                name: 'ViteJS',
            },
            {
                imgPath: '/about/vs-code.svg',
                link: 'https://code.visualstudio.com/',
                name: 'VS Code',
            },
            
        ]
    }
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
                <div className="flex flex-col xl:flex-row">
                    {/* Image */}
                    <div className="hidden xl:flex flex-1 relative">
                        {/* <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc="/about/developer.png" /> */}
                        <div className="w-[505px] h-[505px] bg-no-repeat relative">
                            <Image src="/about/sully.png" fill priority alt="Dev Image"/>
                        </div>
                    </div>
                    {/* Tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                            </TabsList>
                            {/* Tabs Content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* personal */}
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Deliverying Quality projects for over 4 Years</h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">I specialize in crafting intuitive and responsive websites, phone apps, and database with cutting-edge technology, delivering dynamic and engaging user experience.</p>
                                        {/* icons */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                        <div className="text-primary">{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        {/* languages */}
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary">Language Skill</div>
                                            <div className="border-b border-border"></div>
                                            <div>English (B2), Portuguese (Native)</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualifications */}
                                <TabsContent value="qualifications">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                                    </div>

                                    {/* experience and education wrapper */}
                                    <div className="grid md:grid-cols-2 gap-y-8 ">
                                        {/* experience */}
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <Briefcase />
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'experience').title}
                                                </h4>
                                            </div>
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'experience').data.map((item, index)=> {
                                                    const {company, role, years} = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                <div className="text-lg leading-none text-muted-foreground">{role}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        {/* education */}
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <GraduationCap size={28} />
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'education').title}
                                                </h4>
                                            </div>
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'education').data.map((item, index)=> {
                                                    const {university, qualification, years} = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                <div className="text-lg leading-none text-muted-foreground">{qualification}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* skill */}
                                <TabsContent value="skills">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-8">What I Use Everyday</h3>
                                        {/* skills */}
                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* skill list */}
                                            <div className="grid grid-cols-2">
                                                {getData(skillData, 'skills').data.map((item, index) => {
                                                    const {name} = item;
                                                    return (
                                                        <div className="text-center xl:text-lest mx-auto xl:mx-0 " key={index}>
                                                            <div className="font-medium">{name}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        {/* tools */}
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* tools list */}
                                            <div className="flex flex-wrap gap-4 justify-center xl:justify-start">
                                                {getData(skillData, 'tools').data.map((item, index)=> {
                                                    const {imgPath, link, name} = item;
                                                    return (
                                                        <div key={index}>
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger>
                                                                        <Link href={link} target="_blank" rel="noopener noreferrer">
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
                                                    )
                                                })}
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
}
 
export default About;
