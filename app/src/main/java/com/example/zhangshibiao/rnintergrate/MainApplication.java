package com.example.zhangshibiao.rnintergrate;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.io.File;
import java.util.Arrays;
import java.util.List;

import javax.annotation.Nullable;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    /**
     * 表示是否启动开发者模式。
     * @return boolean
     */
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    /**
     * 是引用的模块列表，默认需要添加 MainReactPackage，
     * 如果需要在 js 里调用原生 Java 模块，
     * 需要添加自定义的模块（如 OtherReactPackage）
     */
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new MyRnPackage()
      );
    }

      /**
       * 返回rn 执行js 的入口文件
       * @return
       */
      @Nullable
      @Override
      protected String getJSBundleFile() {
          File file = new File(FileConstant.JS_BUNDLE_LOCAL_PATH);
          if(file != null && file.exists()) {
                return FileConstant.JS_BUNDLE_LOCAL_PATH;
          } else {
              // 默认返回
              return super.getJSBundleFile();
          }
      }

  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
