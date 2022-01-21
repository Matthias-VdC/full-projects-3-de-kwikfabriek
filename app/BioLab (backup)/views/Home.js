import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Switch, NativeModules, NativeEventEmitter, } from 'react-native';

export default class Home extends Component<{ navigation: any }> {

  constructor(props: any){
    super(props);
  }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          {/* Hier kunnen er knoppen komen */}
        </View>

          {/* Hier komt de body van de pagina */}

          <Button
            title="Connect with incubator"
            onPress={() =>
              this.props.navigation.navigate('Incubator', {})
            }
          />

          <Button
            title="Use phone camera"
            onPress={() =>
              this.props.navigation.navigate('Camera', {})
            }
          />

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