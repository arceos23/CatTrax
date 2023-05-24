import { useState, useContext } from 'react';
import { useRouter } from 'expo-router';
import { Button, TextInput, Snackbar } from 'react-native-paper';
import styles from './AddCatFormStyles';
import CatsContext from '../../hooks/CatsContext';
import ImagePicker from '../imagePicker/ImagePicker';
import { generateKey } from '../../utils/utils';

import { Asset } from 'expo-asset';
const defaultImage = Asset.fromModule(require('../../assets/CatTraxIcon.png')).uri;

const AddCatForm = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [favFoods, setFavFoods] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(defaultImage);
  const { cats, setCats } = useContext(CatsContext);
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  return (
    <>
      <TextInput label="Name" value={name} onChangeText={setName} multiline></TextInput>
      <TextInput label="Breed" value={breed} onChangeText={setBreed} multiline></TextInput>
      <TextInput label="Age" value={age} onChangeText={setAge} multiline></TextInput>
      <TextInput label="Favorite foods" value={favFoods} onChangeText={setFavFoods} multiline></TextInput>
      <TextInput label="Description" value={description} onChangeText={setDescription} multiline></TextInput>
      <ImagePicker image={image} setImage={setImage}></ImagePicker>
      <Button
        onPress={() => {
          setCats([...cats, { id: generateKey(name), name, breed, age, favFoods, description, image }]);
          setName('');
          setBreed('');
          setAge('');
          setFavFoods('');
          setDescription('');
          setImage(defaultImage);
          router.push('/home');
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
