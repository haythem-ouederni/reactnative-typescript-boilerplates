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

# Library choice for custom elements

You can choose between NativeBase or ReactNativeElements

## NativeBase 

[NativeBase on github](https://github.com/GeekyAnts/NativeBase)

[NativeBase kitchen sink APP](https://github.com/GeekyAnts/NativeBase-KitchenSink)

## React Native Elements

[React Native Elements on github](https://github.com/react-native-training/react-native-elements)

[React Native Elements kitchen sink APP](https://github.com/react-native-training/react-native-hackathon-starter)

# Use Typescript

@todo

# Use Redux

@todo

# Code Push

[CodePush](https://microsoft.github.io/code-push/) is a cloud service that enables Cordova and React Native developers to deploy mobile app updates directly to their users’ devices. It works by acting as a central repository that developers can publish certain updates to (e.g. JS, HTML, CSS and image changes), and that apps can query for updates from (using our provided client SDKs). This allows you to have a more deterministic and direct engagement model with your end-users, while addressing bugs and/or adding small features that don’t require you to re-build a binary and/or re-distribute it through any public app stores.

# Deco IDE
[Deco](https://www.decoide.org/) is an all-in-one development environment specifically designed for React Native. It can automatically set up a new project, search for open source components, and insert them. You can also tweak your app graphically in real time. Check it out if you use macOS.

