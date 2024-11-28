import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import ProjectTabs from "./component/projects-tab";
import Link from "next/link";

const getPageData = async () => {
  const query = `
      query blogPosts {
        blogPosts(orderBy: createdAt_DESC) {
            createdAt
            id
            slug
            tec
            postText {
              raw
            }
            imagePost {
              url
            }
            resume
            title
            projectImages {
              id
              url
            }
            technology {
              technologyName
            }
            link
            repo
          }
        technologies {
            technologyName
        }
      }
    `;

  return fetchHygraphQuery(query);
};

const Projects = async () => {
  const { blogPosts, technologies } = await getPageData();

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <p className="subtitle mb-8 !text-red-600 text-center">
          This portfolio is under construction, checkout my Github{" "}
          <Link
            href="https://github.com/thiagosullivan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-xl underline"
          >
            HERE
          </Link>
        </p>
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}

        <ProjectTabs blogPosts={blogPosts} technologies={technologies} />
      </div>
    </section>
  );
};

export default Projects;
