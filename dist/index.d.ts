/// <reference types="react" />
/// <reference types="next" />
declare type TOptions = {
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
declare const useFitText: ({ maxFontSize, minFontSize, resolution, }?: TOptions) => {
    fontSize: string;
    ref: import("react").MutableRefObject<HTMLDivElement>;
};
export default useFitText;
