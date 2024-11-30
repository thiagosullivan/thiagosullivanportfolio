import { useLanguage } from "@/app/context/LanguageContext";
import { LanguageContainer } from "@/components/LanguageContainer";
import SlugContainerText from "@/components/SlugContainerText";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import { RichText } from "@/utils/rich-text";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

  return fetchHygraphQuery(
    query
    //   1000 * 60 * 60 * 24,
    // 1 day
  );
};

const PageProject = async ({ params: { slug } }) => {
  const { blogPosts } = await getPageData(slug);

  console.log(blogPosts, "PROJ PAGE IND");

  return (
    <div className="min-h-screen pt-12">
      <div className="container mx-auto">
        <SlugContainerText blogPosts={blogPosts} />
      </div>
    </div>
  );
};

export default PageProject;
