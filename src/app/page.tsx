"use client";
import Icon from "@/components/icon";
import Spacing from "@/components/spacing";
import { useState } from "react";

function Home() {
  const [emailText, setEmailText] = useState("email");

  return (
    <div className="mx-6 lg:mx-80">
      <Spacing size96 />
      <div className="grid grid-cols-6">
        <div className="col-span-5 col-start-1">
          <h1 className="tracking-tighter font-semibold alatsi text-6xl text-neutral-900">
            hi! im mylo
          </h1>
          <p className="helvetica tracking-tighter leading-[calc(1.2em)] text-neutral-900">
            im a software engineer obsessing about how things look and feel
          </p>
          <Spacing size48 />
        </div>
        <div className="col-span-6 col-start-1">
          <div className="grid grid-cols-5 gap-2">
            <div
              id="card"
              className="flex flex-col relative helvetica bg-neutral-50 p-6 gap-4 shadow-lg h-[292px] w-full rounded-lg col-start-1 col-span-2"
            >
              <h1 className="text-neutral-400 text-sm">tools & tech stack</h1>
              <div className="absolute translate-y-[290%] rotate-[-25deg]">
                <span className="text-neutral-900 text-7xl opacity-70">🔧</span>
              </div>
              <div className="text-neutral-800 whitespace-pre-line leading-[calc(1.1em)]">
                vscode{"\n"}
                figma{"\n"}
                react{"\n"}
                nextjs{"\n"}
                tailwindcss{"\n"}
                framer anim{"\n"}
                typescript{"\n"}
                go lang
              </div>
            </div>
            <div className="flex flex-col w-full col-start-3 col-span-3 gap-2">
              <div
                id="card"
                className="flex flex-col relative helvetica bg-neutral-50 p-6 gap-4 shadow-lg h-[186px] w-full rounded-lg"
              >
                <h1 className="text-neutral-400 text-sm">education</h1>
                <div className="absolute translate-y-[-75%] translate-x-[200%] rotate-[15deg]">
                  <span className="text-neutral-900 text-7xl opacity-70">
                    🎓
                  </span>
                </div>
                <div>
                  <a
                    href="https://www.stikom-bali.ac.id"
                    target="_"
                    className="text-neutral-800 hover:text-neutral-400 whitespace-pre-line leading-[calc(1.1em)] flex flex-row gap-1"
                  >
                    ITB STIKOM University
                    <Icon linkout />
                  </a>
                  <div className="text-neutral-400 whitespace-pre-line leading-[calc(1.1em)]">
                    2025 bachelors of information systems
                  </div>
                </div>
                <div>
                  <a
                    href="https://www.gandhibali.org"
                    target="_"
                    className="text-neutral-800 hover:text-neutral-400 whitespace-pre-line leading-[calc(1.1em)] flex flex-row gap-1"
                  >
                    GMIS Bali
                    <Icon linkout />
                  </a>
                  <div className="text-neutral-400 whitespace-pre-line leading-[calc(1.1em)]">
                    elementary to high school
                  </div>
                </div>
              </div>
              <div
                id="card"
                className="flex flex-col relative helvetica bg-neutral-50 p-6 gap-4 shadow-lg h-[98px] rounded-lg"
              >
                <h1 className="text-neutral-400 text-sm">currently reading</h1>
                <div className="absolute translate-y-[-20%] translate-x-[200%] rotate-[5deg]">
                  <span className="text-neutral-900 text-7xl opacity-70">
                    📚
                  </span>
                </div>
                <a
                  href="https://www.amazon.com.au/Design-Hackers-Kadavy/dp/1119998956"
                  target="_"
                  className="text-neutral-800 hover:text-neutral-400 whitespace-pre-line leading-[calc(1.1em)] flex flex-row gap-1"
                >
                  design for hackers
                  <Icon linkout />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Spacing size8 />
        <div className="col-start-1 col-span-6">
          <div
            id="card"
            className="flex flex-col relative helvetica bg-neutral-50 p-6 gap-4 shadow-lg w-full rounded-lg col-start-1 col-span-2"
          >
            <h1 className="text-neutral-400 text-sm">recent projects</h1>
            <div className="absolute translate-y-[230%] translate-x-[300%] rotate-[12deg]">
              <span className="text-neutral-900 text-7xl opacity-70">💻</span>
            </div>
            <div>
              <a
                href="https://www.figma.com/proto/bVhSIL3CZhpvYehvn0ToE9/blirumah?page-id=1203%3A966&type=design&node-id=3252-3253&viewport=-5332%2C68%2C0.25&t=ffF4KPSWm295ZyY8-1&scaling=scale-down&starting-point-node-id=3252%3A3253&show-proto-sidebar=1&mode=design"
                target="_"
                className="text-neutral-800 hover:text-neutral-400 whitespace-pre-line leading-[calc(1.4em)] flex flex-row gap-1 items-center"
              >
                property listing website prototype
                <Icon linkout />
              </a>
              <div className="text-neutral-400 whitespace-pre-line leading-[calc(1.4em)]">
                figma, tailwindcss
              </div>
            </div>
            <div>
              <a
                href="https://www.figma.com/proto/sIfJzI06pIo7OToAmRTiiZ/nbc-app?page-id=1203%3A966&type=design&node-id=1203-989&viewport=555%2C442%2C0.54&t=RTVGhNW7HA0OXwHu-1&scaling=scale-down&starting-point-node-id=1203%3A989&show-proto-sidebar=1&mode=design"
                target="_"
                className="text-neutral-800 hover:text-neutral-400 whitespace-pre-line leading-[calc(1.4em)] flex flex-row gap-1 items-center"
              >
                beauty salon app prototype
                <Icon linkout />
              </a>
              <div className="text-neutral-400 whitespace-pre-line leading-[calc(1.4em)]">
                figma, tailwindcss
              </div>
            </div>
            <div>
              <a
                href="https://www.7seascottages.com/"
                target="_"
                className="text-neutral-800 hover:text-neutral-400 whitespace-pre-line leading-[calc(1.4em)] flex flex-row gap-1 items-center"
              >
                7seas
                <Icon linkout />
              </a>
              <div className="text-neutral-400 whitespace-pre-line leading-[calc(1.4em)]">
                vite, react
              </div>
            </div>
            <div>
              <a
                href="https://asa-wood-web.vercel.app/"
                target="_"
                className="text-neutral-800 hover:text-neutral-400 whitespace-pre-line leading-[calc(1.4em)] flex flex-row gap-1 items-center"
              >
                asawood website
                <Icon linkout />
              </a>
              <div className="text-neutral-400 whitespace-pre-line leading-[calc(1.4em)]">
                react, vite, tailwindcss
              </div>
            </div>
          </div>
        </div>
        <Spacing size80 />
        <div className="col-start-1 col-span-6">
          <p className="text-neutral-400 helvetica text-sm">
            catch me on{" "}
            <a
              className="underline text-neutral-800 hover:text-neutral-400"
              href="https://www.twitter.com/mylodev"
            >
              twitter!
            </a>
          </p>
          <Spacing size16 />
          <iframe
            loading="lazy"
            width="100%"
            height="100%"
            src="https://syndication.twitter.com/srv/timeline-profile/screen-name/mylodev?frame=false&hideBorder=false&hideFooter=false&hideHeader=false&hideScrollBar=false&origin=milopadma.com&maxHeight=800px&showHeader=true&showReplies=false&transparent=false&theme=light&width=550px"
            style={{ height: "800px" }}
          ></iframe>
        </div>
        <div className="col-start-2 col-span-4 gap-2 w-full">
          <Spacing size112 />
          <a
            href="https://twitter.com/messages/2549656566-2549656566?text=hello!"
            target="_"
            id="card"
            className="flex flex-col relative helvetica bg-neutral-50 p-6 gap-4 shadow-lg h-[98px] rounded-lg justify-center items-center max-w-[500px] hover:bg-neutral-200 text-neutral-800 hover:text-neutral-400 transition-all ease-linear duration-200"
          >
            <h1>lets connect</h1>
            <div className="absolute translate-y-[-20%] translate-x-[calc(20vw)] rotate-[15deg]">
              <span className="text-neutral-900 text-9xl opacity-90">❗</span>
            </div>
          </a>
          <Spacing size112 />
        </div>
        <div className="col-start-1 col-span-6 flex flex-row gap-2">
          <div
            id="card"
            className="flex flex-col relative helvetica bg-neutral-50 p-6 gap-4 shadow-lg w-full rounded-lg"
          >
            <h1 className="text-neutral-400 text-sm">other contacts</h1>
            <div className="absolute translate-y-[-75%] translate-x-[-65%] rotate-[90deg]">
              <span className="text-neutral-900 text-7xl opacity-70">📞</span>
            </div>
            <a
              href="https://www.instagram.com/milopadma"
              className="block"
              target="_"
            >
              <div className="text-neutral-800 hover:text-neutral-400 whitespace-pre-line leading-[calc(1.1em)] flex flex-row gap-1">
                instagram
                <Icon linkout />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/milopadma"
              className="block"
              target="_"
            >
              <div className="text-neutral-800 hover:text-neutral-400 whitespace-pre-line leading-[calc(1.1em)] flex flex-row gap-1">
                linkedin
                <Icon linkout />
              </div>
            </a>
          </div>
          <div
            id="card"
            className="flex flex-col relative helvetica bg-neutral-50 p-6 gap-4 shadow-lg w-full rounded-lg"
          >
            <h1 className="text-neutral-400 text-sm">work with me?</h1>
            <div className="absolute translate-y-[75%] translate-x-[135%] rotate-[0deg]">
              <span className="text-neutral-900 text-7xl opacity-70">🤝</span>
            </div>
            <div
              className="text-neutral-800 hover:text-neutral-400 whitespace-pre-line leading-[calc(1.1em)] flex flex-row gap-1 cursor-pointer transition-all ease-linear duration-200 items-center"
              onClick={() => {
                navigator.clipboard.writeText("milo@milopadma.com");
                setEmailText("copied!");
                setTimeout(() => {
                  setEmailText("email");
                }, 2000);
              }}
            >
              {emailText}
              <Icon copy />
            </div>
          </div>
        </div>
        <Spacing size64 />
        <div className="col-start-1 col-span-6">
          <div className="w-full flex text-neutral-400 helvetica justify-center text-sm">
            2024 mylo. all rights reserved
          </div>
        </div>
        <Spacing size16 />
      </div>
    </div>
  );
}

export default Home;
