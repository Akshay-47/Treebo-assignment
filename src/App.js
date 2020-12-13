import React from "react";
import Modal from "./components/Modal";
import Button from "./components/Button";
import ModalOverlay from "./components/Modal/ModalOverlay";
import "./styles.css";
import { Wrapper } from "./styles";

const Modal1 = (
  <div>
    <p>
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit..."
    </p>
    <Button label="Open Modal 2" onClick={() => Modal.open("m2")} />
  </div>
);

const Modal2 = (
  <div>
    <p>
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit..."
    </p>
    <Button onClick={() => Modal.open("m3")} label="Open Modal 3" />
  </div>
);
const Modal3 = (
  <div>
    <p>
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit..."
    </p>
    <Button onClick={() => Modal.open("m4")} label="Open Modal 4" />
  </div>
);
const Modal4 = (
  <div>
    <p>
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit..."
    </p>
    <Button onClick={() => Modal.open("m5")} label="Open Modal 5" />
  </div>
);
const Modal5 = (
  <div>
    <p>
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit..."
    </p>
    <Button onClick={() => Modal.open("m1")} label="Open Modal 1" />
  </div>
);

export default function App() {
  return (
    <Wrapper>
      <ModalOverlay />
      <Button label="Trigger Modal" onClick={() => Modal.open("m1")}></Button>
      <Modal title="Modal 1" name="m1" height="600px" width="600px">
        {Modal1}
      </Modal>
      <Modal title="Modal 2" name="m2" height="500px" width="500px">
        {Modal2}
      </Modal>
      <Modal title="Modal 3" name="m3" height="400px" width="400px">
        {Modal3}
      </Modal>
      <Modal title="Modal 4" name="m4" height="300px" width="300px">
        {Modal4}
      </Modal>
      <Modal title="Modal 5" name="m5">
        {Modal5}
      </Modal>
    </Wrapper>
  );
}
