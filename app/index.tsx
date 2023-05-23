import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { expo } from '../app.json';
import { Redirect } from 'expo-router';
import CatsContext from '../hooks/CatsContext';

export default function Index() {
  return (
    <PaperProvider>
      {/* <CatsContext.Provider value={{ cats: [{ key: 'tim' }], setCats: null }}> */}
      <Redirect href="/home" />
      {/* </CatsContext.Provider> */}
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => Index);
