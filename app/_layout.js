import { Stack, Tabs } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <PaperProvider>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="cat" size={size} color={color} />,
            // tabBarIcon: () => <MaterialCommunityIcons name="cat" size={24} color="black" />,
          }}
        />
        <Tabs.Screen name="index" options={{ href: null }} />
        <Tabs.Screen
          name="addCat/addCat"
          options={{
            tabBarLabel: 'Add cat',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="plus" size={size} color={color} />,
            // tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="plus" size={24} color="black" />,
          }}
        />
        <Tabs.Screen name="addCat/addCatStyle" options={{ href: null }} />
      </Tabs>
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
