import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Config = ({ blok }) => {
  return <div {...storyblokEditable(blok)}></div>;
};

export default Config;
