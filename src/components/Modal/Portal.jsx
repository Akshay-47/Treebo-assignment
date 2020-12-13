import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Portal = (props) => {
  function _render(children, target) {
    ReactDOM.render(<div>{children}</div>, target);
  }

  useEffect(() => {
    const modalTarget = document.createElement("div");
    modalTarget.className = "modal";
    document.body.appendChild(modalTarget);
    _render(props.children, modalTarget);
    return () => {
      ReactDOM.unmountComponentAtNode(modalTarget);
      document.body.removeChild(modalTarget);
    };
  });
  return null;
};

export default Portal;
