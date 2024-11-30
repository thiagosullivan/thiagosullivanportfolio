"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import { RichText } from "@/utils/rich-text";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SlugContainerText = ({ blogPosts }) => {
  const { language } = useLanguage();
  return (
    <>
      {blogPosts.map((item) => {
        return (
          <div key={item.id}>
            <h1 className="text-4xl text-center font-bold before:bg-dots_light">
              <span className="border-b-2 border-bg-primary">
                {language == "en" ? `${item.title}` : `${item.titulo}`}
              </span>
            </h1>
            <div className="bg-primary w-max py-1 px-3 rounded-lg my-7">
              <p className="text-Secondary">{item.tec}</p>
            </div>
            <div>
              <div className="text-xl">
                {language == "en" ? (
                  <RichText content={item.postText.raw} />
                ) : (
                  <RichText content={item.postTextPt.raw} />
                )}
              </div>
              <div className="border-b border-b-gray-300 mt-7" />
              <div>
                {item.projectImages.map((itemImg, index) => {
                  return (
                    <div
                      className="w-full h-[700px] relative mt-12"
                      key={index}
                    >
                      <Image
                        src={itemImg.url}
                        alt="Imagem do Projeto"
                        fill
                        className="object-contain"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="border-b border-b-gray-300 mt-7" />
              <div className="flex justify-center items-center gap-3 mb-12 mt-7">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg bg-secondary text-white px-2 py-1 rounded-md hover:bg-primary transition-all"
                >
                  <Link2 size={20} />
                  <p>Live Demo</p>
                </Link>
                <Link
                  href={item.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg bg-secondary text-white px-2 py-1 rounded-md hover:bg-primary transition-all"
                >
                  <GitHubLogoIcon size={20} />
                  <p>Repo</p>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SlugContainerText;
