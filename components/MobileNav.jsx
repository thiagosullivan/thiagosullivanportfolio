import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

import BraFlag from "../public/brazil-flag.jpg";
import UsaFlag from "../public/usa-flag.jpg";
import { useLanguage } from "@/app/context/LanguageContext";
import { Button } from "./ui/button";
import Image from "next/image";

const MobileNav = () => {
  const { language, setEnglish, setPortuguese } = useLanguage();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-center">
              {language == "en" ? "Language" : "Idioma"}:
            </p>
            <div className="flex gap-3 mt-1">
              <Button
                className="border-none bg-transparent w-[50px] h-[35px] min-w-0 p-0 relative cursor-pointer"
                value="portuguese"
                onClick={setPortuguese}
              >
                <Image
                  src={BraFlag}
                  alt="Português"
                  fill
                  className="absolute"
                />
              </Button>
              <Button
                className="border-none bg-transparent w-[50px] h-[35px] min-w-0 p-0 relative cursor-pointer"
                value="english"
                onClick={setEnglish}
              >
                <Image src={UsaFlag} alt="English" fill className="absolute" />
              </Button>
            </div>
          </div>
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
