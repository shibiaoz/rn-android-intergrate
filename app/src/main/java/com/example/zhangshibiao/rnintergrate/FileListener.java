package com.example.zhangshibiao.rnintergrate;

import android.os.FileObserver;
import android.util.Log;

/**
 * Created by knight on 2017/6/14.
 */

public class FileListener extends FileObserver {
    public FileListener(String path) {
        super(path);
    }

    @Override
    public void onEvent(int i, String s) {
        Log.d("======文件变化了",i + ""+ s);
    }
}
