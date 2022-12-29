import React from "react";

const Modal = (props) => {
  return (
    <div>
      <button onClick={props.close}>close</button>
    </div>
  );
};

export default Modal;
