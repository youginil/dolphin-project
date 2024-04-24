type ApiError = string | null;
type Callback = (err: ApiError) => unknown;
type CallbackWith<D> = (data: D, err: ApiError) => unknown;
type Answer = 1 | -1 | 0;
type TtsSetting = {
    language?: string;
    speechRate?: number;
    volumn?: number;
    pitch?: number;
};
declare const apis: {
    answer(value: Answer, cb: Callback): void;
    next(cb: CallbackWith<any>): void;
    ttsSet(params: TtsSetting, cb: Callback): void;
    ttsSpeak(text: string, cb: Callback): void;
    ttsStop(cb: Callback): void;
};
interface Window {
    apis: typeof apis;
    myData: any;
}
