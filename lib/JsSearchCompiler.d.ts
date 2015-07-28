/// <reference path="../utils/lib/node.d.ts" />
declare var gulp: any;
declare var gulpTsc: any;
declare var _: any;
declare var fs: any;
declare var child_process: any;
declare var Q: any;
declare var replace: any;
declare var readFile: any;
declare var writeFile: any;
declare var deleteFile: any;
declare var exec: any;
declare var availableComponents: string[];
declare var fillAvailableComponents: (componentsFile: string) => void;
declare var getComponentsToCompileFromCommandArgs: (argv: any) => any;
declare var createString: (toCompileArray: string[]) => any;
declare var createTempFile: (tmpSrcFile: string, baseSrcFile: string, component: string[]) => any;
declare var deleteTempFile: (tmpSrcFile: string) => any;
declare var compilation: (tmpFileName: string, message: string, out: string) => any;
declare var compileAllOneByOne: (options: CompilerOptions) => void;
declare var compileSpecificComponents: (componentsToCompile: string[], options: CompilerOptions) => void;
interface CompilerOptions {
    tmpSrcFile: string;
    baseSrcFile: string;
    componentsFile: string;
    callback: () => void;
    out: string;
}
