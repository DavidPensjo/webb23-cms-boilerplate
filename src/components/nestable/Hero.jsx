import React from "react";
import { storyblokEditable } from "@storyblok/react";
import RichTextDefault from "./RichText";
import Image from "next/image";
import Link from "next/link";

function Hero({ blok }) {
  const { hero_image, text, button } = blok;

  const { image, blur } = hero_image[0] || {};

  const blurClass =
    {
      small: "blur-[3px]",
      medium: "blur-[4px]",
      large: "blur-[5px]",
    }[blur] || "";

  const scaleClass = blur ? "scale-105" : "";
  return (
    <div className="relative" {...storyblokEditable(blok)}>
      <div className="w-full h-[750px] overflow-hidden object-cover relative">
        {image && (
          <Image
            src={image.filename}
            alt={image.alt || "Hero Image"}
            className={`object-cover transition-transform duration-500 ${blurClass} ${scaleClass}`}
            fill={true}
            priority
          />
        )}
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="bg-black bg-opacity-50 flex p-10 rounded-md">
          {text && (
            <h1 className=" text-white p-4">
              <RichTextDefault blok={{ richtext: text }} />
            </h1>
          )}
          {button && (
            <Link href={button[0].link.url}>
              <button className="h-8 flex items-center text-white bg-[#1b243f] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2">
                {button[0].label}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
