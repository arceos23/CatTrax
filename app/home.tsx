import { useContext } from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Platform, StatusBar } from 'react-native';
import { Stack } from 'expo-router';
import CatsContext from '../hooks/CatsContext';
import CatOverview from '../components/catOverview/CatOverview';
import { Text } from 'react-native-paper';

const Home = () => {
  const { cats, setCats } = useContext(CatsContext);

  return (
    <SafeAreaView style={styles.container}>
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

const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      grid: {
        display: 'grid' as 'none',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gridRowGap: '8px',
        gridColumnGap: '8px',
        padding: 8,
        backgroundColor: '#3B3838',
      },
    },
    default: {
      grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '5%',
        justifyContent: 'space-evenly',
        backgroundColor: '#3B3838',
      },
    },
  }),
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default Home;
