// "use client"

import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Work from "@/components/Work";
// import { useEffect } from "react";

import { useAppSelector } from "@/redux/store";
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
  // const languageChoice = useAppSelector((state) => state.languageReducer.value.languageName);

  // console.log(languageChoice, "LANGUAGE CHOICE")

  const { blogPosts } = await getPageData();
  console.log(blogPosts, "HOME");

  return (
    <main>
      {/* {languageChoice === "english" ? <h1>INGLÊS SELECIONADO</h1> : <h1>PORTUGUÊS SELECIONADO</h1>} */}
      {/* <Hero languageChoice={languageChoice} /> */}
      <Hero />
      <About />
      <Services />
      <Work blogPosts={blogPosts} />
      {/* <Reviews /> */}
      <Cta />
    </main>
  );
}
