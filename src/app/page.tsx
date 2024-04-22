"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { UserForm } from "./components/form";
import Spacing from "@/components/spacing";
import { CardDrawer } from "@/components/carddrawer";

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
          className="object-cover object-left rounded-2xl"
        />
      </div>
      <Spacing xs />
      <h3 className="text-2xl font-bold tracking-tighter">{title}</h3>
      <div className="flex gap-x-2 gap-y-1 flex-wrap text-sm tracking-tighter">
        {tags.map((tag) => (
          <div
            key={tag}
            className="justify-center rounded-3xl border border-solid border-black px-2 py-0.5"
          >
            {tag}
          </div>
        ))}
      </div>
      <Spacing xs />
      <p className="text-base tracking-tighter">{description}</p>
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
      description: "the online home for a property and realtor agency",
      url: "https://blirumah-web.vercel.app",
    },
    {
      imageSrc: "/asawoodfigma.png",
      title: "asa wood",
      tags: ["website", "nextjs", "tailwind"],
      description:
        "a place for all information regarding the best wood company in indonesia",
      url: "https://asa-wood.vercel.app",
    },
    {
      imageSrc: "/7seasfigma.png",
      title: "7seas",
      tags: ["website", "nextjs", "tailwind"],
      description:
        "a quick hotel booking/info website for the best experience in gili air",
      url: "https://asa-wood.vercel.app",
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
            <CardDrawer
              title={projects[0].title}
              description={projects[0].description}
              url={projects[0].url}
            >
              <ProjectCard {...projects[0]} />
            </CardDrawer>
            <CardDrawer
              title={projects[1].title}
              description={projects[1].description}
              url={projects[1].url}
            >
              <ProjectCard {...projects[1]} />
            </CardDrawer>
            <CardDrawer
              title={projects[2].title}
              description={projects[2].description}
              url={projects[2].url}
            >
              <ProjectCard {...projects[2]} />
            </CardDrawer>
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
            <div className="absolute z-10 min-h-[129px] w-full translate-y-[305%] right-0 rounded-full bg-neutral-800 col-span-4 col-start-2" />
          </div>
          <UserForm />
        </div>
      </footer>
      <Spacing xl />
    </div>
  );
}

export default Home;
