# Change the entry file 

The following step are inspired from the **Refactor Android to TypeScript** paragraph in [this link](https://medium.com/@rintoj/react-native-with-typescript-40355a90a5d7)

1) **For Android** 

Open `android/app/build.gradle` and add the following line before `apply from "../../node_modules/react-native/react.gradle"`

```` javascript

project.ext.react = [

    entryFile: "src/js/index.android.js"

]

````

And open `MainApplication.java` and add the following method within the `ReactNativeHost` class definition :

```` java

@Override
protected String getJSMainModuleName() {
  return "artifacts/index.android";
}

````

2) **For iOS**

To fix this problem, open `ios/RNTestProject/AppDelegate.m` and change `"index.ios"` to `"artifacts/index.ios"`.

```` Swift

jsCodeLocation = [[RCTBundleURLProvider sharedSettings]] jsBundleURLForBundleRoot:@"src/js/index.ios" 
fallbackResource:nil];

````