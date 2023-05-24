import { useState, useContext } from 'react';
import { ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, TextInput, Card } from 'react-native-paper';
import styles from './EditCatFormStyles';
import CatsContext from '../../hooks/CatsContext';
import ImagePicker from '../imagePicker/ImagePicker';
import { generateKey } from '../../utils/utils';

interface CatDetailProps {
  id: string;
  name: string;
  breed: string;
  age: string;
  favFoods: string;
  description: string;
  image: string;
}

const EditCatForm = ({ id, name, breed, age, favFoods, description, image }: CatDetailProps) => {
  const router = useRouter();
  const [newName, setNewName] = useState(name);
  const [newBreed, setNewBreed] = useState(breed);
  const [newAge, setNewAge] = useState(age);
  const [newFavFoods, setNewFavFoods] = useState(favFoods);
  const [newDescription, setNewDescription] = useState(description);
  const [newImage, setNewImage] = useState(image);
  const { cats, setCats } = useContext(CatsContext);

  return (
    <>
      <Card mode="contained" style={styles.card}>
        <ScrollView>
          <ImagePicker image={newImage} setImage={setNewImage}></ImagePicker>
          <Card.Content>
            <TextInput label="Name" value={newName} onChangeText={setNewName} multiline></TextInput>
            <TextInput label="Breed" value={newBreed} onChangeText={setNewBreed} multiline></TextInput>
            <TextInput label="Age" value={newAge} onChangeText={setNewAge} multiline></TextInput>
            <TextInput label="Favorite foods" value={newFavFoods} onChangeText={setNewFavFoods} multiline></TextInput>
            <TextInput
              label="Description"
              value={newDescription}
              onChangeText={setNewDescription}
              multiline
            ></TextInput>
          </Card.Content>
        </ScrollView>
      </Card>
      <Button
        mode="contained"
        onPress={() => {
          const newId = generateKey(newName);
          const updatedCats = cats.filter((cat) => cat.id !== id);
          if (newImage === '') {
            setNewImage('assets/CatTraxIcon.png');
          }
          updatedCats.push({
            id: newId,
            name: newName,
            breed: newBreed,
            age: newAge,
            favFoods: newFavFoods,
            description: newDescription,
            image: newImage,
          });
          setCats(updatedCats);
          router.push(`/catDetail/${newId}`);
        }}
      >
        Submit
      </Button>
    </>
  );
};

export default EditCatForm;
