/// <reference types="react" />
export declare type TOptions = {
    maxFontSize?: number;
    minFontSize?: number;
    onFinish?: (fontSize: number) => void;
    onStart?: () => void;
    resolution?: number;
};
declare const useFitText: ({ maxFontSize, minFontSize, onFinish, onStart, resolution, }?: TOptions) => {
    fontSize: string;
    ref: import("react").MutableRefObject<HTMLDivElement>;
};
export default useFitText;
