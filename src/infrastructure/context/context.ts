import { createContext } from 'react';
import { Robot } from '../../feature/models/robot';

const initialContext: {
    robotsData: Array<Robot>;
    handlerEraser: (deletedID: number) => void;
} = {
    robotsData: [],
    handlerEraser: () => undefined,
};

export const RobotsContext = createContext(initialContext);
