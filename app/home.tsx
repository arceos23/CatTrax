import { useContext } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Platform, StatusBar } from 'react-native';
import { Stack } from 'expo-router';
import { Text } from 'react-native-paper';
import styles from './homeStyle';
import CatsContext from '../hooks/CatsContext';
import CatOverview from '../components/catOverview/CatOverview';

const Home = () => {
  const { cats, setCats } = useContext(CatsContext);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Stack.Screen options={{ title: 'Cats' }} />
      <ScrollView>
        {cats.length !== 0 ? (
          <View style={styles.grid}>
            {cats.map((cat) => (
              <CatOverview key={cat.id} {...cat}></CatOverview>
            ))}
          </View>
        ) : (
          <View style={styles.grid}>
            <Text variant="labelLarge" style={{ color: 'white' }}>
              Add your cats to see them here!
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
