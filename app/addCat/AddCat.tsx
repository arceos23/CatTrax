import { SafeAreaView } from 'react-native';
import CatForm from '../../components/catForm/CatForm';
import styles from './addCatStyle';

const AddCat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CatForm></CatForm>
    </SafeAreaView>
  );
};

export default AddCat;
