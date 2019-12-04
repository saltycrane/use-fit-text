# use-fit-text

React hook that iteratively adjusts the font size so that text will fit in a div.
 
  - checks if text is overflowing by using `scrollHeight` and `offsetHeight`
    https://stackoverflow.com/a/10017343/101911
  - uses binary search; makes a maximum of 5 adjustments with a resolution
    of 5% font size from 20-100%
  - [< 1 kB](https://bundlephobia.com/result?p=use-fit-text@1.2.1) minified + gzipped; no dependencies

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

## Options

- `maxFontSize` (default: `100`) - maximum font size in percent
- `minFontSize` (default: `20`) - minimum font size in percent
- `recalcOnResize` (default: `false`) - set to `true` to recalculate text size on window resize
- `resolution` (default: `5`) - font size resolution to adjust to in percent

## Changelog

- v1.2.1 - fix scrollbar issue in example
- v1.2.0 - add `recalcOnResize` and other options
- v1.1.0 - fix binary search bug
- v1.0.2 - add example
- v1.0.0 - initial release
