// react
import React, { Component } from 'react';

// react-native
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

// measureStyle
import { mainStyle, measureStyle } from '../styles/style';

export default class Measure extends Component<{ navigation: any }> {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={mainStyle.container}>
        <View style={mainStyle.toolbar}>
          {/* Hier kunnen er knoppen komen */}
        </View>

        <View style={measureStyle.menuContainer}>
          {/* Hier komt de body van de pagina */}

          <View style={measureStyle.row}>
            <Text style={measureStyle.subTitle}>Measure with</Text>
          </View>

          <View style={measureStyle.row}>

            {/* <TouchableHighlight onPress={() =>
                  this.props.navigation.navigate('Incubator', {})
                  } underlayColor="white">

                <View style={styles.menuButton}>
                  <Text style={styles.menuButtonText}>Incubator</Text>
                </View>
  
              </TouchableHighlight> */}

            <TouchableHighlight onPress={() =>
              this.props.navigation.navigate('Device', {})
            } underlayColor="white">
              <View style={measureStyle.menuButton}>
                <Text style={measureStyle.menuButtonText}>Device</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() =>
              this.props.navigation.navigate('Camera', {})
            } underlayColor="white">
              <View style={measureStyle.menuButton}>
                <Text style={measureStyle.menuButtonText}>Camera</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
