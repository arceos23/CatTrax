import { Platform, StatusBar, StyleSheet } from 'react-native';
import { SPACING } from '../../constants/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    margin: SPACING,
  },
});

export default styles;
