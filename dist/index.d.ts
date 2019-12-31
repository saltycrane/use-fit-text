/// <reference types="react" />
/// <reference types="next" />
declare type TOptions = {
    maxFontSize?: number;
    minFontSize?: number;
    resolution?: number;
};
declare const useFitText: ({ maxFontSize, minFontSize, resolution, }?: TOptions) => {
    fontSize: string;
    ref: import("react").MutableRefObject<HTMLDivElement>;
};
export default useFitText;
