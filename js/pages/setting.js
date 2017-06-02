/**
 * Created by zhangshibiao on 2017/6/1.
 */


import React , { Component } from 'react'
import {Image, View, Text, Dimensions} from 'react-native'
import MyThemeConfig from '../utils/theme'
export default  class SettingPage extends  Component {

    static navigationOptions = {
        title: '设置',
        headerStyle: MyThemeConfig.headerStyle,
        headerTitleStyle: MyThemeConfig.headerTitleStyle
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>Setting page </Text>
            </View>
        );
    }
}