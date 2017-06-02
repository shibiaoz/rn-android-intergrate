/**
 * Created by zhangshibiao on 2017/6/1.
 */

import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import ImageSources from '../imagelibs'
import  MyThemeConfig  from '../utils/theme'
export default  class MePage extends  Component {
    static navigationOptions = {
        title: '我',
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
                <Text>me page</Text>
            </View>
        );
    }
}