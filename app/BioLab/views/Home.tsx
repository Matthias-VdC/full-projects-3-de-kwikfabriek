// react
import React, { Component } from 'react';

// react-native
import { StyleSheet, Text, View, TouchableHighlight, Button, FlatList, Switch, NativeModules, NativeEventEmitter, Image, ImageBackground } from 'react-native';

import { LinearGradient } from 'react-native-linear-gradient';
// import { SvgXml, SvgUri } from "react-native-svg"

const svgThing = require("../assets/Logo_waterdruppel.svg");


// homeStyle
import { mainStyle, homeStyle, deviceStyle } from '../styles/style';


export default class Home extends Component<{ navigation: any }> {

  constructor(props: any) {
    super(props);
  }

  render(): React.ReactNode {
    return (
 
      <View style={homeStyle.container}>
        <ImageBackground style={mainStyle.backgroundGradient}
          source={require("../assets/gradient.png")}>

          {/* <LinearGradient colors={['#7F7FD5', '#86A8E7', '#91eae4']}> */}

          <Text style={{ opacity: 0 }}></Text>


          <View style={mainStyle.toolbar}>
            {/* Hier kunnen er knoppen komen */}
          </View>

          <View style={homeStyle.logocontainer}>
            <TouchableHighlight onPress={() =>
              this.props.navigation.navigate('Measure', {})
            } underlayColor="rgba(0,0,0,0)">

              <Image style={homeStyle.logo} source={require('../assets/Logo_waterdruppel.png')} />

            </TouchableHighlight>
          </View>

          <View style={mainStyle.menuContainer}>
            {/* Hier komt de body van de pagina */}

            <View style={mainStyle.row}>

              <TouchableHighlight onPress={() =>
                this.props.navigation.navigate('InfoView', {})
              } underlayColor="rgba(0,0,0,0)">

                <Image style={homeStyle.logobuttons} source={require('../assets/Info-01.png')} />

              </TouchableHighlight>



              <TouchableHighlight onPress={() =>
                this.props.navigation.navigate('Data', {})
              } underlayColor="rgba(0,0,0,0)">

                <Image style={homeStyle.logobuttons} source={require('../assets/Data.png')} />

              </TouchableHighlight>

              {/* info, camera, data, kaart */}


            </View>

            <View style={homeStyle.bottomMiddleButt}>
              <TouchableHighlight onPress={() =>
                this.props.navigation.navigate('Map', {})
              } underlayColor="rgba(0,0,0,0)">

                <Image style={homeStyle.logobuttons} source={require('../assets/Map.png')} />

              </TouchableHighlight>

            </View>
          </View>
          {/* </LinearGradient> */}

        </ImageBackground >
      </View >
    )
  }

}

