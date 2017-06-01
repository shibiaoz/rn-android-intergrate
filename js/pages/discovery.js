/**
 * Created by zhangshibiao on 2017/6/1.
 *
 * DiscoveryPage
 */

import React ,{ Component } from 'react';
import {View, Text, Image} from 'react-native';
import ImageSources from '../imagelibs';
export default class DiscoveryPage extends  Component {

    /**
     * set navigation title and set tab bar title and tab bar icon
     */

    static navigationOptions = {
        title: '发现',
        tabBarLabel: '发现',
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
                <Text>discovery page</Text>
            </View>
        );
    }
}
