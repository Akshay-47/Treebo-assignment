import React from "react";
import ModalController from "../../utils/ModalController";
import {
  ModalContent,
  CloseButton,
  ModalContainer,
  ModalHeader,
  ModalTitle,
} from "./styles";
import useModalState from "./useModalState";

const Modal = ({ name, width, height, title, children }) => {
  const { open, level } = useModalState(name);

  if (open) {
    return (
      <ModalContainer zIndex={level} height={height} width={width}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={Modal.close} type="button">
            &times;
          </CloseButton>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    );
  } else {
    return null;
  }
};

Modal.open = ModalController.open;
Modal.close = ModalController.close;

export default Modal;
