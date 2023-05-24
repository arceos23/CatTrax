import { useState, useContext, useCallback } from 'react';
import { useRouter } from 'expo-router';
import { Button, TextInput, Snackbar } from 'react-native-paper';
import styles from './EditCatFormStyles';
import CatsContext from '../../hooks/CatsContext';

interface CatDetailProps {
  id: string;
  name: string;
  breed: string;
  age: string;
  favFoods: string;
  description: string;
  image: string;
}

const generateKey = (name: string) => {
  return `${name}_${new Date().getTime()}`;
};

const EditCatForm = ({ id, name, breed, age, favFoods, description, image }: CatDetailProps) => {
  const router = useRouter();
  const [newName, setNewName] = useState(name);
  const [newBreed, setNewBreed] = useState(breed);
  const [newAge, setNewAge] = useState(age);
  const [newFavFoods, setNewFavFoods] = useState(favFoods);
  const [newDescription, setNewDescription] = useState(description);
  const [newImage, setNewImage] = useState(image);
  const { cats, setCats } = useContext(CatsContext);
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  return (
    <>
      <TextInput label="Name" value={newName} onChangeText={setNewName} multiline></TextInput>
      <TextInput label="Breed" value={newBreed} onChangeText={setNewBreed} multiline></TextInput>
      <TextInput label="Age" value={newAge} onChangeText={setNewAge} multiline></TextInput>
      <TextInput label="Favorite foods" value={newFavFoods} onChangeText={setNewFavFoods} multiline></TextInput>
      <TextInput label="Description" value={newDescription} onChangeText={setNewDescription} multiline></TextInput>
      <Button
        onPress={() => {
          const newId = generateKey(newName);
          const updatedCats = cats.filter((cat) => cat.id !== id);
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
          onToggleSnackBar();
        }}
      >
        Submit
      </Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Close',
          onPress: () => {
            onDismissSnackBar;
          },
        }}
        duration={1000}
      >
        Cat updated!
      </Snackbar>
    </>
  );
};

export default EditCatForm;
