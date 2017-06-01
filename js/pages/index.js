/**
 * Created by zhangshibiao on 2017/6/1.
 */


import React , { Component } from 'react';
import {View, Text, Image, TouchableNativeFeedback, Button } from 'react-native';
import ImageSources  from '../imagelibs';
export default class IndexPage extends  Component {
    static navigationOptions = {
        title: '首页',
        tabBarLabel: '首页',
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

    _onPress() {
        this.props.navigation.navigate('Setting');
    }

    render() {
        return (
            <View>
                <TouchableNativeFeedback
                    onPress={this._onPress.bind(this)}
                    background={TouchableNativeFeedback.Ripple('red', true)}
                >
                    <View style={{borderColor:'red', borderWidth:1, borderStyle:'solid'}}>
                        <Text >按钮</Text>
                    </View>
                </TouchableNativeFeedback>
                <Text >main page</Text>

            </View>
        );
    }
}