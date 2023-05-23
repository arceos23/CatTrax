import { SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import AddCatForm from '../../components/addCatForm/AddCatForm';
import styles from './addCatStyle';

const AddCat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Add cat' }} />
      <AddCatForm></AddCatForm>
    </SafeAreaView>
  );
};

export default AddCat;
