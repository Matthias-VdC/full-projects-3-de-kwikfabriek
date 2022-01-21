// react
import React, { Component } from 'react';

// react-native
import { StyleSheet, Text, View, Button, FlatList, Switch, NativeModules, NativeEventEmitter, } from 'react-native';

// mapViewStyle
import { mainStyle, mapViewStyle } from '../styles/style';

export default class MapView extends Component {

  constructor(props: any){
    super(props);
  }

  render() {
    return (
      <View style={ mainStyle.container}>
        <View style={ mainStyle.toolbar}>
          {/* Hier kunnen er knoppen komen */}
        </View>
          {/* Hier komt de body van de pagina */}
      </View>
    )
  }
}