/**
 * Created by zhangshibiao on 2017/6/1.
 */


import React , { Component } from 'react'
import {Image, View, Text } from 'react-native'


export default  class SettingPage extends  Component {

    static  navigationOptions = {
        title: 'Setting page'
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