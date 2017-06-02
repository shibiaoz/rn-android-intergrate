/**
 * Created by zhangshibiao on 2017/6/2.
 */

import React, { Component } from 'react'
import { View, Text, Image, TouchableNativeFeedback, ListView, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'
import ArticleCard from '../articlecard/articlecard'
export default class HomeList extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            dataSource: null,
        };
    }
    static defaultProps = {
        list:[],
        loadMore: function () {
            
        }
    }

    static propTypes = {
        list: PropTypes.array.isRequired,
        loadMore: PropTypes.func
    }

    _renderItem(rowData, sectionID, rowID, highlightRow) {
        console.log(rowData);
        return (<ArticleCard {...rowData} key={rowID} navigation={this.props.navigation}/>);
    }

    render() {
        console.log(this.props.list);
        let list = this.props.list;
        if (list.length) {
            this.state.dataSource =  this.state.ds.cloneWithRows(list);
        }
        return this._renderContent(list)
    }

    _renderContent(list) {
        if (list.length ) {
            return (
                <ListView
                    style={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderItem.bind(this)}
                    onEndReached={ () => {this.props.loadMore()}}
                    onEndReachedThreshold={50}
                />
            );
        }
        else {
            return null;
        }

    }
}
const styles = StyleSheet.create({
    listView: {
    }
})