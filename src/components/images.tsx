import Image from "next/image";
import React from "react";
import { CardDrawer } from "./carddrawer";
import { ImgDrawer } from "./imgdrawer";

type PropType = {};

const Images: React.FC<PropType> = (props) => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 max-w-[100vw] rounded-2xl overflow-hidden min-h-[500px]">
      <div className="col-span-4 lg:col-span-2 row-span-2 hover:brightness-75 hover:cursor-pointer">
        {/* <ImgDrawer> */}
        <div className="relative h-full">
          <Image
            fill
            src="https://images.unsplash.com/photo-1580494767366-82f4e74f5655?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House thumbnail 1"
            className="shrink-0 aspect-square w-full object-cover"
          />
        </div>
        {/* </ImgDrawer> */}
      </div>
      <div className="col-start-3 row-start-2 hover:brightness-75 hover:cursor-pointer hidden lg:block">
        <div className="relative h-96">
          <Image
            fill
            src="https://images.unsplash.com/photo-1580494767233-3bf998ce3093?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House thumbnail 1"
            className="shrink-0 object-cover aspect-square"
          />
        </div>
      </div>
      <div className="col-start-3 row-start-1 hover:brightness-75 hover:cursor-pointer hidden lg:block">
        {" "}
        <div className="relative h-96">
          <Image
            fill
            src="https://plus.unsplash.com/premium_photo-1681140030190-d21abcf93274?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House thumbnail 1"
            className="shrink-0 aspect-square object-cover"
          />
        </div>
      </div>
      <div className="col-start-4 row-start-2 hover:brightness-75 hover:cursor-pointer hidden lg:block">
        {" "}
        <div className="relative h-96">
          <Image
            fill
            src="https://images.unsplash.com/photo-1580494767228-0e4d9fdbbbef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House thumbnail 1"
            className="shrink-0 aspect-square"
          />
        </div>
      </div>
      <div className="col-start-4 row-start-1 hover:brightness-75 hover:cursor-pointer hidden lg:block">
        <div className="relative h-96">
          <Image
            fill
            src="https://images.unsplash.com/photo-1580494767205-2da300954a3e?q=80&w=2711&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House thumbnail 1"
            className="shrink-0 aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
