/**
 * Created by zhangshibiao on 2017/6/2.
 */
import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback, Image} from 'react-native'

export default  class ArticleCard extends Component {
    constructor(props) {
        super(props)
    }

    _onPress(props) {
        const {id, title, navigation} = this.props;
        navigation.navigate('Detail', {
            id: id,
            title: title,
        });
    }
    render() {
        return (
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#ffccff', true)}
                onPress={ () => {this._onPress()}}>
                <View style={{flex:1, flexDirection:'row', marginBottom:4}}>

                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text>{this.props.title}</Text>
                            <Text>{this.props.author}</Text>
                            <Text>{this.props.amount_comment}</Text>
                        </View>
                    <View style={{width:100, height:60, borderColor:'#ffccff', borderStyle:'solid', borderWidth:1}}>
                        <Image source={{uri: this.props.normal_img_url,width:100, height: 60}}/>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }
}