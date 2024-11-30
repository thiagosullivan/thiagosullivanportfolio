"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import ProjectCard from "@/components/ProjectCard";

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

// remove category duplicates
// const uniqueCategories = [
//     'all projects',
//     ...new Set(ProjectData.map(item => item.category)),
// ];

const ProjectTabs = ({ blogPosts, technologies }) => {
  const uniqueCategories = [
    "all projects",
    ...new Set(technologies.map((item) => item.technologyName)),
  ];
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  const [selectedFilter, setSelectedFilter] = useState([]);

  console.log(category, "SINGLE");
  // console.log(categories, 'PLURAL')
  console.log(blogPosts, "TODOS OS POSTS");

  // const filteredProjects = ProjectData.filter(project => {
  //     // if category is 'all projects' return all Projects, else filter by category

  //     return category === 'all projects'
  //     ? project
  //     : project.category === category;
  // })

  const tecs = blogPosts.map((item) => {
    return item.technologies;
  });

  console.log(tecs, "TECS");

  const filteredProjects = blogPosts.filter((project) => {
    // if category is 'all projects' return all Projects, else filter by category
    // console.log(project, 'SCOPE')

    return category === "all projects" ? project : project.tec === category;
  });

  console.log(filteredProjects, "FILTRADOS");

  // const categories = [
  //     {name:"reactJS"},
  //     {name:"nextJS"}
  //   ]

  //   const filtered = ['reactJS', 'nextJS', 'fullstack']

  //   const filteredRes = categories.filter( p => p.includes(category))

  //   console.log(filteredRes, "FILTRADOS")

  return (
    <Tabs defaultValue={category} className="mb-24 xl:mb-48">
      <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[750px] mb-12 mx-auto md:border dark:border-none">
        {categories.map((category, index) => {
          return (
            <TabsTrigger
              onClick={() => setCategory(category)}
              value={category}
              key={index}
              className="capitalize w-[162px] md:w-auto"
            >
              {category}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {/* tabs content */}
      <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-tabs gap-4 justify-center justify-items-center">
        {filteredProjects.map((project, index) => {
          return (
            <TabsContent value={category} key={index} className="">
              <ProjectCard project={project} />
            </TabsContent>
          );
        })}
        {/* {blogPosts.map((project) => {
                    return (
                        <TabsContent value={category} key={project.id}>
                            <ProjectCard project={project} />
                        </TabsContent>
                    )
                })} */}
      </div>
    </Tabs>
  );
};

export default ProjectTabs;
