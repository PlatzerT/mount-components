import React from "react";
import { useMount, MountRoot } from "mount-components";

const Modal = ({ close, content }) => {
  return (
    <div>
      {content}
      <button onClick={close}>close</button>
    </div>
  );
};

const App = () => {
  const { open } = useMount();
  function onClick(e) {
    open(Modal, {
      content: "This is a modal!",
    });
  }
  return (
    <div>
      <button onClick={onClick}>Open</button>
      <MountRoot />
    </div>
  );
};
export default App;
