"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import Socials from "./Socials";

const Footer = () => {
  const { language } = useLanguage();
  const currentTime = new Date();
  const year = currentTime.getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          {/* copyright */}
          <div className="text-white">
            {language == "en" ? (
              <p>
                Developed by Thiago "Sullivan" Santos | Copyright &copy; {year}.
                All rights reserved.
              </p>
            ) : (
              <p>
                Desenvolvido por Thiago "Sullivan" Santos | Copyright &copy;{" "}
                {year}. Todos os direitos reservados.
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
