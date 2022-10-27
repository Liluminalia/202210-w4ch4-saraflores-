import { Robot } from '../../models/robot';
import { RobotsData } from '../../models/robots.data';
import { RobotItem } from '../robot/robot.item';
import Style from './robot.list.module.css';

export function RobotsList() {
    return (
        <section>
            <ul className={Style.list}>
                {RobotsData.map((item: Robot) => (
                    <RobotItem item={item}></RobotItem>
                ))}
            </ul>
        </section>
    );
}
