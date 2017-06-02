#!/bin/bash
mkdir -p android/app/src/main/assets
react-native bundle --entry-file index.android.js --platform android --dev false --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ --verbose