declare module Coveo.Utils.JsonTemplate {
    interface TemplateData {
        leftContainers: ContainerData[];
        rightContainers: ContainerData[];
        type: string;
        containers: ContainerData[];
    }
    interface ContainerData {
        contents: ContentData[];
        settings: {
            [key: string]: string;
        };
    }
    interface ContentData {
        type: string;
        settings: {
            [key: string]: string;
        };
    }
    interface FieldTableRow {
        field: string;
        facet?: string;
        caption?: string;
        htmlValue?: boolean;
        helper?: string;
        helperOptions?: any;
        splitValues?: boolean;
    }
}
