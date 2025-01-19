import { createPortal } from "react-dom";
import Button from "./Button";
import "./Modal.css";

export default function Modal({ children, onClose: handleClose }) {
  return createPortal(
    <div id="modal" className="modal-wrapper">
      <div className="modal-box">
        <Button onClick={handleClose}>닫기</Button>
        {children}
      </div>
    </div>,
    document.body
  );
}
