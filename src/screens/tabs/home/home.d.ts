import * as ios from "./home.ios"; 
import * as android from "./home.android"; 

declare var _test: typeof ios;
declare var _test: typeof android;

/// export to get the shape of the module
export * from "./home.ios"; 