interface JsonpOptions {
  beforeSend? (xOptions: JQueryPromise<any>);
  cache?: boolean;
  callback?: string;
  callbackParameter?: string;
  charset?: string;
  complete? (xOptions: JQueryPromise<any>, textStatus: string);
  context?: any;
  data?: string;
  dataFilter? (jsonRaw: any);
  error? (xOptions: JQueryPromise<any>, textStatus: string);
  pageCache?: boolean;
  success? (json: any, xOptions: JQueryPromise<any>, textStatus: string);
  timeout?: number;
  traditional?: boolean;
  url?: string;
}

interface JQueryStatic {
  jsonp(options: JsonpOptions);
}