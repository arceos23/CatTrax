import { useState, useContext } from 'react';
import { ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button, TextInput, Card } from 'react-native-paper';
import styles from './AddCatFormStyles';
import ImagePicker from '../imagePicker/ImagePicker';
import CatsContext from '../../hooks/CatsContext';
import { generateKey } from '../../utils/utils';
import { DEFAULT_IMAGE } from '../../constants/constants';

const AddCatForm = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [favFoods, setFavFoods] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(DEFAULT_IMAGE);
  const { cats, setCats } = useContext(CatsContext);

  return (
    <>
      <Card mode="contained" style={styles.card}>
        <ScrollView>
          <ImagePicker image={image} setImage={setImage}></ImagePicker>
          <Card.Content>
            <TextInput label="Name" value={name} onChangeText={setName} multiline></TextInput>
            <TextInput label="Breed" value={breed} onChangeText={setBreed} multiline></TextInput>
            <TextInput label="Age" value={age} onChangeText={setAge} multiline></TextInput>
            <TextInput label="Favorite foods" value={favFoods} onChangeText={setFavFoods} multiline></TextInput>
            <TextInput label="Description" value={description} onChangeText={setDescription} multiline></TextInput>
          </Card.Content>
        </ScrollView>
      </Card>
      <Button
        mode="contained"
        onPress={() => {
          setCats([...cats, { id: generateKey(name), name, breed, age, favFoods, description, image }]);
          setName('');
          setBreed('');
          setAge('');
          setFavFoods('');
          setDescription('');
          setImage(DEFAULT_IMAGE);
          router.push('/home');
        }}
      >
        Submit
      </Button>
    </>
  );
};

export default AddCatForm;
