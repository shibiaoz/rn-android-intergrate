package com.example.zhangshibiao.service;

import android.app.Service;
import android.content.Intent;
import android.os.Binder;
import android.os.IBinder;
import android.support.annotation.Nullable;
import android.util.Log;

import com.example.zhangshibiao.rnintergrate.FileConstant;
import com.example.zhangshibiao.rnintergrate.FileListener;

/**
 * Created by knight on 2017/6/8.
 */

public class MyService extends Service {
    private MyBinder myBinder = new MyBinder();
    private FileListener fileListener;
    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return myBinder;
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        Log.d("myservice","onDestroy");
        fileListener = null;
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        Log.d("myservice-1", "onStartCommand() executed");
        fileListener.startWatching();
        return super.onStartCommand(intent, flags, startId);
    }

    @Override
    public void onCreate() {
        fileListener = new FileListener(FileConstant.JS_PATCH_LOCAL_FOLDER +"/wan");
        super.onCreate();
        Log.d("myservice-2","onCreate");
    }

    @Override
    public boolean stopService(Intent name) {
        fileListener.stopWatching();
        return super.stopService(name);
    }

    class MyBinder extends Binder {
        public void startDownload() {
            // 执行具体的下载任务
            Log.d("myservice binder", "startDownload() executed");
        }
    }
}
