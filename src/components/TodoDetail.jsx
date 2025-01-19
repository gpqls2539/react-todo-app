import Modal from "./Modal";

export default function TodoDetail({
  modalOpen = false,
  content,
  onModalClose: handleModalClose,
}) {
  return modalOpen && <Modal onClose={handleModalClose}>{content}</Modal>;
}
