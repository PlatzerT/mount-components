# mounted-components

> Programmatically mounting and displaying components.

[![NPM](https://img.shields.io/npm/v/mounted-components.svg)](https://www.npmjs.com/package/mounted-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mounted-components
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'mounted-components'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [PlatzerT](https://github.com/PlatzerT)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
