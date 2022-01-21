// react
import React from 'react';

// react-native
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

// dependency
import { RNCamera } from "react-native-camera";
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';

// cameraStyle
import { mainStyle, cameraStyle } from '../../styles/style';


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
    <View style={cameraStyle.body}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={cameraStyle.preview}
      >
        <TouchableHighlight onPress={() => captureHandle()}>
          <Text style={cameraStyle.capturebutton}>Capture</Text>
        </TouchableHighlight>
      </RNCamera>
    </View>
  );
}