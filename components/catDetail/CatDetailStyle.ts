import { Dimensions, Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ...Platform.select({
    web: {
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
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  card: {
    margin: '4%',
    flex: 1,
  },
  // view: {
  //   justifyContent: 'center',
  //   alignContent: 'center',
  //   textAlign: 'center', // <-- the magic
  //   backgroundColor: 'red',
  // },
  // cardContent: {
  //   textAlign: 'center', // <-- the magic
  //   fontWeight: 'bold',
  //   fontSize: 18,
  //   marginTop: 0,
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: 'yellow',
  //   // flex: 1,
  //   // margin: 20,
  //   // // flex: 1,
  //   // textAlign: 'center',
  //   // alignContent: 'center',
  //   // justifyContent: 'center',
  // },
});

export default styles;
