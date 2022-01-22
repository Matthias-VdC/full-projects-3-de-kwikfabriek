// react
import React, { Component } from 'react';

// react-native
import { StyleSheet, Text, View, Button, FlatList, Switch, NativeModules, NativeEventEmitter, ImageBackground, } from 'react-native';

// dataStyle
import { mainStyle, dataStyle } from '../styles/style';

export default class Data extends Component {

  constructor(props: any){
    super(props);
  }

  render() {
    return (
      <View style={mainStyle.container}>
        <ImageBackground style={mainStyle.backgroundGradient} source={require("../assets/gradient.png")}>
          <View style={mainStyle.toolbar}>
            {/* Hier kunnen er knoppen komen */}
          </View>
          {/* Hier komt de body van de pagina */}
        </ImageBackground >
      </View>
    )
  }
}