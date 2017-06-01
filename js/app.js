import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import  MyNavigation from './navigation'
export default class extends Component {
  render() {
    return (
        <MyNavigation/>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 20,
    color: '#333333'
  }
})