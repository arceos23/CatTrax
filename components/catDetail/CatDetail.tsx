import { Text, Image, ImageSourcePropType } from 'react-native';
import { Surface, Card, Button } from 'react-native-paper';
import styles from './CatDetailStyle';

interface CatDetailProps {
  id: string;
  name: string;
  breed: string;
  age: string;
  favFoods: string;
  description: string;
  photo: string;
}

const CatDetail = ({ name, breed, age, favFoods, description, photo }: CatDetailProps) => {
  console.log(name, breed, age, favFoods, description, photo);
  return (
    <Card>
      {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
      {/* <Card.Title title={`Name: ${name}`} subtitle={`Breed: ${breed}`} /> */}
      <Card.Content>
        <Text>{`Name: ${name}`}</Text>
        <Text>{`Breed: ${breed}`}</Text>
        <Text>{`Age: ${age}`}</Text>
        <Text>{`Favorite foods: ${favFoods}`}</Text>
        <Text>{`Description: ${description}`}</Text>
        {/* <Image source={{ uri: photo }} style={styles.photo} accessibilityIgnoresInvertColors /> */}
      </Card.Content>
      <Card.Cover source={{ uri: photo }} />
      <Card.Actions>
        <Button>Edit cat</Button>
        <Button>Remove cat</Button>
        <Button>Favorite cat</Button>
      </Card.Actions>
    </Card>
  );
};

export default CatDetail;
