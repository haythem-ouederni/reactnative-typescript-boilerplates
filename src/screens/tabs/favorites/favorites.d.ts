import * as ios from "./favorites.ios"; 
import * as android from "./favorites.android"; 

declare var _test: typeof ios;
declare var _test: typeof android;

/// export to get the shape of the module
export * from "./favorites.ios"; 