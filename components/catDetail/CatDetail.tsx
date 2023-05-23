import { Text, Image, ImageSourcePropType } from 'react-native';
import { Surface } from 'react-native-paper';
import styles from './CatDetailStyle';

interface CatDetailProps {
  id: string;
  name: string;
  breed: string;
  age: string;
  favFoods: string;
  description: string;
  photo: ImageSourcePropType;
}

const CatDetail = ({ name, breed, age, favFoods, description, photo }: CatDetailProps) => {
  console.log(name, breed, age, favFoods, description, photo);
  return (
    <Surface style={styles.surface} elevation={0}>
      <Text>{name}</Text>
      <Text>{breed}</Text>
      <Text>{age}</Text>
      <Text>{favFoods}</Text>
      <Text>{description}</Text>
      <Image source={photo} style={styles.photo} accessibilityIgnoresInvertColors />
    </Surface>
  );
};

export default CatDetail;
