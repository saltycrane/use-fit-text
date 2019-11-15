import { useEffect, useRef, useState } from "react";

/**
 * React hook that iteratively adjusts the font size so that text will fit in
 * a div.
 *
 *   - checks if text is overflowing by using `scrollHeight` and `offsetHeight`
 *     https://stackoverflow.com/a/10017343/101911
 *   - uses binary search; makes a maximum of 5 adjustments with a resolution
 *     of 5% font size from 20-100%
 */
const useFitText = () => {
  const MIN_FONT_SIZE = 20;
  const MAX_FONT_SIZE = 100;
  const RESOLUTION = 5;

  const ref = useRef<HTMLDivElement>(null);

  const [state, setState] = useState({
    fontSize: MAX_FONT_SIZE,
    fontSizePrev: MIN_FONT_SIZE,
  });
  const { fontSize, fontSizePrev } = state;

  useEffect(() => {
    const isDone = Math.abs(fontSize - fontSizePrev) <= RESOLUTION;
    const isOverflow =
      !!ref.current && ref.current.scrollHeight > ref.current.offsetHeight;
    const isAsc = fontSize > fontSizePrev;

    // return if the font size has been adjusted "enough" (change within RESOLUTION)
    // reduce font size by one increment if it's overflowing
    if (isDone) {
      if (isOverflow) {
        const fontSizeNew =
          fontSizePrev < fontSize
            ? fontSizePrev
            : fontSize - (fontSizePrev - fontSize);
        setState({ fontSize: fontSizeNew, fontSizePrev });
      }
      return;
    }

    // binary search to adjust font size
    let delta;
    if (isOverflow) {
      delta = isAsc ? fontSizePrev - fontSize : MIN_FONT_SIZE - fontSize;
    } else {
      delta = isAsc ? MAX_FONT_SIZE - fontSize : fontSizePrev - fontSize;
    }
    setState({
      fontSize: fontSize + delta / 2,
      fontSizePrev: fontSize,
    });
  }, [fontSize, fontSizePrev, ref]);

  return { fontSize: `${fontSize}%`, ref };
};

export default useFitText;
