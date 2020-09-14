/// <reference types="react" />
export declare type TLogLevel = "debug" | "info" | "warn" | "error" | "none";
export declare type TOptions = {
    logLevel?: TLogLevel;
    maxFontSize?: number;
    minFontSize?: number;
    onFinish?: (fontSize: number) => void;
    onStart?: () => void;
    resolution?: number;
};
declare const useFitText: ({ logLevel: logLevelOption, maxFontSize, minFontSize, onFinish, onStart, resolution, }?: TOptions) => {
    fontSize: string;
    ref: import("react").MutableRefObject<HTMLDivElement>;
};
export default useFitText;
