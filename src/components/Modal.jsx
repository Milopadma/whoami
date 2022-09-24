const Modal = ({ children, title, description, link }) => {
  return (
    <div>
      <label htmlFor="my-modal-4" className="modal-button">
        {children}
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" for="">
          {/* banner iamge spanning the top 25% of the modal */}
          <div className="modal-image">
            <img
              src="./portfolio.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-lg font-bold">{title}</h3>
          <p className="py-4">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Project
          </a>
        </label>
      </label>
    </div>
  );
};

export default Modal;
