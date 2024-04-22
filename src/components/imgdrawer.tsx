import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import Image from "next/image";

interface CardDrawerProps {
  children: React.ReactNode;
}

export function ImgDrawer({ children }: CardDrawerProps) {
  const imgurls = [
    "https://images.unsplash.com/photo-1580494767366-82f4e74f5655?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1580494767233-3bf998ce3093?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1681140030190-d21abcf93274?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1580494767228-0e4d9fdbbbef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1580494767205-2da300954a3e?q=80&w=2711&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <Drawer>
      <DrawerTrigger className="relative h-full w-full">
        {children}
      </DrawerTrigger>
      <DrawerContent className="bg-zinc-50 flex flex-col fixed bottom-0 left-0 right-0 max-h-[96%] rounded-lg">
        <div className="w-full flex flex-col overflow-auto p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-4 rounded-2xl">
            <GridImages imgurls={imgurls} />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

const GridImages = ({ imgurls }: { imgurls: string[] }) => {
  return (
    <>
      {imgurls.map((imgurl, index) => (
        <div
          key={index}
          className={`${
            index % 3 === 0 ? "col-span-2" : ""
          } hover:brightness-75 hover:cursor-pointer`}
        >
          <div className="relative h-[500px]">
            <Image
              fill
              src={imgurl}
              alt={`House thumbnail ${index + 1}`}
              className="shrink-0 aspect-square object-cover"
            />
          </div>
        </div>
      ))}
    </>
  );
};
