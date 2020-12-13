import React from "react";
import { Overlay } from "./styles";

const ModalOverlay = (props) => {
  return <Overlay>{props.children}</Overlay>;
};

export default ModalOverlay;
