/**
 * Created by zhangshibiao on 2017/6/1.
 */

import React , { Component } from 'react'
import { View, Text, Image } from 'react-native'
import ImageSources from '../imagelibs'
import MyThemeConfig from '../utils/theme'
export  default class MessagePage extends  Component {

    static navigationOptions = {
        title: '消息',
        tabBarLabel: '消息',
        headerStyle: MyThemeConfig.headerStyle,
        headerTitleStyle: MyThemeConfig.headerTitleStyle,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={ImageSources.accoutDefault}
                style={[{tintColor: tintColor}]}
            />
        ),
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>mesage page</Text>
            </View>
        );
    }
}
