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

  const bgColorBlock = headerBlocks.find((block) => block.bg_color);
  const bgColor = bgColorBlock ? bgColorBlock.bg_color : "bg-slate-300";

  return (
    <header
      style={{ backgroundColor: bgColor.value }}
      {...storyblokEditable(bgColorBlock)}
    >
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8">
        <Link href="#" {...storyblokEditable(logoBlock)}>
          {logo && (
            <img src={logo.filename} alt="logo" className="h-8 w-auto" />
          )}
        </Link>
        <ul className="flex" {...storyblokEditable(headerMenuBlock)}>
          {header_menu.map((item) => (
            <li
              key={item._uid}
              className="pr-10 font-bold text-gray-50"
              {...storyblokEditable(item)}
            >
              <Link href={item.link.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
