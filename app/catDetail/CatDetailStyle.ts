import { Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  button: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
  },
  scrollView: {
    marginBottom: '5%',
  },
});

export default styles;
