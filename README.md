# 学习demo
- 如何在现有的安卓native 上集成rn
- 使用react-native官方推荐的导航react-native navigation
- 如何进行插件的封装，rn 和native 的通信机制
## build js
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output app/src/main/assets/index.android.bundle --assets-dest app/src/main/res/

> 测试发现react-navigation TabNavigator
在多页面情况，单个页面如果有listview，切换tab的导航title 和底部tab bar 切换很缓慢，
点击反应迟钝

## 如何进行插件的封装
- rn 与native 插件
- rn 调用native插件，无返回
- callback返回结果，
- promise返回结果，
- native 调用rn，通过消息实现）

## refrence
- [原生插件封装参考](http://www.lcode.org/react-native%E8%BF%9B%E9%98%B6%E4%B9%8B%E5%8E%9F%E7%94%9F%E6%A8%A1%E5%9D%97%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85%E5%9F%BA%E7%A1%80%E7%AF%871-%E9%80%82/)