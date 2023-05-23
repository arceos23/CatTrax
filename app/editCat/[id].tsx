import { SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import CatForm from '../../components/catForm/CatForm';
import styles from './editCatStyle';

const EditCat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Edit cat' }} />
      <CatForm></CatForm>
    </SafeAreaView>
  );
};

export default EditCat;
