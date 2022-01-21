/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './views/Home';
import Camera from './views/Camera';
import Incubator from './views/Incubator';

const Stack = createNativeStackNavigator();

export default class App extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home' }}
          />

          <Stack.Screen
            name="Incubator"
            component={Incubator}
            options={{ title: 'Incubator' }}
          />

          <Stack.Screen
            name="Camera"
            component={Camera}
            options={{ title: 'Camera' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}

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
