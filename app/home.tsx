import { SafeAreaView, ScrollView, View, Text, StyleSheet, Platform, StatusBar, Dimensions, Image } from 'react-native';
import { Stack, useRouter, Link } from 'expo-router';

import CatOverview from '../components/catOverview/CatOverview';

const PHOTOS = Array.from({ length: 25 }).map((_, i) => `https://unsplash.it/300/300/?random&__id=${i}`);

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Link href="./addCat/AddCat">Add cat</Link>
      <ScrollView>
        <View style={styles.grid}>
          {PHOTOS.map((uri) => (
            <CatOverview key={uri} uri={uri}></CatOverview>
          ))}
        </View>
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
