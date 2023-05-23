import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { expo } from '../app.json';
import { Redirect } from 'expo-router';

export default function Index() {
  return (
    <PaperProvider>
      <Redirect href="/home" />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => Index);
