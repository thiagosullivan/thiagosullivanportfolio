// "use client"

import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";

const getPageData = async () => {
  const query = `
    query blogPosts {
      blogPosts {
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

export default async function Home() {
  const { blogPosts } = await getPageData();
  console.log(blogPosts, "HOME");

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work blogPosts={blogPosts} />
      {/* <Reviews /> */}
      <Cta />
    </main>
  );
}
