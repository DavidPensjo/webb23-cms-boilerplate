import React from "react";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import RichTextDefault from "./RichText";

const ImageWithTextLarge = ({ blok }) => {
  const { image, text } = blok;
  const optimizedImageUrl = `${image.filename}/m/800x494`;
  const linkUrl = blok.link.story?.url || blok.link.url;
  console.log("blok", blok);

  return (
    <div
      className="flex items-center justify-center my-10"
      {...storyblokEditable(blok)}
    >
      <div className="text-gray-700 text-center">
        <RichTextDefault blok={{ richtext: text }} />
      </div>
      {image && (
        <Image
          src={optimizedImageUrl}
          alt={image.alt || "Image"}
          width={800}
          height={494}
          className="object-cover max-h-[494px] max-w-[800px] w-full"
        />
      )}
    </div>
  );
};

export default ImageWithTextLarge;
