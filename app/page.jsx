"use client"

import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { useEffect } from "react";

import { useAppSelector } from "@/redux/store";

export default function Home() {
  const languageChoice = useAppSelector((state) => state.languageReducer.value.languageName);

  console.log(languageChoice, "LANGUAGE CHOICE")

  return (
    <main>
      {/* {languageChoice === "english" ? <h1>INGLÊS SELECIONADO</h1> : <h1>PORTUGUÊS SELECIONADO</h1>} */}
      <Hero languageChoice={languageChoice} />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
