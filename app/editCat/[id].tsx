import { useContext } from 'react';
import { SafeAreaView, View } from 'react-native';
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
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Edit cat' }} />
        <EditCatForm {...cat}></EditCatForm>
      </View>
    </SafeAreaView>
  );
};

export default EditCat;
