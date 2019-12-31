import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ResizeObserver from "resize-observer-polyfill";

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
  const isFirstObserve = useRef(true);
  const [state, setState] = useState(initState);
  const { fontSize, fontSizeMax, fontSizeMin, fontSizePrev } = state;

  // montior div size changes and recalculate on resize
  let animationFrameId: number | null = null;
  const [ro] = useState(
    () =>
      new ResizeObserver(() => {
        animationFrameId = window.requestAnimationFrame(() => {
          if (isFirstObserve.current) {
            isFirstObserve.current = false;
            return;
          }
          setState(initState());
        });
      }),
  );

  useEffect(() => {
    if (ref.current) {
      ro.observe(ref.current);
    }
    return () => {
      animationFrameId && window.cancelAnimationFrame(animationFrameId);
      ro.disconnect();
    };
  }, [animationFrameId, ro]);

  // check overflow and resize font
  useLayoutEffect(() => {
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
