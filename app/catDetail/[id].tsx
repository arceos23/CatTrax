import { useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import styles from './CatDetailStyle';
import CatDetail from '../../components/catDetail/CatDetail';
import CatsContext from '../../hooks/CatsContext';

const catDetail = () => {
  const { cats, setCats } = useContext(CatsContext);
  const { id } = useLocalSearchParams();

  const cat = cats.filter((cat) => {
    return cat.id === id;
  })[0];
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: cat.name }} />
      <CatDetail {...cat}></CatDetail>
    </SafeAreaView>
  );
};

export default catDetail;
