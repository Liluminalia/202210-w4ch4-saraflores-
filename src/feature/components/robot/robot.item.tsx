import { useContext } from 'react';
import { RobotsContext } from '../../../infrastructure/context/context';
import { Robot } from '../../models/robot';
import style from './robot.item.module.css';

export function RobotItem({ item }: { item: Robot }) {
    const { handlerEraser } = useContext(RobotsContext);

    return (
        <li className={style.host}>
            <span>{item.name}</span>
            <img src={'https://robohash.org/' + item.id} alt="a blue robot" />
            <span>Resistance: {item.resistance}</span>
            <span>Speed: {item.speed}</span>
            <span>Made on {item.creatingDate}</span>
            <button
                onClick={() => {
                    handlerEraser(item.id);
                }}
            >
                🗑️
            </button>
        </li>
    );
}
