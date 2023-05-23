// import { ImageProps } from 'react-native/types';

import { ImageURISource } from 'react-native/types';

export type Cat = {
  id: string;
  name: string;
  breed: string;
  age: string;
  favFoods: string;
  description: string;
  photo: string;
  // photo: ImageURISource | ImageURISource[];
  // photo: IntrinsicAttributes & IntrinsicClassAttributes<Image> & Readonly<ImageProps>;
};

type CatsContextType = {
  cats: Array<Cat> | null;
  setCats: Function | null;
};

export default CatsContextType;
