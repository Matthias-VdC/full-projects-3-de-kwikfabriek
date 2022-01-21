import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { RNCamera } from "react-native-camera";
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';


export default function Camera() {
  const [{ cameraRef }, { takePicture }] = useCamera(null);

  const captureHandle = async () => {
    try {
      let widthImg, heightImg;
      const data = await takePicture();
      console.log(data.uri);
      const filePath = data.uri;
      // const name = new Date()
      const newFilePath = RNFS.ExternalDirectoryPath + `sample.jpg`;

      await RNFS.moveFile(filePath, newFilePath)
        .then(() => {
          console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
        })
        .catch(error => {
          console.log(error);
        })

      // await RNFS.readFile(newFilePath, 'base64')
      //   .then(res => {
      //     console.log(res);
      //   });

    } catch (error) {
      console.log(error);
    }
  }





  return (
    <View style={styles.body}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}
      >
        <TouchableHighlight onPress={() => captureHandle()}>
          <Text style={styles.capturebutton}>Capture</Text>
        </TouchableHighlight>
      </RNCamera>
    </View>
  );


}


const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  toolbar: {
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  capturebutton: {
    color: 'white',
    backgroundColor: '#1eb900',
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 50
  }
});