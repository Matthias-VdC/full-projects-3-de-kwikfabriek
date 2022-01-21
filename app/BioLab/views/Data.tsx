import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Switch, NativeModules, NativeEventEmitter, } from 'react-native';

export default class Data extends Component {

  constructor(props: any){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          {/* Hier kunnen er knoppen komen */}
        </View>

          {/* Hier komt de body van de pagina */}

      </View>
    )
  }

}

// voorlopige stijlen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  toolbar:{
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'
  }
});