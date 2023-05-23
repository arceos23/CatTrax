import { Link } from 'expo-router';
import { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const CatsRoute = () => <Text>Cats</Text>;
const FavoritesRoute = () => <Text>Favorites</Text>;
// const AddCatRoute = () => <Text>Add cat</Text>;
const AddCatRoute = () => <Link href="./addCat/AddCat">Add cat</Link>;

const Nav = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'cats', title: 'Cats', focusedIcon: 'cat' },
    { key: 'favorites', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'addCat', title: 'Add cat', focusedIcon: 'plus' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    cats: CatsRoute,
    favorites: FavoritesRoute,
    addCat: AddCatRoute,
  });

  return <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />;
};

export default Nav;
