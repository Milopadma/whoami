"use client"
import Feed from "@/components/feed";
import Spacing from "@/components/spacing";

function Home() {
  return (
    <div className="mx-6">
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
                  <div className="text-neutral-800 whitespace-pre-line leading-[calc(1.1em)]">
                    ITB STIKOM University
                  </div>
                  <div className="text-neutral-400 whitespace-pre-line leading-[calc(1.1em)]">
                    2025 bachelors of information systems
                  </div>
                </div>
                <div>
                  <div className="text-neutral-800 whitespace-pre-line leading-[calc(1.1em)]">
                    GMIS Bali
                  </div>
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
                <div className="text-neutral-800 whitespace-pre-line leading-[calc(1.1em)]">
                  design for hackers
                </div>
              </div>
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
            <div className="text-neutral-800 whitespace-pre-line leading-[calc(1.4em)]">
              blirumah property listing
            </div>
            <div className="text-neutral-400 whitespace-pre-line leading-[calc(1.4em)]">
              nextjs, tailwindcss
            </div>
          </div>
          <div>
            <div className="text-neutral-800 whitespace-pre-line leading-[calc(1.4em)]">
              nbc app
            </div>
            <div className="text-neutral-400 whitespace-pre-line leading-[calc(1.4em)]">
              expo, react native
            </div>
          </div>
          <div>
            <div className="text-neutral-800 whitespace-pre-line leading-[calc(1.4em)]">
              asawood website
            </div>
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
          <a className="underline" href="https://www.twitter.com/mylodev">
            twitter!
          </a>
        </p>
        <Feed />
      </div>
    </div>
  );
}

export default Home;
