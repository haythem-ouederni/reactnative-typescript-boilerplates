# Change the entry file 

The following step are inspired from the **Refactor Android to TypeScript** paragraph in [this link](https://medium.com/@rintoj/react-native-with-typescript-40355a90a5d7)

1) **For Android** 

Open `android/app/build.gradle` and add the following line before `apply from "../../node_modules/react-native/react.gradle"`

```` gradle

project.ext.react = [

    entryFile: "src/index.android.js"

]

````

And open `MainApplication.java` and add the following method within the `ReactNativeHost` class definition :

```` java

@Override
protected String getJSMainModuleName() {
  return "src/index.android";
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

Here is the [followed link](https://medium.com/@rintoj/react-native-with-typescript-40355a90a5d7) to use Typescript within a Nativescript project.

It wasn't 100% followed for example the tests are kept under `__tests__` folder, the `js` files are created at the same folder than the `tsx` file, not all the tslint configuration is used...

[JSX option documentation](https://www.typescriptlang.org/docs/handbook/jsx.html). 

[tsconfig.json file information](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) about the inclusion of `@types`.

[TypeScript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

Be careful :
* when using custom components
* with The as operator : it is encouraged to use `as` notation insteaod of `<type>` notation

# Navigation 

React Native Navigation library is used :
  * [on github](https://github.com/wix/react-native-navigation)
  * [website](https://wix.github.io/react-native-navigation/#/)  
  
Make sure to perform the [specific steps for ios](https://wix.github.io/react-native-navigation/#/installation-ios)

# React Native config

[Module](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native, supporting both iOS and Android. 

### Setup :

1 - yarn add react-native-config

2 - react-native link react-native-config

# Add `assets` folder

This [link](https://medium.com/@davidjwoody/how-to-use-absolute-paths-in-react-native-6b06ae3f65d1) was used to make the assets' content available to ts/js files using "assets" as a reference.

The trick is to add a package.json file to the `assets` folder.

````Json
{
  "name": "assets"
}
````

# Set the Splash screen for Android

More information in [this link](https://wix.github.io/react-native-navigation/#/android-specific-use-cases?id=splash-screen).

Override `getSplashLayout` or `createSplashLayout` in `MainActivity` to provide a splash layout which will be displayed while Js context initialises, for example:

```` java
import android.widget.LinearLayout;
import android.graphics.Color;
import android.widget.TextView;
import android.view.Gravity;
import android.util.TypedValue;

import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends SplashActivity {

    @Override
    public LinearLayout createSplashLayout() {
        LinearLayout view = new LinearLayout(this);
        TextView textView = new TextView(this);

        view.setBackgroundColor(Color.parseColor("#607D8B"));
        view.setGravity(Gravity.CENTER);

        textView.setTextColor(Color.parseColor("#FFFFFF"));
        textView.setText("React Native Navigation");
        textView.setGravity(Gravity.CENTER);
        textView.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 40);

        view.addView(textView);
        return view;
    }
}
````

# Using `Axios`for http requests

`Axios` is used to run http requests and load resources from a remote URL.

Here is the [axios documentation](https://github.com/mzabriskie/axios). 

Run : `yarn add axios`

# Use Redux

Many links/examples are used : 

* [This tutorial](https://medium.com/@jonlebensold/getting-started-with-react-native-redux-2b01408c0053) was used to add redux to the react native project

* [This project](https://github.com/JuneDomingo/movieapp) was used as a concrete example.


* The added libraries are :

  * `react-redux`

  * `redux`

  * `redux-thunk` that helps making asynchronous calls

  * `redux-logger`

  * `redux-immutable-state-invariant`

  => the command to add them is : `yarn add redux react-redux redux-thunk`
  

# Internationalization

@todo

# Firebase

# Code Push

[CodePush](https://microsoft.github.io/code-push/) is a cloud service that enables Cordova and React Native developers to deploy mobile app updates directly to their users’ devices. It works by acting as a central repository that developers can publish certain updates to (e.g. JS, HTML, CSS and image changes), and that apps can query for updates from (using our provided client SDKs). This allows you to have a more deterministic and direct engagement model with your end-users, while addressing bugs and/or adding small features that don’t require you to re-build a binary and/or re-distribute it through any public app stores.

# Deco IDE

May be to use to bootstrap a screen's components display (design) but it lacks many other options such us formatting a file, when adding a new style property it doesn't add it automatically to the "Properties" tab to edit it other from the code.

[Deco](https://www.decoide.org/) is an all-in-one development environment specifically designed for React Native. It can automatically set up a new project, search for open source components, and insert them. You can also tweak your app graphically in real time. Check it out if you use macOS.

### Interesting links

  * [react-native-tab-view](https://github.com/react-native-community/react-native-tab-view)
  * [Expo](https://expo.io/@satya164/react-native-tab-view-demos)
  * [An other Redux tutorial](https://medium.com/react-native-training/redux-4-ways-95a130da0cdc)
