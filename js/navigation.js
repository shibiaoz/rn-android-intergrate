/**
 * Created by zhangshibiao on 2017/6/1.
 * MyNavigation
 * wraper app navigation use react-navigation lib
 *
 */
import React, { Component } from 'react';
import { TabNavigator, TabBarBottom, StackNavigator }  from 'react-navigation';
import IndexPage from './pages/index';
import DiscoverPage from './pages/discovery';
import MessagePage from './pages/message';
import MePage from './pages/me';
import SettingPage from './pages/setting';
const tabNavigatorConfig = {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
        initialRouteName: 'Index',
        activeTintColor: '#385ab1',
        inactiveTintColor: '#797c82',
        tabStyle: {
            borderStyle:'solid',
            borderWidth: 1,
            borderColor:'red',
            flex:1,
            activeBackgroundColor:'transparent'
        },
        labelStyle: {
            // borderStyle:'solid',
            // borderWidth: 1,
            // borderColor:'red',
            // flex:1,
            // height:100,
        }

    }
}

const  NavigationTabApp = TabNavigator({
        Index: {screen: IndexPage},
        Discovery: {screen: DiscoverPage},
        Message: {
            screen: MessagePage
        },
        Me: {
            screen: MePage
        },
    },
    tabNavigatorConfig
);

const NavigationApp = StackNavigator({
    Index: {
        screen: NavigationTabApp
    },
    Setting: {
        screen: SettingPage
    }
});

export default  class MyNavigation extends  Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <NavigationApp/>
    }
}
