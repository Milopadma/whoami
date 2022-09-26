export interface Props {
  image: string;
  title: string;
  body: string;
  href?: string;
}

export const Card = ({ image, title, body }: Props) => {
  return (
    <div>
      <div className="card card-compact lg:w-96 w-72 bg-base-100 shadow-xl hover:scale-110 hover:z-10 transition-all ease-in-out">
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
