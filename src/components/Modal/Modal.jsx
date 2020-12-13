import React, { useRef } from "react";
import Button from "../Button";
import Portal from "./Portal";
import { ModalContent, CloseButton, ModalWrapper } from "./styles";

const Modal = (props) => {
  const { height, width } = props;
  const [open, setOpen] = React.useState(false);
  const modalBody = useRef(null);

  const handleOverlayClick = (e) => {
    if (e.target === modalBody.current) {
      e.stopPropagation();
      handleClose(e);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <ModalWrapper ref={modalBody} onClick={handleOverlayClick}>
      <ModalContent
        height={height}
        width={width}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={handleClose} type="button">
          &times;
        </CloseButton>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in
          iste excepturi quasi esse? Nulla?
        </p>
        <Modal />
      </ModalContent>
    </ModalWrapper>
  );

  return (
    <>
      <Button type="button" onClick={handleOpen} label=" Open Modal" />
      {open && (
        <div>
          <Portal open={open} onClose={handleClose}>
            {body}
          </Portal>
        </div>
      )}
    </>
  );
};

export default Modal;
