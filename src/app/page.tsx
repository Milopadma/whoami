"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";
import { UserForm } from "./components/form";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useGSAP(() => {
    gsap.to(portfolioRef.current, {
      color: "black",
      textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      duration: 0.001,
      scrollTrigger: {
        trigger: portfolioRef.current,
        start: "top center",
        end: "top 312px",
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.to(aboutRef.current, {
      color: "black",
      textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      duration: 0.001,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top center",
        end: "top 312px",
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.to(contactRef.current, {
      color: "black",
      textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      duration: 0.001,
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top center",
        end: "top 312px",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  // handle submit form
  const handleSubmit = async () => {
    console.log("submit");
    const name = document.getElementById("name")!.innerText;
    const message = document.getElementById("message")!.innerText;
    const contact = document.getElementById("contact")!.innerText;
    // console.log(result);
  };

  return (
    <>
      <div className="grid w-screen grid-cols-6 flex-col bg-zinc-50">
        <div className="col-span-4 col-start-2 mt-44 flex h-screen w-full flex-col items-start text-6xl tracking-tighter">
          <div className="text-2xl font-extralight tracking-tighter text-neutral-800">
            hello, im mylo
          </div>
          <div className="mt-24 max-w-[500px] text-2xl font-normal tracking-tighter text-neutral-800">
            a software engineer from bali interested in positively impacting
            lives around him
          </div>
          <div className="mt-32 flex flex-col md:mt-64">
            <a
              className="hoverBold text-black text-opacity-5 transition-all duration-500 hover:text-opacity-100"
              href="/portfolio"
              ref={portfolioRef}
            >
              portfolio
            </a>
            <a
              className="hoverBold text-black text-opacity-5 transition-all duration-500 hover:text-opacity-100"
              href="/about"
              ref={aboutRef}
            >
              about
            </a>
            <a
              className="text-black text-opacity-5 transition-all duration-500 hover:text-opacity-100"
              ref={contactRef}
              href="#contact"
            >
              contact
            </a>
          </div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9037e9a2fcd716a21ed39d8acb33ae89946c7e2aa4ec24a0457209329190b0c2?apiKey=3b2ae921196341e8b90eea3d3fee0292&"
        alt=""
        className="stroke-opacity-30 mt-96 aspect-[0.23] w-6 border-[3px] border-solid border-black border-opacity-30 stroke-black stroke-[3px]"
      />
      <footer className="relative mt-48 flex w-full flex-col self-stretch text-2xl tracking-tighter text-zinc-50">
        <div className="absolute z-10 min-h-[129px] w-full -translate-y-[50%] rounded-full bg-neutral-800" />
        <div className="mt-0 flex w-full flex-col bg-neutral-800 p-20 max-sm:px-6">
          <p className="mt-56">im open to work, shoot a message!</p>
          <UserForm />
        </div>
      </footer>
    </>
  );
}

export default Home;
