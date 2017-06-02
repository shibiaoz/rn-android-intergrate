/**
 * Created by zhangshibiao on 2017/6/2.
 */
import React , { Component } from 'react'
import {WebView, StyleSheet} from 'react-native'
import MyThemeConfig from '../utils/theme'
const pageUrl = 'https://mp.weixin.qq.com/s?__biz=MzA4OTc4MTM0OA==&mid=2650358481&idx=1&sn=a2f51ce89ca6ec888eff97d95f93abeb&chksm=881847dabf6fcecc3133506534c8161c47acc31f7f9ca25494daec861907e328fbd524126f1d&scene=0&key=f899fac88420dff101825a2f022c433f95386bd110c7f0eb0d75579882e570f45fc762955fa433d9414ba93f6702d17c450f1693f5ed0683f32a13d8ee0a5cd1cdec8f9707168674ee5e3ca40a926ce1&ascene=0&uin=MTg1NjQxMzY4MA%3D%3D&devicetype=iMac+MacBookPro12%2C1+OSX+OSX+10.12.4+build(16E195)&version=12020710&nettype=WIFI&fontScale=100&pass_ticket=WDoOEMNPmFfzeYnhprG3iQyJsCTPa56uFPxf3sFoOCwB681RPhSD3tJ1z1UrZhxw';
export default  class DetailPage extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerStyle: MyThemeConfig.headerStyle,
        headerTitleStyle: MyThemeConfig.headerTitleStyle,
    });

    constructor(props) {
        super(props);
        this.state = {
            url: pageUrl,
            scalesPageToFit: true,
        }
    }

    onShouldStartLoadWithRequest() {

    }

    onNavigationStateChange() {

    }

    render() {
        return (
            <WebView
                automaticallyAdjustContentInsets={false}
                style={styles.webView}
                source={{uri: this.state.url}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
                onNavigationStateChange={this.onNavigationStateChange}
                onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit}
            />
        );
    }
}
const styles = StyleSheet.create({
    webView: {
        flex:1,
    }
})