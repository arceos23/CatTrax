import { useState } from 'react';
import { Tabs } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CatsContext from '../hooks/CatsContext';

export default function Layout() {
  const [cats, setCats] = useState([]);
  return (
    <PaperProvider>
      <CatsContext.Provider value={{ cats, setCats }}>
        <Tabs>
          <Tabs.Screen
            name="home"
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="cat" size={size} color={color} />,
            }}
          />
          <Tabs.Screen name="index" options={{ href: null }} />
          <Tabs.Screen
            name="addCat/addCat"
            options={{
              tabBarLabel: 'Add cat',
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="plus" size={size} color={color} />,
            }}
          />
          <Tabs.Screen name="addCat/addCatStyle" options={{ href: null }} />
        </Tabs>
      </CatsContext.Provider>
    </PaperProvider>
  );
}

/* <Stack
        initialRouteName="home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      /> */
