import { Text, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Surface } from 'react-native-paper';
import styles from './CatOverviewStyle';

const CatOverview = ({ id, name, photo }) => {
  return (
    <Link href={`./catDetail/${id}`} asChild>
      <Pressable style={styles.surface}>
        <Surface style={styles.surface} elevation={0}>
          <Text>{name}</Text>
          <Image source={{ uri: photo }} style={styles.photo} accessibilityIgnoresInvertColors />
        </Surface>
      </Pressable>
    </Link>
  );
};

export default CatOverview;
