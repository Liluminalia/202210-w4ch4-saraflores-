import { useState } from 'react';
import { Robot } from '../../feature/models/robot';
import { RobotsData } from '../../feature/models/robots.data';
import { RobotsContext } from './context';

export function RobotsContextProvider({ children }: { children: JSX.Element }) {
    const initialRobots: Array<Robot> = RobotsData;
    const [robots, setRobots] = useState(initialRobots);

    const handlerEraser = (deletedID: number) => {
        setRobots(robots.filter((item) => item.id !== deletedID));
    };

    const context = {
        robots,
        handlerEraser,
    };
    return (
        <RobotsContext.Provider value={context}>
            {children}
        </RobotsContext.Provider>
    );
}
