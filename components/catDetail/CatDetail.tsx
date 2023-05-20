import { Text, Image } from 'react-native';
import { Surface } from 'react-native-paper';
import styles from './CatDetailStyle';

const CatDetail = ({ uri }) => {
  return (
    <Surface style={styles.surface} elevation={0}>
      <Text>Cat name</Text>
      <Image source={{ uri }} style={styles.photo} accessibilityIgnoresInvertColors />
    </Surface>
  );
};

export default CatDetail;
