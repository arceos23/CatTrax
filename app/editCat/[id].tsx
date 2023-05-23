import { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import EditCatForm from '../../components/editCatForm/EditCatForm';
import styles from './editCatStyle';
import CatsContext from '../../hooks/CatsContext';

const EditCat = () => {
  const { cats, setCats } = useContext(CatsContext);
  const { id } = useLocalSearchParams();

  const cat = cats.filter((cat) => {
    return cat.id === id;
  })[0];
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Edit cat' }} />
      <EditCatForm {...cat}></EditCatForm>
    </SafeAreaView>
  );
};

export default EditCat;
