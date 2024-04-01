import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";
import { RichText } from "@/utils/rich-text";
import Image from "next/image";

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
                description
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
            }
            technologies {
                technologyName
            }
        }
      `
  
    return fetchHygraphQuery(
      query,
        //   1000 * 60 * 60 * 24, 
      // 1 day
    )
  }
  

const PageProject = async ({ params: {slug}}) => {

    const {blogPosts} = await getPageData(slug);

    console.log(blogPosts, 'PROJ PAGE IND')
    
    return (
        <div className="min-h-screen pt-12">
            <div className="container mx-auto">
                {blogPosts.map(item => {
                    return (
                        <div key={item.id}>
                            <h1 className="text-4xl text-center font-bold before:bg-dots_light">{item.title}</h1>
                            <div className="bg-primary w-max py-1 px-3 rounded-lg my-7"><p className="text-Secondary">{item.tec}</p></div>
                            <RichText
                                content={item.postText.raw}
                            />
                            {/* <div>
                                {item.projectImages.map(itemImg => {
                                    return (
                                        <div>
                                            <Image
                                                src={itemImg.url}
                                                alt="Imagem do Projeto"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    )
                                })}
                            </div> */}
                        </div>
                    )
                })}

                
            </div>

        </div>
    );
}
 
export default PageProject;