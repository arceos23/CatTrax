import { SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import CatForm from '../../components/catForm/CatForm';
import styles from './AddCatStyle';

const AddCat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Link href="../home">Home</Link>
      <CatForm></CatForm>
    </SafeAreaView>
  );
};

export default AddCat;
