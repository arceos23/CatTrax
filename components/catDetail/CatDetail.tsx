import { View } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import styles from './CatDetailStyle';

interface CatDetailProps {
  id: string;
  name: string;
  breed: string;
  age: string;
  favFoods: string;
  description: string;
  image: string;
}

const CatDetail = ({ name, breed, age, favFoods, description, image }: CatDetailProps) => {
  return (
    <Card mode="contained" style={styles.card}>
      <Card.Cover source={{ uri: image }} />
      {/* <Card.Content style={styles.cardContent}> */}
      <Card.Content>
        {/* <View style={styles.view}> */}
        <Text variant="bodyLarge">{`Name: ${name}`}</Text>
        <Text variant="bodyLarge">{`Breed: ${breed}`}</Text>
        <Text variant="bodyLarge">{`Age: ${age}`}</Text>
        <Text variant="bodyLarge">{`Favorite foods: ${favFoods}`}</Text>
        <Text variant="bodyLarge">{`Description: ${description}`}</Text>
        {/* </View> */}
      </Card.Content>
      {/* <Card.Actions>
        <Button>Edit cat</Button>
        <Button onPress={setCats(cats.filter((cat) => cat.id === id))}>Remove cat</Button>
        <Button>Favorite cat</Button>
      </Card.Actions> */}
    </Card>
  );
};

export default CatDetail;
