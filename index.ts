import { useCallback, useEffect, useRef, useState } from "react";

type TOptions = {
  maxFontSize?: number;
  minFontSize?: number;
  recalcOnResize?: boolean;
  resolution?: number;
};

/**
 * React hook that iteratively adjusts the font size so that text will fit in
 * a div.
 *
 *   - checks if text is overflowing by using `scrollHeight` and `offsetHeight`
 *     https://stackoverflow.com/a/10017343/101911
 *   - uses binary search
 *   - with default parameters, makes a maximum of 5 adjustments with a
 *     resolution of 5% font size from 20-100%
 */
const useFitText = ({
  maxFontSize = 100,
  minFontSize = 20,
  recalcOnResize = false,
  resolution = 5,
}: TOptions = {}) => {
  const initState = useCallback(
    () => ({
      fontSize: maxFontSize,
      fontSizePrev: minFontSize,
      fontSizeMax: maxFontSize,
      fontSizeMin: minFontSize,
    }),
    [maxFontSize, minFontSize],
  );

  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(initState());
  const { fontSize, fontSizeMax, fontSizeMin, fontSizePrev } = state;

  // recalculate text size on window resize if `recalcOnResize` option is true
  useEffect(() => {
    if (!recalcOnResize) {
      return;
    }
    let timeoutId: number;
    const onResize = () => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setState(initState());
      }, 100);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("resize", onResize);
    };
  }, [initState, recalcOnResize]);

  useEffect(() => {
    const isDone = Math.abs(fontSize - fontSizePrev) <= resolution;
    const isOverflow =
      !!ref.current &&
      (ref.current.scrollHeight > ref.current.offsetHeight ||
        ref.current.scrollWidth > ref.current.offsetWidth);
    const isAsc = fontSize > fontSizePrev;

    // return if the font size has been adjusted "enough" (change within `resolution`)
    // reduce font size by one increment if it's overflowing
    if (isDone) {
      if (isOverflow) {
        const fontSizeNew =
          fontSizePrev < fontSize
            ? fontSizePrev
            : fontSize - (fontSizePrev - fontSize);
        setState({
          fontSize: fontSizeNew,
          fontSizeMax,
          fontSizeMin,
          fontSizePrev,
        });
      }
      return;
    }

    // binary search to adjust font size
    let delta: number;
    let newMax = fontSizeMax;
    let newMin = fontSizeMin;
    if (isOverflow) {
      delta = isAsc ? fontSizePrev - fontSize : fontSizeMin - fontSize;
      newMax = Math.min(fontSizeMax, fontSize);
    } else {
      delta = isAsc ? fontSizeMax - fontSize : fontSizePrev - fontSize;
      newMin = Math.max(fontSizeMin, fontSize);
    }
    setState({
      fontSize: fontSize + delta / 2,
      fontSizeMax: newMax,
      fontSizeMin: newMin,
      fontSizePrev: fontSize,
    });
  }, [fontSize, fontSizeMax, fontSizeMin, fontSizePrev, ref, resolution]);

  return { fontSize: `${fontSize}%`, ref };
};

export default useFitText;
