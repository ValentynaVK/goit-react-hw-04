import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ image, onClose }) {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <div onClick={onClose} className={css.ModalImgContainer}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.ImgModal}
        />
      </div>
    </Modal>
  );
}
