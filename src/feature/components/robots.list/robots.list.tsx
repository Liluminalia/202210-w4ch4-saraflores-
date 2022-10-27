import { Robot } from '../../models/robot';
import { RobotsData } from '../../models/robots.data';
import { RobotItem } from '../robot/robot.item';

export function RobotsList() {
    const title = 'List of Robots';

    return (
        <section>
            <h2>{title}</h2>
            <ul>
                {RobotsData.map((item: Robot) => (
                    <RobotItem item={item}></RobotItem>
                ))}
            </ul>
        </section>
    );
}
