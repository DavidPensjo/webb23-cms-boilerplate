"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";
import Config from "@/components/content-types/Config";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import Hero from "@/components/nestable/Hero";
import ImageWithText from "@/components/nestable/ImageWithText";
import Grid from "@/components/nestable/Grid";
import ImageWithTextLarge from "@/components/nestable/ImageWithTextLarge";
import Article from "@/components/nestable/Article";

const components = {
  page: Page,
  config: Config,
  teaser: Teaser,
  richtext: RichTextDefault,
  hero: Hero,
  image_with_text: ImageWithText,
  grid: Grid,
  image_with_text_large: ImageWithTextLarge,
  article: Article,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
