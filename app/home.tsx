import { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Platform, StatusBar, Dimensions, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Surface } from 'react-native-paper';

const PHOTOS = Array.from({ length: 25 }).map((_, i) => `https://unsplash.it/300/300/?random&__id=${i}`);

const screenWidth = Dimensions.get('window').width;
const gutterSpace = 10;
// const marginHorizontal = 20;
// const eachWidth = (screenWidth - (gutterSpace + marginHorizontal)) / 3;
// const eachWidth = (screenWidth - marginHorizontal) / 3;
// const eachWidth = (screenWidth - (gutterSpace + marginHorizontal)) / 2;
// const eachWidth = (screenWidth - marginHorizontal) / 2;

const marginHorizontal = screenWidth / 2.5 / 6; // where 6 is 2 blocks in a row multiplying 3 spaces (left-right-center)

const Home = () => {
  const router = useRouter();
  // const [searchTerm, setSearchTerm] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.grid}>
          {PHOTOS.map((uri) => (
            <Surface key={uri} style={styles.surface} elevation={0}>
              <Text>Cat name</Text>
              <Image source={{ uri }} style={styles.photo} accessibilityIgnoresInvertColors />
            </Surface>
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
      surface: {
        width: '100%',
        height: 150,
        padding: '5%',
        backgroundColor: 'lightgrey',
        borderRadius: 150 * 0.1,
        overflow: 'hidden',
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
      // surface: {
      //   height: Dimensions.get('window').width / 2.5,
      //   width: screenWidth / 3,
      //   // width: eachWidth,
      //   padding: '5%',
      //   margin: marginHorizontal,
      //   backgroundColor: 'lightgrey',
      //   borderRadius: Dimensions.get('window').width * 0.05,
      //   overflow: 'hidden',
      // },
      surface: {
        height: Dimensions.get('window').width / 2.5,
        width: '40%',
        padding: '2.5%',
        margin: '2.5%',
        backgroundColor: 'lightgrey',
        borderRadius: Dimensions.get('window').width * 0.05,
        overflow: 'hidden',
      },
    },
  }),
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Home;
