package com.chatyellow.otherscreen;

import android.content.Intent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class OtherScreenModule extends ReactContextBaseJavaModule {

    public OtherScreenModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "OtherScreen";
    }

    @ReactMethod
    public void showOtherScreen() {
        Intent intent = new Intent(getCurrentActivity(), OtherActivity.class);
        getCurrentActivity().startActivity(intent);
    }
}
