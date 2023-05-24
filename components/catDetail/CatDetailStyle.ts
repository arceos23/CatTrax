import { StyleSheet } from 'react-native';
import { SPACING } from '../../constants/constants';

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginTop: SPACING,
    marginBottom: SPACING,
  },
  card: {
    margin: SPACING,
    flex: 1,
  },
  view: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 0.05,
  },
});

export default styles;
