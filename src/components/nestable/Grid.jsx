import React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }) => {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] mx-96 gap-8 mt-10" id="grid"
      {...storyblokEditable(blok)}
    >
      {blok.columns?.map((nestedBlok) => (
        <div
          key={nestedBlok._uid}
          className="flex justify-center items-center p-4 "
        >
          <StoryblokComponent blok={nestedBlok} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
