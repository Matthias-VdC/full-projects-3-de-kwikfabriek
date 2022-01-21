import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default class Measure extends Component<{ navigation: any  }> {

  constructor(props: any){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          {/* Hier kunnen er knoppen komen */}
        </View>

          <View style={styles.menuContainer}>
            {/* Hier komt de body van de pagina */}

            <View style={styles.row}>
              <Text style={styles.subTitle}>Measure with</Text>
            </View>

            <View style={styles.row}>

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

                <View style={styles.menuButton}>
                  <Text style={styles.menuButtonText}>Device</Text>
                </View>
  
              </TouchableHighlight>

              <TouchableHighlight onPress={() =>
                  this.props.navigation.navigate('Camera', {})
                  } underlayColor="white">

                <View style={styles.menuButton}>
                  <Text style={styles.menuButtonText}>Camera</Text>
                </View>
  
              </TouchableHighlight>

            </View>
            
          </View>

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
  menuContainer: {
    padding: 20,
  },
  menuButton: {
    width: 175,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 15,
    alignContent: 'center'
  },
  menuButtonText: {
    textAlign: "center",
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  toolbar: {
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'
  },
  toolbarButton: {
    width: 50,
  },
  subTitle: {
    fontSize: 24,
    color: "#000",
    marginBottom: 20,
    fontWeight: '600'
  }
});