import { Text } from 'react-native';
import { Card, Button } from 'react-native-paper';
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
  return (
    <Card>
      <Card.Content>
        <Text>{`Name: ${name}`}</Text>
        <Text>{`Breed: ${breed}`}</Text>
        <Text>{`Age: ${age}`}</Text>
        <Text>{`Favorite foods: ${favFoods}`}</Text>
        <Text>{`Description: ${description}`}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: photo }} />
      {/* <Card.Actions>
        <Button>Edit cat</Button>
        <Button onPress={setCats(cats.filter((cat) => cat.id === id))}>Remove cat</Button>
        <Button>Favorite cat</Button>
      </Card.Actions> */}
    </Card>
  );
};

export default CatDetail;
