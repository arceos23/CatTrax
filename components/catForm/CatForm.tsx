import { useState, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import styles from './CatFormStyles';
import CatsContext from '../../hooks/CatsContext';

const CatForm = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [favFoods, setFavFoods] = useState('');
  const [description, setDescription] = useState('');
  const { cats, setCats } = useContext(CatsContext);

  //   const addCat = (cat) => {
  //     cats.push({ key: { name } });
  //   };

  console.log(cats);
  return (
    <>
      <TextInput label="Name" value={name} onChangeText={setName} multiline></TextInput>
      <TextInput label="Breed" value={breed} onChangeText={setBreed} multiline></TextInput>
      <TextInput label="Age" value={age} onChangeText={setAge} multiline></TextInput>
      <TextInput label="Favorite foods" value={favFoods} onChangeText={setFavFoods} multiline></TextInput>
      <TextInput label="Description" value={description} onChangeText={setDescription} multiline></TextInput>
      {/* <Button onPress={setCats({ name: name, breed: breed, age: age, favFoods: favFoods, description: description })}>
        Submit
      </Button> */}
      {/* <Button onPress={cats.push({ name: name, breed: breed, age: age, favFoods: favFoods, description: description })}>
        Submit
      </Button> */}
      {/* <Button onPress={addCat}>Submit</Button> */}
      <Button onPress={() => cats.push({ key: name })}>Submit</Button>
      <FlatList data={cats} renderItem={({ item }) => <Text>{item.key}</Text>} />
    </>
  );
};

export default CatForm;
