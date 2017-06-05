package com.example.zhangshibiao.rnintergrate;

import android.content.Intent;
import android.net.Uri;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Created by knight on 2017/6/2.
 */

public class MyRnModule extends ReactContextBaseJavaModule {
    public MyRnModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyRnModule";
    }

    /**
     * rn call native toast and no return
     * @param message
     * @param duration
     */
    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
        this.nativeInvokeRn();
    }

    /**
     * rn 调用native 电话插件 ,no return
     * @param phone
     */
    @ReactMethod
    public void callPhone(String phone) {
        Intent intent = new Intent();
        intent.setAction(Intent.ACTION_CALL);
        intent.setData(Uri.parse("tel:" +  phone));
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getReactApplicationContext().startActivity(intent);
    }

    /**
     * native 调用rn 代码
     */
    public void nativeInvokeRn() {
        String msg = "hello rn,i am from native";
        getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("event_from_native", msg);
    }

    /**
     * rn call native method ,and then nantive call rn by callback from rn
     * @param msg
     * @param callback
     */
    @ReactMethod
    public void rnCallNativeFromCallback(String msg, Callback callback) {
        String resultData = "data from native callback";
        callback.invoke(resultData);
    }

    /**
     * rn call native method ,and then native call rn by promise
     * @param msg
     * @param promise
     */
    @ReactMethod
    public void rnCallNativeFromPromiseBack(String msg, Promise promise) {
        String resultData = "data from native by promise";
        promise.resolve(resultData);
    }
}
