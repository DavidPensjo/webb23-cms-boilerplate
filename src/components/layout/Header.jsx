import React from "react";
import Link from "next/link";

function Header({ config }) {
  const headerBlocks = config.content.header;

  const headerMenuBlock = headerBlocks.find(block => block.component === 'header_menu');
  const header_menu = headerMenuBlock ? headerMenuBlock.header_menu : [];

  const logoBlock = headerBlocks.find(block => block.component === 'logo');
  const logo = logoBlock ? logoBlock.logo : null;


  return (
    <header className="bg-slate-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link href="#">
          {logo && <img src={logo.filename} alt="logo" className="h-8 w-auto" />}
        </Link>
        <ul className="flex">
          {header_menu.map((item) => (
            <li key={item._uid} className="pr-5">
              <Link href={item.link.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
