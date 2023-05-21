import { useState, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import styles from './CatFormStyles';
import CatsContext from '../../hooks/CatsContext';
import { Redirect } from 'expo-router';

const CatForm = () => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [favFoods, setFavFoods] = useState('');
  const [description, setDescription] = useState('');
  let { cats, setCats } = useContext(CatsContext);

  return (
    <>
      <TextInput label="Name" value={name} onChangeText={setName} multiline></TextInput>
      <TextInput label="Breed" value={breed} onChangeText={setBreed} multiline></TextInput>
      <TextInput label="Age" value={age} onChangeText={setAge} multiline></TextInput>
      <TextInput label="Favorite foods" value={favFoods} onChangeText={setFavFoods} multiline></TextInput>
      <TextInput label="Description" value={description} onChangeText={setDescription} multiline></TextInput>
      <Button
        onPress={() => {
          cats.push({ name, breed, age, favFoods, description });
          return <Redirect href="/home" />;
        }}
      >
        Submit
      </Button>
      {/* <FlatList
        data={cats}
        renderItem={({ item }) => {
          return (
            <>
              <Text>{item.name}</Text>
              <Text>{item.breed}</Text>
              <Text>{item.age}</Text>
              <Text>{item.favFoods}</Text>
              <Text>{item.description}</Text>
            </>
          );
        }}
      ></FlatList> */}
    </>
  );
};

export default CatForm;
