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
import Images from "./images";
import { useRouter } from "next/navigation";

interface CardDrawerProps {
  children: React.ReactNode;
  title: string;
  description: string;
  url: string;
  images?: string[];
}

export function CardDrawer({
  children,
  title,
  description,
  url,
  images,
}: CardDrawerProps) {
  const Router = useRouter();
  const navigate = () => {
    Router.push(url);
  };

  return (
    <Drawer>
      <DrawerTrigger className="text-left">{children}</DrawerTrigger>
      <DrawerContent>
        <div className="px-4">
          <Images />
        </div>
        <DrawerHeader>
          <DrawerTitle className="text-2xl">{title}</DrawerTitle>
          <DrawerDescription className="text-base">
            {description}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex flex-col md:flex-row w-full">
          <Button onClick={() => navigate()}>View Production</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
