export type Cat = {
  id: string;
  name: string;
  breed: string;
  age: string;
  favFoods: string;
  description: string;
  photo: string;
};

type CatsContextType = {
  cats: Array<Cat> | null;
  setCats: Function | null;
};

export default CatsContextType;
