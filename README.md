# mounted-components

> Programmatically mounting and displaying components.

[![NPM](https://img.shields.io/npm/v/mounted-components.svg)](https://www.npmjs.com/package/mounted-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mounted-components
```

## Usage

```jsx
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
```

## License

MIT © [PlatzerT](https://github.com/PlatzerT)
