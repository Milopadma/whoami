"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { UserForm } from "./components/form";
import Spacing from "@/components/spacing";

function Home() {
  interface ProjectCardProps {
    imageSrc: string;
    title: string;
    tags: string[];
    description: string;
  }

  const ProjectCard: React.FC<ProjectCardProps> = ({
    imageSrc,
    title,
    tags,
    description,
  }) => (
    <div className="flex flex-col rounded-2xl bg-zinc-50 pb-12 hover:cursor-pointer hover:scale-[101%] hover:outline hover:outline-neutral-700 hover:outline-offset-8">
      <div className="relative h-72 ">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-left"
        />
      </div>
      <h3 className="mt-3 text-2xl font-bold tracking-tighter">{title}</h3>
      <div className="mt-2.5 flex gap-x-2 gap-y-1 flex-wrap text-sm tracking-tighter">
        {tags.map((tag) => (
          <div
            key={tag}
            className="justify-center rounded-3xl border border-solid border-black px-2 py-0.5"
          >
            {tag}
          </div>
        ))}
      </div>
      <p className="mt-3 text-base tracking-tighter">{description}</p>
    </div>
  );

  const projects = [
    {
      imageSrc: "/blirumah.png",
      title: "blirumah ",
      tags: [
        "website",
        "backoffice",
        "nextjs",
        "tailwind",
        "postgresql",
        "algoliasearch",
      ],
      description: "the online home for a property agency",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bb09e59f25737cd80fd177858c64940ac8d6dfeb771c2f8bce905827fdf10d?apiKey=3b2ae921196341e8b90eea3d3fee0292&",
      title: "asa wood",
      tags: ["website", "nextjs", "tailwind"],
      description:
        "a place for all information regarding the best wood company in indonesia",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a1bb09e59f25737cd80fd177858c64940ac8d6dfeb771c2f8bce905827fdf10d?apiKey=3b2ae921196341e8b90eea3d3fee0292&",
      title: "asa wood",
      tags: ["website", "nextjs", "tailwind"],
      description:
        "a place for all information regarding the best wood company in indonesia",
    },
  ];
  return (
    <div className="bg-zinc-50 w-full flex flex-col">
      <Spacing xl />
      <Spacing xl />
      <div className="grid w-screen grid-cols-6 flex-col bg-zinc-50">
        <div className="col-span-4 col-start-2 flex w-full flex-col items-start tracking-tighter">
          <div className="text-xl font-normal tracking-tighter text-neutral-800">
            hello, im mylo
          </div>
          <Spacing md />
          <div className="max-w-[500px] text-xl font-normal tracking-tighter text-neutral-800">
            a software engineer from bali interested in positively impacting
            lives around him
          </div>
          <div className="flex flex-col">
            <Spacing xl />
            <Spacing xl />
            <a
              className="text-black font-bold text-6xl text-opacity-5 transition-all duration-500 hover:text-opacity-100"
              href="/about"
            >
              about
            </a>
            <a
              className="text-black font-bold text-6xl text-opacity-5 transition-all duration-500 hover:text-opacity-100"
              href="#contact"
            >
              contact
            </a>
          </div>
          <Spacing xl />
          <Spacing xl />
          <h2 className="text-3xl font-bold tracking-tighter">recent work</h2>
          <Spacing lg />
          <div className="flex flex-wrap gap-8 w-full">
            <ProjectCard {...projects[0]} />
            <ProjectCard {...projects[1]} />
            <ProjectCard {...projects[2]} />
          </div>
        </div>
      </div>
      <Spacing xl />
      <Spacing xl />
      <div className="w-full flex justify-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9037e9a2fcd716a21ed39d8acb33ae89946c7e2aa4ec24a0457209329190b0c2?apiKey=3b2ae921196341e8b90eea3d3fee0292&"
          alt=""
          className="stroke-opacity-30 aspect-[0.23] w-6 border-solid border-black border-opacity-30 stroke-black stroke-[3px]"
        />
      </div>
      <Spacing xl />
      <footer
        className="relative w-full flex-col self-stretch text-2xl tracking-tighter text-zinc-50 md:grid md:grid-cols-6 flex"
        id="contact"
      >
        <div className="absolute z-10 min-h-[129px] w-full -translate-y-[50%] rounded-full bg-neutral-800 col-span-4 col-start-2" />
        <div className="flex w-full flex-col bg-neutral-800 p-20 max-sm:px-6 col-span-4 col-start-2">
          <div>
            im open to work, shoot a message!
            <div className="absolute z-10 min-h-[129px] w-full translate-y-[310%] right-0 rounded-full bg-neutral-800 col-span-4 col-start-2" />
          </div>
          <UserForm />
        </div>
      </footer>
      <Spacing xl />
    </div>
  );
}

export default Home;
