package com.example.zhangshibiao.rnintergrate;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by knight on 2017/6/2.
 */

public class MyRnPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        // 在这里添加你的module
        modules.add(new MyRnModule(reactContext));
        return modules;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        // 这里默认返回null
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        // 这里默认返回null, 如果没有自定义的native view 就返回Collections.emptyList();
//        return Collections.emptyList();
        return Arrays.<ViewManager>asList(
                new MyRnText()
        );

    }

}
