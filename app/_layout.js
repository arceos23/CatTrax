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
          {/* Displayed tabs */}
          <Tabs.Screen
            name="home"
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="cat" size={size} color={color} />,
            }}
          />
          <Tabs.Screen
            name="addCat/addCat"
            options={{
              tabBarLabel: 'Add cat',
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="plus" size={size} color={color} />,
            }}
          />
          {/* Hidden tabs */}
          <Tabs.Screen name="index" options={{ href: null }} />
          <Tabs.Screen name="addCat/addCatStyle" options={{ href: null }} />
          <Tabs.Screen name="catDetail/[id]" options={{ href: null }} />
          <Tabs.Screen name="catDetail/catDetailStyle" options={{ href: null }} />
          <Tabs.Screen name="editCat/[id]" options={{ href: null }} />
          <Tabs.Screen name="editCat/editDetailStyle" options={{ href: null }} />
        </Tabs>
      </CatsContext.Provider>
    </PaperProvider>
  );
}
