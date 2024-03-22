import Image from "next/image";
export const Card = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="mt-12 flex max-w-[400px] flex-col rounded-2xl bg-zinc-50 pb-16 drop-shadow-xl">
      <Image
        alt="image"
        loading="lazy"
        src={image}
        className="aspect-[1.72] w-full max-w-[500px] rounded-t-2xl"
      />
      <div className="mt-8 flex flex-col px-4 md:px-16">
        <div className="font-bold">{title}</div>
        <div className="mt-2.5 text-base tracking-tighter">website</div>
        <div className="mt-4">{description}</div>
      </div>
    </div>
  );
};
