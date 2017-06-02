/**
 * Created by zhangshibiao on 2017/6/1.
 */


import React , { Component } from 'react'
import {View, Text, Image, TouchableNativeFeedback, Button, ScrollView, RefreshControl } from 'react-native'
import ImageSources  from '../imagelibs'
import MyThemeConfig from '../utils/theme'
import HotPanel from '../components/hotpanel/hotpanel'
import HomeList from '../components/homelist/homelist'
export default class IndexPage extends  Component {
    static reqUrl = 'http://100.66.152.140:8000/homelist.json';
    static navigationOptions = {
        title: '首页',
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
        this.state = {
            tabs: [
                {
                    name:'热点1',
                    id:'redian1',
                },
                {
                    name:'热点2',
                    id:'redian2',
                },
                {
                    name:'热点3',
                    id:'redian3',
                },
                {
                    name:'热点4',
                    id:'redian4',
                }
            ],
            isRefreshing: true,
            list:[],
        }
    }

    _onPress() {
        this.props.navigation.navigate('Setting');
    }

    _onActive(tab, index) {

    }

    _onRefresh() {

    }

    componentDidMount() {
        this._fetchData();
    }

    _fetchData() {
        fetch(IndexPage.reqUrl)
            .then( (response) =>  response.json() )
            .then( (responseData) => {
                let list = responseData && responseData.data.list;
                this.setState({
                    list: this.state.list.concat(list),
                    isRefreshing: false
                });
            });
    }

    _loadMore() {
        this._fetchData();
    }

    render() {
        return (
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        progressViewOffset={50}
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                        progressBackgroundColor="#ffff00"
                    />
                }
            >
                <HotPanel tabs={this.state.tabs} onActive={this._onActive.bind(this)}/>
                <HomeList list={this.state.list} navigation={this.props.navigation} loadMore={this._loadMore.bind(this)}/>
            </ScrollView>
        );
    }
}