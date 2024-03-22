"use client";
import * as React from "react";
import Image from "next/image";
import { Container } from "../components/container";
import { Card } from "../components/card";

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto grid w-full grid-cols-6 bg-white px-4 py-20 text-2xl tracking-tighter text-neutral-800">
      <div className="col-span-4 col-start-2">
        <div className="flex w-auto justify-between gap-5 self-stretch whitespace-nowrap">
          <div>projects</div>
          <div onClick={toggleMenu}>
            {/* Render the hamburger icon */}
            <Image
              alt="menu"
              loading="lazy"
              src="/burger.svg"
              className="aspect-square w-7 shrink-0"
              width={64}
              height={64}
            />
          </div>
        </div>
        <Container>
          <Card
            description="the best wood exporter in indonesia"
            image="https://via.placeholder.com/500x256"
            title="asa wood web"
            key={1}
          />
          <Card
            description="the best wood exporter in indonesia"
            image="https://via.placeholder.com/500x256"
            title="asa wood web"
            key={2}
          />
          <Card
            description="the best wood exporter in indonesia"
            image="https://via.placeholder.com/500x256"
            title="asa wood web"
            key={3}
          />
        </Container>
      </div>
      {/* Render the menu when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 grid grid-cols-6 bg-black">
          <div className="menu col-span-4 col-start-2 flex items-center">
            {/* Add your menu items here */}
            <ul className="max-w-[500px] text-6xl font-extrabold tracking-tighter text-white md:text-9xl">
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
  );
}

export default Portfolio;
