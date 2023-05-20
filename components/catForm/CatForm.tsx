import { TextInput } from 'react-native-paper';
import styles from './CatFormStyles';

const CatForm = () => {
  return (
    <>
      <TextInput label="Name"></TextInput>
      <TextInput label="Breed"></TextInput>
      <TextInput label="Age"></TextInput>
      <TextInput label="Favorite foods"></TextInput>
      <TextInput label="Description"></TextInput>
    </>
  );
};

export default CatForm;
