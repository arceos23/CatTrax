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
  photo: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default styles;
