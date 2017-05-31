package com.example.zhangshibiao.rnintergrate;

import com.facebook.react.ReactActivity;

public class HelloActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component
     *
     *
     * 重写 getMainComponentName() 方法，返回的字符串必须和前面的
     * AppRegistry.registerComponent('navigation', () => App)
     * 里的 navigation 对应，表示该 Activity 会显示对应组件里的内容
     */

    @Override
    protected String getMainComponentName() {
        return "customrn";
    }
}
