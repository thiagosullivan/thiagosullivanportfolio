"use client";

import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useLanguage } from "@/app/context/LanguageContext";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Elevating digital experiences through masterful graphic web design.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Crafting sleek and functional online experiences through expert web development skills.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App development",
    description:
      "Unlocking innovation on your phone app, crafting intuitive and impactful digital solutions.",
  },
];
const servicesDataPt = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Elevando experiências digitais por meio de um web design gráfico magistral.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Desenvolvimento Web",
    description:
      "Criando experiências online elegantes e funcionais por meio de habilidades especializadas em desenvolvimento web.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Desenvolvimento de App",
    description:
      "Desbloqueando inovação no seu aplicativo de celular, criando soluções digitais intuitivas e impactantes.",
  },
];

const Services = () => {
  const { language } = useLanguage();

  return (
    <div className="mb-12 xl:mb-36 mt-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          {language == "en" ? "My Services" : "Meus Serviços"}
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24">
          {language == "en" ? (
            <>
              {servicesData.map((item, index) => {
                return (
                  <Card
                    className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                    key={index}
                  >
                    <CardHeader className="text-primary absolute -top-[60px] ">
                      <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                        {item.icon}
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardTitle className="mb-4">{item.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </>
          ) : (
            <>
              {servicesDataPt.map((item, index) => {
                return (
                  <Card
                    className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                    key={index}
                  >
                    <CardHeader className="text-primary absolute -top-[60px] ">
                      <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                        {item.icon}
                      </div>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardTitle className="mb-4">{item.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
