package com.rntestproject;

import com.facebook.react.ReactPackage;
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

    @Override
    public String getJSMainModuleName() {
        return "build/src/index.android";
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(new ReactNativeConfigPackage(), new ReactNativeI18n());
    }
}
