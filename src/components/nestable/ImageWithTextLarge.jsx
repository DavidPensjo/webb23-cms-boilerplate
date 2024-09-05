import React from "react";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import RichTextDefault from "./RichText";

const ImageWithTextLarge = ({ blok }) => {
  const { image, text, title } = blok;
  const optimizedImageUrl = `${image.filename}/m/700x432`;
  const linkUrl = blok.link.story?.url || blok.link.url;

  return (
    <div className="flex justify-center my-10" {...storyblokEditable(blok)}>
      <div className="w-[600px] h-[432px] pr-10 flex justify-between flex-col">
        <p className="text-2xl font-bold mb-4">{title}</p>

        <RichTextDefault className="text-gray-700" blok={{ richtext: text }} />
        <Link href={linkUrl} className="mt-auto">
          <button className="h-8 flex items-center text-white bg-[#1b243f] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2">
            To article
          </button>
        </Link>
      </div>
      <div>
        {image && (
          <Image
            src={optimizedImageUrl}
            alt={image.alt || "Image"}
            width={700}
            height={432}
            className="object-cover max-h-[432px] max-w-[700px] w-full"
          />
        )}
      </div>
    </div>
  );
};

export default ImageWithTextLarge;
