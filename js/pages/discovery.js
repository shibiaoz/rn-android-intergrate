/**
 * Created by zhangshibiao on 2017/6/1.
 *
 * DiscoveryPage
 */

import React ,{ Component } from 'react'
import {
    View, Text, Image,
    TouchableNativeFeedback, NativeModules, StyleSheet,
    DeviceEventEmitter
} from 'react-native'
import ImageSources from '../imagelibs'
import MyThemeConfig from '../utils/theme'

const MyRnModulel = NativeModules.MyRnModule;

export default class DiscoveryPage extends  Component {

    /**
     * set navigation title and set tab bar title and tab bar icon
     */

    static navigationOptions = {
        title: '发现',
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

    componentDidMount() {
        DeviceEventEmitter.addListener('event_from_native', (msg) => {
            alert(msg);
        });
    }

    invokeNativeToastPlugin() {
        // let myModulel = NativeModules.MyRnModule;
        MyRnModulel.show('测试调用native 插件 toast', 1);
    }


    invokeNativePhonePlugin() {
         // let myModulel = NativeModules.MyRnModule;
        MyRnModulel.callPhone('18904041289');
    }

    invokeNativeCallback() {
        MyRnModulel.rnCallNativeFromCallback('call native plugin callback', function (dataResult) {
            alert(dataResult);
        });
    }

    invokeNativePromise() {
        MyRnModulel.rnCallNativeFromPromiseBack('call native plugin promise')
            .then(
                (dataResult) => {
                    alert(dataResult);
                }
            );
    }

    render() {
        return (
            <View  style={{flex:1}}>
                <TouchableNativeFeedback>
                    <View style={[{flex:1,height:50, },styles.item]}>
                        <Text>rn调用native 插件以及native 调用rn 插件</Text>
                    </View>
                </TouchableNativeFeedback>
                 <TouchableNativeFeedback onPress={this.invokeNativeToastPlugin}>
                    <View style={[{flex:1,height:50, },styles.item]}>
                        <Text>rn调用native toast show插件，已经native 通过event 调用rn</Text>
                    </View>
                 </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={this.invokeNativePhonePlugin}>
                    <View style={[{flex:1,height:50, },styles.item]}>
                        <Text>n调用native 拨打天花-callPhone</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={this.invokeNativeCallback}>
                    <View style={[{flex:1,height:50, },styles.item]}>
                        <Text>n调用native plugin, rnCallNativeFromCallback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={this.invokeNativePromise}>
                    <View style={[{flex:1,height:50, },styles.item]}>
                        <Text>rn调用native plugin, rnCallNativeFromPromiseBack</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}
const styles =  StyleSheet.create({
    item :{
         borderStyle:'solid',
         borderWidth:1,
         borderColor:'red',
         alignItems:'center',
         justifyContent:'center',
     }
});