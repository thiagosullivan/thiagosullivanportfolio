"use client";
import React, { createContext, useContext, useState } from "react";

// Criação do Context
const LanguageContext = createContext();

// Provedor para encapsular a aplicação
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Idioma padrão

  // Funções para alternar idiomas
  const setEnglish = () => setLanguage("en");
  const setPortuguese = () => setLanguage("pt");

  return (
    <LanguageContext.Provider value={{ language, setEnglish, setPortuguese }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para acessar o Context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de LanguageProvider");
  }
  return context;
};
