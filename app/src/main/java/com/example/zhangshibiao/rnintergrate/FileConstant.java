package com.example.zhangshibiao.rnintergrate;

import android.os.Environment;

import java.io.File;

/**
 * Created by knight on 2017/6/5.
 */
public class FileConstant {

    /**
     * zip的文件名
     */
    public static final String ZIP_NAME = "wan";

    /**
     * bundle文件名
     */
    public static final String JS_BUNDLE_LOCAL_FILE = "index.android.bundle";
    public static final String PATCH_IMG_FILE = "patch_imgs.txt";

    /**
     * 第一次解压zip后的文件目录
     */
    public static final String JS_PATCH_LOCAL_FOLDER = Environment.getExternalStorageDirectory().toString()
            + File.separator + "customrn";

    //MainApplication.getInstance().getAppPackageName();

    public static final String LOCAL_FOLDER = JS_PATCH_LOCAL_FOLDER + "/" + ZIP_NAME;

    public static final String DRAWABLE_PATH = JS_PATCH_LOCAL_FOLDER + "/" + ZIP_NAME + "/drawable-mdpi/";

    /**
     * 除第一次外，未来解压zip后的文件目录
     */
    public static final String FUTURE_JS_PATCH_LOCAL_FOLDER = JS_PATCH_LOCAL_FOLDER+"/future";

    public static final String FUTURE_DRAWABLE_PATH = FUTURE_JS_PATCH_LOCAL_FOLDER + "/"+ ZIP_NAME + "/drawable-mdpi/";
    public static final String FUTURE_PAT_PATH = FUTURE_JS_PATCH_LOCAL_FOLDER+"/wan/"+"bundle.pat";

    /**
     * zip文件
     */
    public static final String JS_PATCH_LOCAL_PATH = JS_PATCH_LOCAL_FOLDER + File.separator + ZIP_NAME + ".zip";


    /**
     * 合并后的bundle文件保存路径
     */
    public static final String JS_BUNDLE_LOCAL_PATH = JS_PATCH_LOCAL_FOLDER +"/wan/" + JS_BUNDLE_LOCAL_FILE;

    /**
     * .pat文件
     */
    public static final String JS_PATCH_LOCAL_FILE = JS_PATCH_LOCAL_FOLDER +"/wan/bundle.pat";

    /**
     * 增量图片名称文件路径
     */
    public static final String PATCH_IMG_NAMES_PATH = JS_PATCH_LOCAL_FOLDER +"/wan/" + PATCH_IMG_FILE;

    /**
     * 下载URL
     */
    //http://100.66.153.115:8000/wan.zip
    public static final String JS_BUNDLE_REMOTE_URL = "http://100.66.154.232:8000/"+ZIP_NAME+".zip";

}
