import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import ProjectTabs from "./component/projects-tab";
import { ProjectContainerContext } from "./component/ProjectContainerContext";

const getPageData = async () => {
  const query = `
      query blogPosts {
        blogPosts(orderBy: updatedAt_DESC) {
            createdAt
            id
            slug
            tec
            postText {
                raw
            }
            postTextPt {
              raw
            }
            imagePost {
                url
            }
            resume
            resumo
            title
            titulo
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

  return fetchHygraphQuery(query, {
    next: {
      revalidate: 3600,
    },
  });
};

const Projects = async () => {
  const { blogPosts, technologies } = await getPageData();

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <ProjectContainerContext />
        {/* tabs */}

        <ProjectTabs blogPosts={blogPosts} technologies={technologies} />
      </div>
    </section>
  );
};

export default Projects;
