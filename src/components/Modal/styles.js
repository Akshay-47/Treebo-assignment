import styled from "styled-components";

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background-color: white;
  z-index: 99;
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  z-index: ${(props) => 99 + props.zIndex || 99};
  border-radius: 0.3rem;
  border: 1px solid #dee2e6;
`;

const ModalContent = styled.div`
  padding: 1rem;
`;

const CloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-size: 2rem;
  color: #7f7f7f;
  position: absolute;
  right: 10px;
  top: 10px;
  user-select: none;
  &:hover {
    color: black;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${(props) => 99 + props.zIndex || 99};
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalTitle = styled.h2`
  margin: 0;
`;

const ModalHeader = styled.div`
  border-bottom: 1px solid #7f7f7f;
  padding: 1rem;
`;

export {
  ModalContent,
  CloseButton,
  Overlay,
  ModalHeader,
  ModalTitle,
  ModalContainer,
};
