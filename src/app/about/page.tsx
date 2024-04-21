"use client";
import * as React from "react";
import Image from "next/image";
import Spacing from "@/components/spacing";
import Menu from "../components/menu";

function About() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto grid w-full grid-cols-6 bg-white px-4 py-20 text-2xl tracking-tighter text-neutral-800">
      <div className="col-span-4 col-start-2">
        <Menu label="about" />
        <div className="mt-12">
          <div className="mt-8">
            <p className="max-w-[500px]">21 years old, balinese-indonesian.</p>
            <Spacing sm />
            <p className="max-w-[500px]">
              started webdev in 2022, but always loved game modding and
              customizing minecraft mods ever since i was gifted a laptop in
              2014.
            </p>
            <Spacing sm />
            <p className="max-w-[500px]">
              now studying for an information systems degree in bali.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
