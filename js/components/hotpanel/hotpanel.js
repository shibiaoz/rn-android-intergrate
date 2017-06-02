/**
 * Created by zhangshibiao on 2017/6/1.
 */


import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableNativeFeedback, StyleSheet, Dimensions} from 'react-native'
const {width} = Dimensions.get('window');
var tabWidth = 50;
export default  class HotPanel extends Component {

    static  defaultProps = {
        tabs:[],
        onActive:null,
        isShowIcon:true,
        tabIcon: null,
        tabItem:null,
    }

    static propTypes = {
        tabs: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        tabWidth = width/this.props.tabs.length;
        this.state = {
            defaultIndex: this.props.defaultIndex || 0,
        }
    }

    _renderTabItem(tab, index) {
        return (
            <TouchableNativeFeedback
                key={index}
                onPress={ () => { this.setState({defaultIndex: index});this.props.onActive(tab, index)}}
                background={TouchableNativeFeedback.Ripple('#ffccff', true)}>
                <View style={styles.tabItemContainer}>
                    <View style={styles.tabItem}>
                        <Text>{tab['name']}</Text>
                    </View>
                    {this.props.isShowIcon  && index === this.state.defaultIndex ? (<View style={styles.tabIcon}/>) : null}
                </View>
            </TouchableNativeFeedback>

        );
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.tabs.map( (value, index) => {
                        return this._renderTabItem(value, index);
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'row',
        justifyContent:'flex-start',
        backgroundColor:'transparent',
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'green',
        marginBottom:10,
    },

    tabItemContainer: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start',
        height:50,
        display:'flex',
    },

    tabItem: {
        height:48,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

    tabIcon: {
        display:'flex',
        flex:1,
        width:tabWidth,
        backgroundColor:'red',
        // borderStyle:'solid',
        // borderWidth:1,
        // borderColor:'red',
    },

    tabItemActive:{
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'red',
    },
});