import { useState, useContext } from 'react';
import { useRouter } from 'expo-router';
import { Button, TextInput, Snackbar } from 'react-native-paper';
import styles from './AddCatFormStyles';
import CatsContext from '../../hooks/CatsContext';
import ImagePicker from '../imagePicker/ImagePicker';

import { Asset } from 'expo-asset';
// const defaultImage = Asset.fromModule(require('./CatTraxIcon.png')).uri;
const defaultImage = Asset.fromModule(require('../../assets/CatTraxIcon.png')).uri;

const generateKey = (name: string) => {
  return `${name}_${new Date().getTime()}`;
};

const AddCatForm = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [favFoods, setFavFoods] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(defaultImage);
  // const [image, setImage] = useState('');
  const { cats, setCats } = useContext(CatsContext);
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  // For testing
  // const photo = Array.from({ length: 1 }).map((_, i) => `https://unsplash.it/300/300/?random&__id=${i}`);

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
          // const img = image !== '' ? image : 'file://' + RNFS.DocumentDirectoryPath + '/directory/my.png';
          // const img = image !== '' ? image : '../../assets/CatTraxIcon.png';
          // const img = image !== '' ? image : require('../../assets/CatTraxIcon.png');
          let img = image ? image : require('./CatTraxIcon.png');
          // console.log('img:', img);
          // img = Asset.fromModule(require('./CatTraxIcon.png')).uri;
          // img = defaultImage;
          console.log('before', img);
          console.log('before', defaultImage);
          if (img === 19) {
            console.log('in');
            img = defaultImage;
            img = Asset.fromModule(require('./CatTraxIcon.png')).uri;
          }
          console.log('after', img);
          // setCats([...cats, { id: generateKey(name), name, breed, age, favFoods, description, image }]);
          // setCats([...cats, { id: generateKey(name), name, breed, age, favFoods, description, img }]);
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
