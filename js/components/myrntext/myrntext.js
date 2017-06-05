/**
 * Created by knight on 2017/6/5.
 */


import React,{ Component } from 'react'
import {View, requireNativeComponent} from 'react-native'
import PropTypes from 'prop-types'
var myTextView ={
    name:'MyTextViewLOL',
    propTypes:{
        text:PropTypes.string,
        textSize:PropTypes.number,
        textColor:PropTypes.number,
        isAlpha:PropTypes.bool,

        // 实际按照官方文档设置会报错，这些是调试发现
        accessibilityLabel:PropTypes.string,
        testID:PropTypes.string,
        importantForAccessibility:PropTypes.string,
        renderToHardwareTextureAndroid:PropTypes.bool,
        onLayout:PropTypes.bool,
        accessibilityLiveRegion:PropTypes.string,
        accessibilityComponentType:PropTypes.string,
    }
}
var MyTextView = requireNativeComponent('MyRnText',myTextView);
export  default MyTextView;