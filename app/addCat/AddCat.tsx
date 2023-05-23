import { SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import CatForm from '../../components/catForm/CatForm';
import styles from './addCatStyle';

const AddCat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Add cat' }} />
      <CatForm></CatForm>
    </SafeAreaView>
  );
};

export default AddCat;
