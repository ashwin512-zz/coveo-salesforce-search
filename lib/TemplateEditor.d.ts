/// <reference path="JsonTemplate.d.ts" />
/// <reference path="DialogBox.d.ts" />
/// <reference path="jqueryui.d.ts" />
declare module Coveo.TemplateEditor {
    interface FieldDescription {
        label: string;
        renderAs: string;
        description?: string;
    }
    interface FieldsMap {
        [name: string]: FieldDescription;
    }
    class Editor {
        static ANIMATION_TIME: number;
        private placeholder;
        private mainHtmlElement;
        private leftPanel;
        private fieldsList;
        private typeSelector;
        private dataContainer;
        private floatLeftContainer;
        private leftContainer;
        private floatRightContainer;
        private rightContainer;
        private mainContainer;
        private templateType;
        private currentCategory;
        private categoriesFields;
        private search;
        fields: FieldsMap;
        constructor(data: Utils.JsonTemplate.TemplateData, fields: FieldsMap);
        addFloatLeftPanel(): void;
        addFloatRightPanel(): void;
        appendTo(target: any): void;
        loadData(data: Utils.JsonTemplate.TemplateData): void;
        private renderContentInContainer(container, containers);
        getData(): Utils.JsonTemplate.TemplateData;
        convertDomItemsToObject(domContainer: JQuery): any[];
        private buildLeftPanel();
        private buildAdvancedContents();
        private buildSearch();
        private addFields(fields);
        setCategory(value: string): void;
        setCategoryFields(name: string, fields: string[]): void;
        private updateFieldList();
        private buildContent(content);
        private buildContainer(data);
        private buildEmptyContainer(autoCreateContainer);
        resizeContainersTimeout: number;
        resizeContainers(): void;
        private makeDraggable(dom, clone?);
        private makeDroppable(dom, options?);
        static elementAfter(point: {
            x: number;
            y: number;
        }, container: JQuery): JQuery;
    }
}
declare module Coveo.TemplateEditor {
    interface ContentClass {
        new (data: Utils.JsonTemplate.ContentData, editor: Editor): Content;
        type: string;
    }
    class ContentType {
        static FIELD: string;
        static CODE: string;
        static THUMBNAIL: string;
        static CUSTOM_COMPONENT: string;
        static LINK: string;
        static BADGE: string;
        static QUICK_VIEW: string;
        static FIELD_TABLE: string;
    }
    class Content {
        data: Utils.JsonTemplate.ContentData;
        editor: Editor;
        private hasSettings;
        static contentClass: ContentClass[];
        static fromData(data: Utils.JsonTemplate.ContentData, editor: Editor): Content;
        dom: JQuery;
        constructor(data: Utils.JsonTemplate.ContentData, editor: Editor, hasSettings?: boolean);
        getTitle(): string;
        build(): JQuery;
        buildButtons(): JQuery;
        handleClickSetting(): void;
        openDialogBox(title: string, content: JQuery, ...requiredFields: string[]): void;
        buildTextAreaWithField(name: string, label: string, helpMessage?: string): JQuery;
    }
}
declare module Coveo.TemplateEditor {
    class BadgeContent extends Content {
        static type: string;
        constructor(data: Utils.JsonTemplate.ContentData, editor: Editor);
        getTitle(): string;
        build(): JQuery;
        handleClickSetting(): void;
    }
}
declare module Coveo.TemplateEditor {
    class CodeContent extends Content {
        static type: string;
        constructor(data: Utils.JsonTemplate.ContentData, editor: Editor);
        getTitle(): string;
        build(): JQuery;
        handleClickSetting(): void;
    }
}
declare module Coveo.TemplateEditor {
    class CustomComponentContent extends Content {
        static type: string;
        constructor(data: Utils.JsonTemplate.ContentData, editor: Editor);
        getTitle(): string;
        build(): JQuery;
        handleClickSetting(): void;
    }
}
declare module Coveo.TemplateEditor {
    class FieldContent extends Content {
        data: Utils.JsonTemplate.ContentData;
        static type: string;
        constructor(data: Utils.JsonTemplate.ContentData, editor: Editor);
        getTitle(): string;
        build(): JQuery;
        handleClickSetting(): void;
    }
}
declare module Coveo.TemplateEditor {
    class FieldTableContent extends Content {
        static type: string;
        constructor(data: Utils.JsonTemplate.ContentData, editor: Editor);
        getTitle(): string;
        build(): JQuery;
        handleClickSetting(): void;
        buildRow(row: Utils.JsonTemplate.FieldTableRow, fieldLabel?: string): JQuery;
    }
}
declare module Coveo.TemplateEditor {
    class LinkContent extends Content {
        static type: string;
        constructor(data: Utils.JsonTemplate.ContentData, editor: Editor);
        getTitle(): string;
        build(): JQuery;
        handleClickSetting(): void;
    }
}
declare module Coveo.TemplateEditor {
    class QuickViewContent extends Content {
        static type: string;
        constructor(data: Utils.JsonTemplate.ContentData, editor: Editor);
        getTitle(): string;
        build(): JQuery;
    }
}
declare module Coveo.TemplateEditor {
    class ThumbnailContent extends Content {
        static type: string;
        constructor(data: Utils.JsonTemplate.ContentData, editor: Editor);
        getTitle(): string;
        build(): JQuery;
        handleClickSetting(): void;
    }
}
