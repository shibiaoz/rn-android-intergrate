package com.example.zhangshibiao.rnintergrate;

import android.view.View;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by knight on 2017/6/5.
 */

public class MyRnImage extends SimpleViewManager {
    @Override
    public String getName() {
        return "MyRnImageView";
    }

    @Override
    protected View createViewInstance(ThemedReactContext reactContext) {
          return null;
//        return new ReactImageView(reactContext, Fresco.newDraweeControllerBuilder());
    }
}
