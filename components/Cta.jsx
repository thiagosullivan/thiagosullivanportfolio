"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useLanguage } from "@/app/context/LanguageContext";

const Cta = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            {language == "en"
              ? "Prepared to turn your ideas into reality? I'm here to help (:"
              : "Preparado para transformar suas ideias em realidade? Eu estou aqui para ajudar (:"}
          </h2>
          <Link href="/contact">
            <Button>{language == "en" ? "Contact Me" : "Me Contate"}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
