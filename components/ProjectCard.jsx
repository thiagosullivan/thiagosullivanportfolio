import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Link2Icon, GithubIcon, Link2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const ProjectCard = ({ project }) => {
  console.log(project, "POST");

  return (
    <Card className="group overflow-hidden relative h-full">
      <Link className="block" href={`/projects/${project.slug}`}>
        <CardHeader className="p-0">
          {/* image */}
          <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
            <div className="w-[70%] h-[250px] relative">
              <Image
                className="absolute bottom-0 shadow-2xl h-[250px] rounded-2xl"
                src={project.imagePost.url}
                alt={project.title}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            {/* <Image
                            className='absolute bottom-0 shadow-2xl'
                            src={project.imagePost.url}
                            width={247}
                            height={250}
                            alt={project.name}
                            priority
                        /> */}
            {/* btns links */}
            {/* <div className='flex gap-x-4'>
                            <Link href={project.link} className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'>
                                <Link2Icon className='text-white' />
                            </Link>
                            <Link href={project.github} className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'>
                                <GithubIcon className='text-white' />
                            </Link>
                        </div> */}
          </div>
        </CardHeader>
        <div className="h-full px-6 py-4">
          <div className="absolute top-4 left-5 mb-2">
            {/* {project.map((tec, index) => {
                            return (
                                
                                )
                            })} */}
            <Badge className="uppercase text-sm font-medium mr-2">
              {project.tec}
            </Badge>
          </div>

          <h4 className="h4 mb-1">
            {project.title.length > 35
              ? project.title.substr(0, 35) + "..."
              : project.title}
          </h4>
          <p className="text-muted-foreground text-lg">
            {project.resume.length > 100
              ? project.resume.substr(0, 100) + "..."
              : project.resume}
          </p>
        </div>
      </Link>
    </Card>
  );
};

export default ProjectCard;
