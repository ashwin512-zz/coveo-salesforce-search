/// <reference path="././././././jquery.d.ts" />
declare module Coveo {
    interface MousePosition {
        clientX: number;
        clientY: number;
    }
    interface DraggableOption {
        includeMargin?: boolean;
    }
    class Draggable {
        element: JQuery;
        private options;
        static current: Draggable;
        static mouseOffset: {
            left: number;
            top: number;
        };
        static mousemove(position: MousePosition): void;
        static mouseup(position: MousePosition): void;
        placeholder: JQuery;
        dragElement: JQuery;
        constructor(element: JQuery, options?: DraggableOption);
        createDragElement(): JQuery;
        createOffset(position: MousePosition): JQueryCoordinates;
        removeDragElement(): void;
        dropElement(): JQuery;
        mousedown(position: MousePosition): void;
        mousemove(position: MousePosition): void;
        mouseup(position: MousePosition): void;
        dropIn(droppable: Droppable, before: JQuery): void;
        private setDragElementPosition(position);
        static centerOfDrag(position: MousePosition): MousePosition;
    }
    class Clonable extends Draggable {
        createDragElement(): JQuery;
        createOffset(): {
            left: number;
            top: number;
        };
        removeDragElement(): void;
        dropElement(): JQuery;
    }
    class Droppable {
        element: JQuery;
        accept: (element: JQuery) => boolean;
        static current: Droppable;
        static droppables: Droppable[];
        static elementFromPoint(position: MousePosition, _document?: Document): Element;
        static find(element: JQuery, position: MousePosition, _document?: Document): Droppable;
        constructor(element: JQuery, accept?: (element: JQuery) => boolean);
        elementAfter(position: MousePosition): JQuery;
        private getCenterOffset(element);
        private squareDistance(a, b);
    }
}
