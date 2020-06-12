import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ResizeObserver from "resize-observer-polyfill";

export type TOptions = {
  maxFontSize?: number;
  minFontSize?: number;
  onFinish?: (fontSize: number) => void;
  onStart?: () => void;
  resolution?: number;
};

// suppress useLayoutEffect warning when rendering on the server
// https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
const useIsoLayoutEffect =
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
    ? useLayoutEffect
    : useEffect;

const useFitText = ({
  maxFontSize = 100,
  minFontSize = 20,
  onFinish,
  onStart,
  resolution = 5,
}: TOptions = {}) => {
  const initState = useCallback(() => {
    onStart && onStart();
    return {
      fontSize: maxFontSize,
      fontSizePrev: minFontSize,
      fontSizeMax: maxFontSize,
      fontSizeMin: minFontSize,
    };
  }, [maxFontSize, minFontSize, onStart]);

  const ref = useRef<HTMLDivElement>(null);
  const isFirstResizeRef = useRef(true);
  const [state, setState] = useState(initState);
  const { fontSize, fontSizeMax, fontSizeMin, fontSizePrev } = state;

  // montior div size changes and recalculate on resize
  let animationFrameId: number | null = null;
  const [ro] = useState(
    () =>
      new ResizeObserver(() => {
        animationFrameId = window.requestAnimationFrame(() => {
          // don't reset the state the first time so it won't be reset
          // twice consecutively on first load
          if (!isFirstResizeRef.current) {
            setState(initState());
          }
          isFirstResizeRef.current = false;
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
  useIsoLayoutEffect(() => {
    const isWithinResolution = Math.abs(fontSize - fontSizePrev) <= resolution;
    const isOverflow =
      !!ref.current &&
      (ref.current.scrollHeight > ref.current.offsetHeight ||
        ref.current.scrollWidth > ref.current.offsetWidth);
    const isAsc = fontSize > fontSizePrev;

    // return if the font size has been adjusted "enough" (change within `resolution`)
    // reduce font size by one increment if it's overflowing
    if (isWithinResolution) {
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
      } else {
        onFinish && onFinish(fontSize);
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
  }, [
    fontSize,
    fontSizeMax,
    fontSizeMin,
    fontSizePrev,
    onFinish,
    ref,
    resolution,
  ]);

  return { fontSize: `${fontSize}%`, ref };
};

export default useFitText;
