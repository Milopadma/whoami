// const Modal = () => {
//   return (
// <div>
//   <label for="my-modal-4" class="modal-button">
//     <slot/>
//   </label>

//   <input type="checkbox" id="my-modal-4" class="modal-toggle" />
//   <label for="my-modal-4" class="modal cursor-pointer">
//     <label class="modal-box relative" for="">
//       {/* banner iamge spanning the top 25% of the modal */}
//       <div class="modal-image">
//         {image}
//       </div>

//       <h3 class="text-2xl font-bold">{title}</h3>
//       <p class="py-4">{description}</p>
//       <p class="py-2">{description2}</p>
//       <p class="py-2">{description3}</p>

//       <div class="flex justify-end items-center">
//         {link}
//       </div>
//     </label>
//   </label>
// </div>
//   );

//   export default Modal;

interface ModalProps {
  title: string;
  modalID: number;
  tech: string;
  description: string;
  description2: string;
  description3: string;
  image: string;
  link: string;
  children: any;
}

export const Modal = (props: ModalProps) => {
  return (
    <div className="flex justify-center content-center p-2">
      <label htmlFor={`my-modal-${props.modalID}`} className="modal-button">
        {props.children}
      </label>

      <input
        type="checkbox"
        id={`my-modal-${props.modalID}`}
        className="modal-toggle"
      />
      <label
        htmlFor={`my-modal-${props.modalID}`}
        className="modal cursor-pointer"
      >
        <label className="modal-box relative" htmlFor="">
          {/* banner iamge spanning the top 25% of the modal */}
          <img src={props.image} alt={props.title} />

          <h3 className="text-2xl font-bold">{props.title}</h3>
          <h4 className="text-l italic">Tech used: {props.tech}</h4>
          <p className="py-4">{props.description}</p>
          <p className="py-2">{props.description2}</p>
          <p className="py-2">{props.description3}</p>

          <div className="modal-action">
            <a href={props.link} className="btn btn-outline text-blue-600" target="_blank">
              View project
            </a>
            <label htmlFor={`my-modal-${props.modalID}`} className="btn btn-ghost">Close</label>
          </div>
        </label>
      </label>
    </div>
  );
};
