import { useContext } from 'react';
import { Robot } from '../../models/robot';

export function RobotItem({ item }: { item: Robot }) {
    // codigo comentado xq aun no funciona
    //  const { handlerEraser, handlerComplete } = useContext(TodoContext);

    // const handleClick = () => {
    //     handlerEraser(item.id);
    // };

    // const handleChange = () => {
    //     handlerComplete(item);
    // };

    return (
        <li>
            <span>{item.name}</span>
            <img src={'https://robohash.org/' + item.id} alt="a blue robot" />
            <span>{item.resistance}</span>
            <span>{item.speed}</span>
            <span>{item.creatingDate}</span>

            {/* codigo comentado xq aun no funciona
            <span className="button" onClick={handleClick}>
                🗑️
            </span> */}
        </li>
    );
}
