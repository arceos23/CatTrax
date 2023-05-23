import { Text, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Surface } from 'react-native-paper';
import styles from './CatOverviewStyle';
import { Cat } from '../../hooks/CatsContextTypes';

const PHOTOS = Array.from({ length: 1 }).map((_, i) => `https://unsplash.it/300/300/?random&__id=${i}`);
const PHOTO = 'https://unsplash.it/300/300/?random&__id=0';

const CatOverview = ({ id, name, photo }) => {
  return (
    <Link href={`./catDetail/${id}`} asChild>
      {/* <Link href={`../../app/catDetail/${id}`} asChild> */}
      <Pressable style={styles.surface}>
        <Surface style={styles.surface} elevation={0}>
          <Text>{name}</Text>
          <Image source={undefined} style={styles.photo} accessibilityIgnoresInvertColors />
          {/* <Image source={photo} style={styles.photo} accessibilityIgnoresInvertColors /> */}
          {/* <Image source={{ photo }} style={styles.photo} accessibilityIgnoresInvertColors /> */}
          {/* <Image source={PHOTO} style={styles.photo} accessibilityIgnoresInvertColors /> */}
          {/* <Image source={PHOTOS[0]} style={styles.photo} accessibilityIgnoresInvertColors /> */}
        </Surface>
      </Pressable>
    </Link>
  );
};

export default CatOverview;
