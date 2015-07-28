/// <reference path="ModalBox.d.ts" />
declare module Coveo.DialogBox {
    interface Options extends ModalBox.Options {
        data?: any;
        requiredData?: string[];
        validation: (button: ModalBox.BUTTON, data?) => boolean;
    }
    function buildMessage(message: string): JQuery;
    function buildErrorMessage(message: string): JQuery;
    function buildInfoMessage(message: string): JQuery;
    function buildWarningMessage(message: string): JQuery;
    function alert(title: string, text: string): ModalBox.ModalBox;
    function confirm(title: string, text: string, callback: (responce: boolean) => void): ModalBox.ModalBox;
    function prompt(title: string, text: string, callback: (value: string) => boolean, defaultValue?: string): any;
    function open(content: JQuery, options: Options): ModalBox.ModalBox;
    function nameToId(name: string): string;
    function buildLabel(name: string, label: string, helpMessage?: string): JQuery;
    function buildHelper(helpMessage: string): JQuery;
    function buildHiddenInput(name: string): JQuery;
    function buildInputText(name: string, label: string, helpMessage?: string): JQuery;
    function buildTextarea(name: string, label: string, helpMessage?: string): JQuery;
    function buildSelect(name: string, label: string, options: {
        [value: string]: string;
    }, helpMessage?: string, sort?: boolean, tooltipValue?: boolean): JQuery;
    function buildCheckbox(name: string, label: string, helpMessage?: string, float?: boolean): JQuery;
}
