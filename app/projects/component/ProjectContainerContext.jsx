"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";

export function ProjectContainerContext() {
  const { language } = useLanguage();
  return (
    <>
      {/* <p className="subtitle mb-8 !text-red-600 text-center">
        {language == "en"
          ? "This portfolio is under construction, checkout my Github"
          : "Esse portfólio está em construção, dá uma olhada no meu Github"}{" "}
        <Link
          href="https://github.com/thiagosullivan"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-xl underline uppercase"
        >
          {language == "en" ? "Here" : "Aqui"}
        </Link>
      </p> */}
      <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
        {language == "en" ? "My Projects" : "Meus Projetos"}
      </h2>
    </>
  );
}
