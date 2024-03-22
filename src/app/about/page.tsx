"use client";
import * as React from "react";
import Image from "next/image";

function About() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto grid w-full grid-cols-6 bg-white px-4 py-20 text-2xl tracking-tighter text-neutral-800">
      <div className="col-span-4 col-start-2">
        <div className="flex w-auto justify-between gap-5 self-stretch whitespace-nowrap">
          <div>about</div>
          <div onClick={toggleMenu}>
            {/* Render the hamburger icon */}
            <Image
              alt="menu"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c9ee0f7d2ed184709ca3ade9cc59782f8d25ff939d7d037f7787cc16328dfd9?"
              className="aspect-square w-7 shrink-0"
            />
          </div>
        </div>
        <div className="mt-12">
          <div className="mt-8">
            <p>hello</p>
          </div>
        </div>
        {/* Render the menu when isMenuOpen is true */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 grid grid-cols-6 bg-black">
            <div className="menu col-span-4 col-start-2 flex items-center">
              {/* Add your menu items here */}
              <ul className="text-6xl font-extrabold tracking-tighter text-white md:text-9xl">
                <a href="/about" className="underline-animation">
                  about
                </a>
                <a href="/portfolio" className="underline-animation">
                  portfolio
                </a>
                <a href="/" className="underline-animation">
                  home
                </a>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
