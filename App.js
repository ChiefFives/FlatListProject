import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//the main app component and the navigation router

import FlatListScreen from './screens/FlatListScreen';
import Header from './components/Header';

const RootStack = createStackNavigator({
  FlatList: FlatListScreen,
},
{
  initialRouteName: 'FlatList',
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.screen}>
        <AppContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
  }
});