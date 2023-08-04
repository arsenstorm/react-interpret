# `react-interpret`

React Interpret is a package to replace components with other components safely.

For example, `[b]` and `[/b]` can be replaced with `<b>` and `</b>` with this code:

```js
import React from 'react';
import { interpret } from '@/components/react-interpret';

const interpreters = {
  '[b]': <b>,
  '[/b]': </b>,
  // Add more text-to-JSX mappings here as needed.
};

function MyComponent() {
  const text = "This is some [b]bold text[/b].";
  const jsx = interpret(text, interpreters);
  
  return <div>{jsx}</div>;
}

export default MyComponent;
```
