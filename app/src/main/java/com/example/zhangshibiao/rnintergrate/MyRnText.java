package com.example.zhangshibiao.rnintergrate;

import android.graphics.Color;
import android.view.MotionEvent;
import android.view.View;
import android.widget.TextView;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * Created by knight on 2017/6/5.
 */

public class MyRnText extends SimpleViewManager {
    @Override
    public String getName() {
        return "MyRnText";
    }

    /**
     * 创建view实例。
     *
     * @param reactContext
     * @return
     */
    @Override
    protected View createViewInstance(final ThemedReactContext reactContext) {
        final TextView tv = new TextView(reactContext);
        tv.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View view, MotionEvent motionEvent) {
                if (motionEvent.getAction() == MotionEvent.ACTION_DOWN) {
                    WritableMap nativeE = Arguments.createMap();
                    nativeE.putString("message", "myRnTextTouchMessage");
                    reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(tv.getId(), "topChange", nativeE);
                    return true;
                } else {
                    return false;
                }

            }
        });
        return tv;
    }

    @ReactProp(name = "text")
    public void setText(TextView view, String text) {
        view.setText(text);
    }

    @ReactProp(name = "textSize")
    public void setTextSize(TextView view, float fontSize) {
        view.setTextSize(fontSize);
    }

    @ReactProp(name = "textColor", defaultInt = Color.BLACK)
    public void setTextColor(TextView view, int textColor) {
        view.setTextColor(textColor);
    }

    @ReactProp(name = "isAlpha", defaultBoolean = false)
    public void setTextAlpha(TextView view, boolean isAlpha) {
        if (isAlpha) {
            view.setAlpha(0.5f);
        } else {

        }
    }

}
