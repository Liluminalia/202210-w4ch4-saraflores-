import { useContext } from 'react';
import { RobotsContext } from '../../../infrastructure/context/context';
import { Robot } from '../../models/robot';
import style from './robot.item.module.css';

export function RobotItem({ item }: { item: Robot }) {
    const { handlerEraser } = useContext(RobotsContext);

    const handleClick = () => {
        handlerEraser(item.id);
    };

    return (
        <li className={style.host}>
            <span>{item.name}</span>
            <img src={'https://robohash.org/' + item.id} alt="a blue robot" />
            <span>{item.resistance}</span>
            <span>{item.speed}</span>
            <span>{item.creatingDate}</span>
            <span className="button" onClick={handleClick}>
                🗑️
            </span>
        </li>
    );
}
