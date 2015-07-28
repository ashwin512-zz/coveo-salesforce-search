/// <reference path="CoveoJQueryVersion.d.ts" />
declare module Coveo.ModalBox {
    enum BUTTON {
        OK = 1,
        APPLY = 2,
        YES = 4,
        NO = 8,
        CANCEL = 16,
    }
    interface ModalBox {
        modalBox: JQuery;
        overlay: JQuery;
        wrapper: JQuery;
        buttons: JQuery;
        content: JQuery;
        close: (button?: BUTTON, forceClose?: boolean) => boolean;
    }
    interface Options {
        fullscreen?: boolean;
        titleClose?: boolean;
        overlayClose?: boolean;
        className?: string;
        buttons?: number;
        validation?: (button: BUTTON) => boolean;
        title?: string;
        body?: HTMLElement;
    }
    function open(content: JQuery, options?: Options): ModalBox;
    function close(forceClose?: boolean): void;
}
