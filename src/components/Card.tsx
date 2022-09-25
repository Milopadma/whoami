export interface Props {
  image: string;
  title: string;
  body: string;
  href?: string;
}

// export const Card = ({ image, href, title, body }: Props) => {
//   return (
//     <div className="link-card">
//       <a href={href} className="lg:min-h-[450px] min-h-0">
//         <img
//           className="max-h-[250px] min-h-[250px] w-full object-cover"
//           src={image}
//           alt={title}
//           loading="lazy"
//           width="100%"
//           height="auto"
//         />
//         <h2 className="font-bold">
//           {title}
//           <span>&rarr;</span>
//         </h2>
//         <p className="italic">{body}</p>
//       </a>
//     </div>
//   );
// };

export const Card = ({ image, title, body }: Props) => {
  return (
    <div>
      <div className="card card-compact lg:w-96 w-72 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};
