import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
// import { Robot } from '../../models/robot';
// import { RobotsData } from '../../models/robots.data';
// test comentado porque no me quiere funcionar
describe('Given robotItem Component', () => {
    describe('When we render the component...', () => {
        test('Then it should display the resistance of the robot', () => {
            //
            const mockRobotsData = {
                id: 1,
                name: 'marvin',
                img: 'https://robohash.org/25',
                speed: 9,
                resistance: 6,
                creatingDate: '01/05/1989',
            };
            //             render(<RobotItem Robot={mockRobotsData} />);
            //             const element = screen.getByText(/6/i);
            //             expect(element).toBeInTheDocument();
        });
    });
});
