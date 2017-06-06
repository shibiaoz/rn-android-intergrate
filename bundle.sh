#!/bin/bash
mkdir -p android/app/src/main/assets
react-native bundle --entry-file index.android.js --platform android --dev false --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ --verbose


## 打包到bundle 文件夹下
react-native bundle --entry-file index.android.js --platform android --dev false --bundle-output ./bundle/index.android.bundle --assets-dest ./bundle --verbose