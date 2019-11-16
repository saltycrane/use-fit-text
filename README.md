# use-fit-text

React hook that iteratively adjusts the font size so that text will fit in a div.
 
  - checks if text is overflowing by using `scrollHeight` and `offsetHeight`
    https://stackoverflow.com/a/10017343/101911
  - uses binary search; makes a maximum of 5 adjustments with a resolution
    of 5% font size from 20-100%
  - [< 400 bytes](https://bundlephobia.com/result?p=use-fit-text@1.0.2) minified + gzipped; no dependencies

## Installation

```
npm install --save use-fit-text
```

## Usage

```js
import React from "react";
import useFitText from "use-fit-text";

function Example() {
  const { fontSize, ref } = useFitText();

  return (
    <div ref={ref} style={{ fontSize, height: 40, width: 100 }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  );
}
```
