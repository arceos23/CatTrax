import { createContext } from 'react';
import CatsContextType from './CatsContextTypes';

// const CatsContext = createContext<CatsContextType>({ cats: null, setCats: () => {} });
const CatsContext = createContext({ cats: [{ key: 'tim' }], setCats: () => {} });
// const CatsContext = createContext({ cats: null, setCats: () => {} });

export default CatsContext;
