package com.example.zhangshibiao.rnintergrate;

import android.app.DownloadManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import java.io.File;


public class MainActivity extends AppCompatActivity {

    private Button btn;
    private Button downloadBtn;
    private long mDownLoadId;
    private CompleteReceiver localReceiver;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        btn = (Button) findViewById(R.id.goRnBtn);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent();
                intent.setClass(MainActivity.this, HelloActivity.class);
                startActivity(intent);
//                finish();
            }
        });

        downloadBtn = (Button) findViewById(R.id.downloadBtn);
        downloadBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                downloadBundle();
            }
        });

        registeReceiver();
    }

    private void registeReceiver() {
        localReceiver = new CompleteReceiver();
        // 注册下载成功之后的通知
        registerReceiver(localReceiver,new IntentFilter(DownloadManager.ACTION_DOWNLOAD_COMPLETE));
        // DownLoadManager会发出一个DownloadManager.ACTION_DOWNLOAD_COMPLETE的广播

    }

    /**
     * 首先去判断是否存在有下载的更新压缩包
     * ，如果有，则先删除旧的，然后下载最新压缩包
     */
    public void downloadBundle() {
        File zipFile = new File(FileConstant.JS_PATCH_LOCAL_PATH);
        if(zipFile != null || zipFile.exists()) {
            zipFile.delete();
        }
        DownloadManager downloadManager =  (DownloadManager)getSystemService(Context.DOWNLOAD_SERVICE);
        DownloadManager.Request request = new DownloadManager
                .Request(Uri.parse(FileConstant.JS_BUNDLE_REMOTE_URL));
        request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_HIDDEN);
        request.setAllowedNetworkTypes(DownloadManager.Request.NETWORK_MOBILE| DownloadManager.Request.NETWORK_WIFI);
        request.setDestinationUri(Uri.parse("file://"+ FileConstant.JS_PATCH_LOCAL_PATH));
        mDownLoadId = downloadManager.enqueue(request);
    }

    private class CompleteReceiver extends BroadcastReceiver {
        @Override
        public void onReceive(Context context, Intent intent) {
            long completeId = intent.getLongExtra(DownloadManager.EXTRA_DOWNLOAD_ID,-1);
            if(completeId == mDownLoadId) {
                Toast.makeText(MainActivity.this, "下载成功", Toast.LENGTH_SHORT).show();
                // 解压
                FileUtils.decompression(FileConstant.JS_PATCH_LOCAL_FOLDER);

//                HotUpdate.handleZIP(getApplicationContext());
            }
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        unregisterReceiver(localReceiver);
    }
}
