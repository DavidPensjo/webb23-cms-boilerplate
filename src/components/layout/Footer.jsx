import React from "react";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import RichTextDefault from "../nestable/RichText";

function Footer({ config }) {
  const footerBlocks = config.content.footer;

  const footerMenuBlock = footerBlocks.find(
    (block) => block.component === "footer_menu"
  );
  const footer_menu = footerMenuBlock ? footerMenuBlock.footer_menu : [];

  const logoBlock = footerBlocks.find((block) => block.component === "logo");
  const logo = logoBlock ? logoBlock.logo : null;

  const addressBlock = footerBlocks.find(
    (block) => block.component === "adress"
  );

  const bgColorBlock = footerBlocks.find((block) => block.bg_color);
  const bgColor = bgColorBlock ? bgColorBlock.bg_color : "bg-slate-300";

  const copyrightBlock = footerBlocks.find(
    (block) => block.component === "copyright_notice"
  );
  return (
    <footer
      style={{ backgroundColor: bgColor.value }}
      {...storyblokEditable(bgColorBlock)}
      className="text-gray-50"
    >
      <div className="pt-10">
        <div className="flex justify-evenly">
          <div>
            <ul>
              <li>
                <Link href="#" {...storyblokEditable(logoBlock)}>
                  {logo && (
                    <img
                      src={logo.filename}
                      alt="logo"
                      className="h-8 w-auto mb-2"
                    />
                  )}
                </Link>
              </li>
              {addressBlock && (
                <li {...storyblokEditable(addressBlock)}>
                  <RichTextDefault blok={{ richtext: addressBlock.adress }} />
                </li>
              )}
            </ul>
          </div>
          <div>
            <ul
              className="flex text-gray-50 flex-col mt-4"
              {...storyblokEditable(footerMenuBlock)}
            >
              {footer_menu.map((item) => (
                <li
                  key={item._uid}
                  className="pr-10 font-bold text-gray-50"
                  {...storyblokEditable(item)}
                >
                  <Link href={item.link.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        {...storyblokEditable(copyrightBlock)}
        className="flex justify-center text-gray-200 mt-10 pb-2"
      >
        {copyrightBlock && (
          <RichTextDefault
            blok={{ richtext: copyrightBlock.copyright_notice }}
          />
        )}
      </div>
    </footer>
  );
}

export default Footer;
