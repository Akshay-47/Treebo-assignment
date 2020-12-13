import React from "react";
import Modal from "./Modal";
import { Overlay } from "./styles";
import useModalState from "./useModalState";

const ModalOverlay = (props) => {
  const { open, level } = useModalState("overlay", "$");

  if (open) {
    return <Overlay onClick={Modal.close} zIndex={level} {...props} />;
  } else {
    return null;
  }
};

export default ModalOverlay;
