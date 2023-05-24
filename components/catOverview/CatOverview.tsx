import { Text, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Surface } from 'react-native-paper';
import styles from './CatOverviewStyle';

const CatOverview = ({ id, name, image }) => {
  console.log(image);
  return (
    <Link href={`./catDetail/${id}`} asChild>
      {/* <Pressable style={styles.surface}> */}
      <Pressable style={styles.pressable}>
        <Surface style={styles.surface} elevation={0}>
          <Text>{name}</Text>
          <Image source={{ uri: image }} style={styles.image} accessibilityIgnoresInvertColors />
        </Surface>
      </Pressable>
    </Link>
  );
};

export default CatOverview;
