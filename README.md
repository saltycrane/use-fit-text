# use-fit-text [![npm version](https://badge.fury.io/js/use-fit-text.svg)](https://badge.fury.io/js/use-fit-text)

React hook that iteratively adjusts the font size so that text will fit in a div.
 
  - checks if text is overflowing by [using `scrollHeight` and `offsetHeight`](https://stackoverflow.com/a/10017343/101911)
  - recalculates when container is resized (using ([polyfilled](https://github.com/que-etc/resize-observer-polyfill)) [`ResizeObserver`](https://developers.google.com/web/updates/2016/10/resizeobserver))
  - recalculates when content changes
  - uses binary search; with default options, makes a maximum of 5 adjustments with a resolution of 5% font size from 20-100%
  - [< 4 kB](https://bundlephobia.com/result?p=use-fit-text@2.4.0) minified + gzipped
  - written in TypeScript

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

## Demo / example code

- Demo site: https://saltycrane.github.io/use-fit-text/
- [Example code](/examples/pages/index.tsx) is in the `/examples` folder

## API

### `useFitText(options)`
- Returns an object with the following properties:
  - `fontSize` (`string`) - the font size as a string (CSS percent) to be passed as the `fontSize` property of the `style` prop of the `div`
  - `ref` (`React.MutableRefObject<HTMLDivElement>`) - the ref to be passed to the `ref` attribute of the `div`
- `options` (optional) - an object with the following optional properties:

  - `logLevel` (`string`, default: `info`) - one of `debug`, `info`, `warn`, `error`, or `none`
  - `maxFontSize` (`number`, default: `100`) - maximum font size in percent
  - `minFontSize` (`number`, default: `20`) - minimum font size in percent
  - `onFinish` (`(fontSize: number) => void`, default: `undefined`) - function that is called when resizing
      finishes. The final fontSize is passed to the function as an argument.
  - `onStart` (`() => void`, default: `undefined`) - function that is called when resizing starts
  - `resolution` (`number`, default: `5`) - font size resolution to adjust to in percent

## Questions

- Why doesn't it work with Flexbox `justify-content: flex-end;`?
  This appears [to be](https://stackoverflow.com/questions/36130760/use-justify-content-flex-end-and-to-have-vertical-scrollbar) [a bug](https://github.com/philipwalton/flexbugs/issues/53) with Flexbox. Try using CSS Grid or `margin-top: auto;`
- What does the "reached `minFontSize = 20` without fitting text" message in the console mean?
  This means `use-fit-text` was not able to fit the text using the `minFontSize` setting of 20. To ensure the text fits, set `minFontSize` to a smaller value.

## Changelog

- v2.4.0
  - handle case where `minFontSize` is set larger than the `fontSize` value needed to fit the text in the div. Log a message to the console in this case.
  - fix final adjustment calcuation
  - add `logLevel` option to control what is logged to the console
- v2.3.0
  - automatically recalculate font size when content changes
  - fix bug where a recalculation was not done on resize if the text initially fit in the div
- v2.2.0 - add `onStart` and `onFinish` callbacks
- v2.1.3 - export `TOptions` TypeScript type
- v2.1.2 - remove `/// <reference types="next" />` in `dist/index.d.ts`
- v2.1.0
  - fix SSR/prerender issue where text did not resize
  - suppress `useLayoutEffect` warning for server render
- v2.0.0
  - use `ResizeObserver` to always recalculate on container resize
  - remove `recalcOnResize` option
  - `useLayoutEffect` instead of `useEffect` to avoid flashing
- v1.2.1 - fix scrollbar issue in example
- v1.2.0 - add `recalcOnResize` and other options
- v1.1.0 - fix binary search bug
- v1.0.2 - add example
- v1.0.0 - initial release
