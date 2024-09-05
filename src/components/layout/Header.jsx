import React from "react";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

function Header({ config }) {
  const headerBlocks = config.content.header;

  const headerMenuBlock = headerBlocks.find(
    (block) => block.component === "header_menu"
  );
  const header_menu = headerMenuBlock ? headerMenuBlock.header_menu : [];

  const logoBlock = headerBlocks.find((block) => block.component === "logo");
  const logo = logoBlock ? logoBlock.logo : null;

  const nameBlock = headerBlocks.find((block) => block.component === "name");
  const name = nameBlock ? nameBlock.name : null;

  const bgColorBlock = headerBlocks.find((block) => block.bg_color);
  const bgColor = bgColorBlock ? bgColorBlock.bg_color : "bg-slate-300";

  return (
    <header
      style={{ backgroundColor: bgColor.value }}
      {...storyblokEditable(bgColorBlock)}
    >
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8">
        <div className="flex gap-20 items-center">
          <Link href="/" {...storyblokEditable(logoBlock)}>
            {logo && (
              <img src={logo.filename} alt="logo" className="h-8 w-auto" />
            )}
          </Link>
          <p {...storyblokEditable(nameBlock)} className="font-bold text-gray-50 text-2xl">{name}</p>
        </div>
        <ul className="flex" {...storyblokEditable(headerMenuBlock)}>
          {header_menu.map((item) => {
            const linkUrl = item.link.story?.url || item.link.url;
            return (
              <li
                key={item._uid}
                className="pr-10 font-bold text-gray-50"
                {...storyblokEditable(item)}
              >
                <Link href={linkUrl}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
