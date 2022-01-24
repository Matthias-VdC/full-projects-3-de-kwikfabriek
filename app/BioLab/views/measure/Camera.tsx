import React from 'react';

// react-native
import { Text, TouchableHighlight, View } from "react-native";

// dependency
import { RNCamera } from "react-native-camera";
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import { prominent } from 'color.js';


// cameraStyle
import { mainStyle, cameraStyle } from '../../styles/style';

export default function Camera() {
  const [{ cameraRef }, { takePicture }] = useCamera(undefined);

  const captureHandle = async () => {
    try {
      let widthImg: any, heightImg: any;
      const data = await takePicture();
      console.log(data.uri);
      const filePath = data.uri;
      // const name = new Date()
      const newFilePath = RNFS.ExternalDirectoryPath + `sample.jpg`;

      await RNFS.moveFile(filePath, newFilePath)
        .then(() => {
          console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
          console.log("Reading picture...")
          prominent('filessample.jpg').then((colors: any) =>
            console.log(colors));

        })
        .catch(error => {
          console.log(error);
        })
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
      </RNCamera>

      <TouchableHighlight onPress={() => captureHandle()}>
        <Text style={cameraStyle.capturebutton}>Analyze</Text>
      </TouchableHighlight>

    </View>
  );


}

