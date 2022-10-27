import { createContext } from 'react';
import { Robot } from '../../feature/models/robot';

const initialContext: {
    robots: Array<Robot>;
    handlerEraser: (deletedID: number) => void;
} = {
    robots: [],
    handlerEraser: () => undefined,
};

export const RobotsContext = createContext(initialContext);
