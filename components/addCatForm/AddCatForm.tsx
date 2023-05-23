import { useState, useContext } from 'react';
import { Button, TextInput, Snackbar } from 'react-native-paper';
import styles from './AddCatFormStyles';
import CatsContext from '../../hooks/CatsContext';

const generateKey = (name: string) => {
  return `${name}_${new Date().getTime()}`;
};

const AddCatForm = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [favFoods, setFavFoods] = useState('');
  const [description, setDescription] = useState('');
  const { cats, setCats } = useContext(CatsContext);
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  // For testing
  const photo = Array.from({ length: 1 }).map((_, i) => `https://unsplash.it/300/300/?random&__id=${i}`);

  return (
    <>
      <TextInput label="Name" value={name} onChangeText={setName} multiline></TextInput>
      <TextInput label="Breed" value={breed} onChangeText={setBreed} multiline></TextInput>
      <TextInput label="Age" value={age} onChangeText={setAge} multiline></TextInput>
      <TextInput label="Favorite foods" value={favFoods} onChangeText={setFavFoods} multiline></TextInput>
      <TextInput label="Description" value={description} onChangeText={setDescription} multiline></TextInput>
      <Button
        onPress={() => {
          setCats([...cats, { id: generateKey(name), name, breed, age, favFoods, description, photo: photo[0] }]);
          setName('');
          setBreed('');
          setAge('');
          setFavFoods('');
          setDescription('');
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
        Cat added!
      </Snackbar>
    </>
  );
};

export default AddCatForm;
