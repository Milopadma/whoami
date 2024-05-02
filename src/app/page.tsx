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
          <div>
            <div id="card" className="flex flex-col relative helvetica bg-neutral-50 p-6 gap-4 shadow-lg h-[292px] w-[155px] rounded-lg">
              <h1 className="text-neutral-400">tools & tech stack</h1>
              <div className="absolute translate-y-[150%] rotate-[-25deg]">
                <span className="text-neutral-900 text-9xl opacity-70">🔧</span>
              </div>
              <div className="text-neutral-800 whitespace-pre-line leading-[calc(1.1em)]">
                vscode{'\n'}
                figma{'\n'}
                react{'\n'}
                nextjs{'\n'}
                tailwindcss{'\n'}
                framer{'\n'}
                anim{'\n'}
                typescript{'\n'}
                go lang
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
