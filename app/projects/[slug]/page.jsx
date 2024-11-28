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
        {blogPosts.map((item) => {
          return (
            <div key={item.id}>
              <h1 className="text-4xl text-center font-bold before:bg-dots_light">
                <span className="border-b-2 border-bg-primary">
                  {item.title}
                </span>
              </h1>
              <div className="bg-primary w-max py-1 px-3 rounded-lg my-7">
                <p className="text-Secondary">{item.tec}</p>
              </div>
              <div>
                <RichText content={item.postText.raw} />
                <div className="border-b border-b-gray-300 mt-7" />
                <div>
                  {item.projectImages.map((itemImg, index) => {
                    return (
                      <div
                        className="w-full h-[700px] relative mt-12"
                        key={index}
                      >
                        <Image
                          src={itemImg.url}
                          alt="Imagem do Projeto"
                          fill
                          className="object-contain"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="border-b border-b-gray-300 mt-7" />
                <div className="flex justify-center items-center gap-3 mb-12 mt-7">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg bg-secondary text-white px-2 py-1 rounded-md hover:bg-primary transition-all"
                  >
                    <Link2 size={20} />
                    <p>Live Demo</p>
                  </Link>
                  <Link
                    href={item.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg bg-secondary text-white px-2 py-1 rounded-md hover:bg-primary transition-all"
                  >
                    <GitHubLogoIcon size={20} />
                    <p>Repo</p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageProject;
