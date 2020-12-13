import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background-color: white;
  z-index: 99;
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
`;

const CloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-size: 28px;
  position: absolute;
  right: 0;
  top: 0;
  user-select: none;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export { ModalWrapper, ModalContent, CloseButton, Overlay };
