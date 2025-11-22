import SlugContainerText from "@/components/SlugContainerText";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";

const getPageData = async (slug) => {
  const query = `
        query blogPosts {
            blogPosts(where: {slug:  "${slug}"}) {
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
      revalidate: 86400,
    },
  });
};

const PageProject = async ({ params: { slug } }) => {
  const { blogPosts } = await getPageData(slug);

  // console.log(blogPosts, "PROJ PAGE IND");

  return (
    <div className="min-h-screen pt-12">
      <div className="container mx-auto">
        <SlugContainerText blogPosts={blogPosts} />
      </div>
    </div>
  );
};

export default PageProject;
