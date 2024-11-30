"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import React from "react";

export function LanguageContainer({ children }) {
  const { language } = useLanguage();
  console.log(language, "LANGUAGE 1");

  // Injeta o idioma como prop para todos os filhos
  return (
    <>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { language }) // Passa o idioma como prop
          : child
      )}
    </>
  );
}
