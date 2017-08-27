# Introduction

This project aims to provide you with **boilerplates** based on the **best practices** to build a production ready mobile application using **ReactNative**. It would serve at the same time as a **tutorial**.

The choice was made to perform all the development in `Typescript` instead of the combination of `ES6` and `propTypes`. 

Each branch of this ReactNative project will reflect the use of a specific librairy, tool or framework, ...

For example, the [firebase-example](todo) branch contains a full example of an application (still under construction) that uses Firebase for its database.

The [master](todo) branch contains the basic setup.

Many other branches are to come to demonstrate the use of :
- Google Maps
- Integrated camera (Facebook Messenger like)
- Native video/sound player
- ... and all other good ideas the community would come with

# Run the app

These are the different steps to run the app :

1 - Make sure you have [ReactNative cli](https://facebook.github.io/react-native/docs/getting-started.html), [npm](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm), [yarn](https://yarnpkg.com/fr/docs/install) and [Typescript]() installed on your machine

2 - Download or clone the source code of this project

3 - Open a terminal and go within the root folder of the project

4 - Install the different librairies by running, within the terminal, the following command line : `yarn`

5 - Put your own [TMDB](https://www.themoviedb.org/documentation/api) api key within the `.env` (TMDB is used to demonstrate the http requests)

6 - Within the terminal, run `yarn start:android` if you want to start the app on an android device else run `yarn start:ios` for iOS devices.


# Tutorial

The following paragraphs contain the main information/links that were used to put in place the `master` branch of this project. 

The mains ideas are :
- the use of `Typescript`
- the use of `Redux` for state management
- the use of Wix's `React Native Navigation` to handle the navigation within the app.

## Change the entry files

In a default `ReactNative` project, the entry files (the javascript files used to bootstrap the app) are placed within the root folder of the project. But to insure a better architecture and so better readability of the code, all the `ts/tsx` (`Typescript`) files are located within the `src` folder. And because the `ReactNative` is based on `javascript` and not `typescript` these files are transpiled to `javascript` and put within the `build` folder. So the Android and iOS projects must, now, point the entry files that are located within the `build` folder.

The following steps are inspired from the **Refactor Android to TypeScript** paragraph in [this link](https://medium.com/@rintoj/react-native-with-typescript-40355a90a5d7)

The `tsconfig.json` is configured such as the js files are built within a `build` directory at the project's root.

1) **For Android** 

Open `android/app/build.gradle` and add the following line before `apply from "../../node_modules/react-native/react.gradle"`

```` gradle

project.ext.react = [

    entryFile: "build/src/index.android.js"

]

````

And open `MainApplication.java` and add the following method within the `ReactNativeHost` class definition :

```` java

@Override
protected String getJSMainModuleName() {
  return "build/src/index.android";
}

````

2) **For iOS**

Open `ios/RNTestProject/AppDelegate.m` and change `"index.ios"` to `"build/src/index.ios"`.

```` Objective-C

jsCodeLocation = [[RCTBundleURLProvider sharedSettings]] jsBundleURLForBundleRoot:@"build/src/index.ios" 
fallbackResource:nil];

````

## Library choice for custom elements

Because `ReactNative` doesn't come with full ready-to-use  UI components, the use of an external library for UI compnents is preferable to save time. You can choose between `NativeBase` or `ReactNativeElements`. For the moment `NativeBase` is used for the project.

### NativeBase 

[NativeBase on github](https://github.com/GeekyAnts/NativeBase)

[NativeBase kitchen sink APP](https://github.com/GeekyAnts/NativeBase-KitchenSink)

### React Native Elements

[React Native Elements on github](https://github.com/react-native-training/react-native-elements)

[React Native Elements kitchen sink APP](https://github.com/react-native-training/react-native-hackathon-starter)

## Use Typescript

Here is the [link](https://medium.com/@rintoj/react-native-with-typescript-40355a90a5d7) that used to put in place the use of Typescript within this ReactNative project project.

It wasn't 100% followed. For example the tests are kept under `__tests__` folder, the `js` files are created at the same folder than the `tsx` file, not all the tslint configuration is used...

[JSX option documentation](https://www.typescriptlang.org/docs/handbook/jsx.html). 

[tsconfig.json file information](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) about the inclusion of `@types`.

[TypeScript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

Take a look at the `tsconfig.json` file to have an idea about the configuration put in place.

Be careful :
* when using custom components
* with The as operator : it is encouraged to use `as` notation insteaod of `<type>` notation

## Navigation 

The React Native Navigation library is used :
  * [on github](https://github.com/wix/react-native-navigation)
  * [website](https://wix.github.io/react-native-navigation/#/)  
  
Make sure to perform the [specific steps for ios](https://wix.github.io/react-native-navigation/#/installation-ios)

## React Native config

[Module](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native, supporting both iOS and Android. 

#### Setup :

1 - yarn add react-native-config

2 - react-native link react-native-config

## Add `assets` folder

This folder can be used to put the different assets of the project like photos, videos, ...

This [link](https://medium.com/@davidjwoody/how-to-use-absolute-paths-in-react-native-6b06ae3f65d1) was used to make the assets' content available to ts/js files using "assets" as a reference.

The trick is to add a package.json file to the `assets` folder.

````Json
{
  "name": "assets"
}
````

## Set the Splash screen for Android

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

## Using `Axios`for http requests

`Axios` is used to run http requests and load resources from a remote URL.

Here is the [axios documentation](https://github.com/mzabriskie/axios). 

Run : `yarn add axios`

## Use Redux

Here are the links used to put in place Redux within this project : 

* [This tutorial](https://medium.com/@jonlebensold/getting-started-with-react-native-redux-2b01408c0053) was used to add redux to the react native project

* [This project](https://github.com/JuneDomingo/movieapp) was used as a concrete example.


* The added libraries are :

  * `react-redux`

  * `redux`

  * `redux-thunk` that helps making asynchronous calls

  * `redux-logger`

  * `redux-immutable-state-invariant`

  => the command to add them is : `yarn add redux react-redux redux-thunk`
  

## Internationalization

[react-native-i18n](https://github.com/AlexanderZaytsev/react-native-i18n) is used to handle the internationalization.

A [manual setup](https://github.com/AlexanderZaytsev/react-native-i18n#manual-setup) is needed to complete this step.

## Adding Local storage

[react-native-storage](https://github.com/sunnylqm/react-native-storage) is used to store data locally on the phone. It is based on the react native's [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html).

## General Information

#### Code Push

[CodePush](https://microsoft.github.io/code-push/) is a cloud service that enables Cordova and React Native developers to deploy mobile app updates directly to their users’ devices. It works by acting as a central repository that developers can publish certain updates to (e.g. JS, HTML, CSS and image changes), and that apps can query for updates from (using our provided client SDKs). This allows you to have a more deterministic and direct engagement model with your end-users, while addressing bugs and/or adding small features that don’t require you to re-build a binary and/or re-distribute it through any public app stores.

#### Deco IDE

May be to use to bootstrap a screen's components display (design) but it lacks many other options such us formatting a file, when adding a new style property it doesn't add it automatically to the "Properties" tab to edit it other from the code.

[Deco](https://www.decoide.org/) is an all-in-one development environment specifically designed for React Native. It can automatically set up a new project, search for open source components, and insert them. You can also tweak your app graphically in real time. Check it out if you use macOS.

#### Interesting links

  * [react-native-tab-view](https://github.com/react-native-community/react-native-tab-view)
  * [Expo](https://expo.io/@satya164/react-native-tab-view-demos)
  * [An other Redux tutorial](https://medium.com/react-native-training/redux-4-ways-95a130da0cdc)
