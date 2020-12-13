import React from "react";
import Modal from "./components/Modal";
import "./styles.css";

const Modal1 = (
  <div>
    <h1>I am Modal1</h1>
    <p>
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit..."
    </p>
  </div>
);

const Modal2 = (
  <div>
    <h1>I am Modal2</h1>
    <p>
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit..."
    </p>
  </div>
);
const Modal3 = (
  <div>
    <h1>I am Modal3</h1>
    <p>
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit..."
    </p>
  </div>
);
const Modal4 = (
  <div>
    <h1>I am Modal4</h1>
    <p>
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit..."
    </p>
  </div>
);
const Modal5 = (
  <div>
    <h1>I am Modal5</h1>
    <p>
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit..."
    </p>
  </div>
);

export default function App() {
  return (
    <div>
      <Modal name="m0" body={Modal1} height={""} width={""} />
    </div>
  );
}
