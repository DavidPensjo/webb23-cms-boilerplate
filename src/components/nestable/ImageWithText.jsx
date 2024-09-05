import React from "react";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

const ImageWithText = ({ blok }) => {
  const { image, title, text } = blok;
  const optimizedImageUrl = `${image.filename}/m/200x200`;
  const linkUrl = blok.link.story?.url || blok.link.url;
  return (
    <Link
      href={linkUrl}
      className="flex flex-col items-center justify-start max-w-[500px] h-full"
      {...storyblokEditable(blok)}
    >
      {image && (
        <Image
          src={optimizedImageUrl}
          alt={image.alt || "Image"}
          width={200}
          height={200}
          className="object-cover max-h-[200px] max-w-[200px] w-full"
        />
      )}
      <h2 className="text-xl font-bold mt-4 text-center">{title}</h2>
      <p className="text-gray-700 text-center">{text}</p>
    </Link>
  );
};

export default ImageWithText;
