import React from "react";
import { storyblokEditable } from "@storyblok/react";
import RichTextDefault from "./RichText";

function Hero({ blok }) {
  const { hero_image, text } = blok;

  const { image, blur } = hero_image[0] || {};

  const blurClass =
    {
      small: "blur-[3px]",
      medium: "blur-[4px]",
      large: "blur-[5px]",
    }[blur] || "";

  const scaleClass = blur ? "scale-110" : "";

  return (
    <div className="hero-section relative" {...storyblokEditable(blok)}>
      <div className="hero-image overflow-hidden">
        {image && (
          <img
            src={image.filename}
            alt={image.alt || "Hero Image"}
            className={`w-full h-auto object-cover transition-transform duration-500 ${blurClass} ${scaleClass}`}
          />
        )}
      </div>
      <div className="hero-text absolute inset-0 flex items-center justify-center p-8">
        {text && (
          <h1 className="bg-black bg-opacity-50 text-white p-4 rounded text-7xl">
            <RichTextDefault blok={{ richtext: text }} />
          </h1>
        )}
      </div>
    </div>
  );
}

export default Hero;
