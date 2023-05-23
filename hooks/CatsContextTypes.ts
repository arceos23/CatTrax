type Cat = {
  name: string;
  breed: string;
  age: string;
  favFoods: string;
  description: string;
};

type CatsContextType = {
  cats: Array<Cat> | null;
  setCats: Function | null;
};

export default CatsContextType;
