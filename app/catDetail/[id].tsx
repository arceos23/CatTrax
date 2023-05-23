import { useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import styles from './catDetailStyle';
import CatDetail from '../../components/catDetail/CatDetail';
import CatsContext from '../../hooks/CatsContext';
import { Button } from 'react-native-paper';

const catDetail = () => {
  const router = useRouter();
  const { cats, setCats } = useContext(CatsContext);
  const { id } = useLocalSearchParams();

  const cat = cats.filter((cat) => {
    return cat.id === id;
  })[0];
  return cat ? (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: cat.name }} />
      <CatDetail {...cat}></CatDetail>
      <Link href={`../editCat/${id}`} asChild>
        <Button>Edit cat</Button>
      </Link>
      <Button
        onPress={() => {
          router.push('/home');
          setCats(cats.filter((cat) => cat.id !== id));
        }}
      >
        Remove cat
      </Button>
      <Button>Favorite cat</Button>
    </SafeAreaView>
  ) : null;
};

export default catDetail;
