/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { PermissionsAndroid, Platform, Text, View } from "react-native";
import RNCallRecorder from "react-native-phone-call-recorder"

function App() {
  React.useEffect(() => {
    if (Platform.OS === 'android')
      PermissionsAndroid.requestMultiple([
        'android.permission.READ_PHONE_STATE',
        'android.permission.READ_CALL_LOG',
      ]).then();
      RNCallRecorder.addPhonesWhiteList(['1234'])
    // RNCallRecorder.switchRecordStatus();

  }, []);
  return <View><Text>Ok</Text></View>
}

export default App;
