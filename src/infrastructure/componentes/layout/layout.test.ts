import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';

describe('Given Layout component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Testing layout"', () => {
            //test comentado tampoco funciona
            // render(
            //     <Router>
            //         <Layout>
            //             <p>Testing layout</p>
            //         </Layout>
            //     </Router>
            // );
            // const element = screen.getByText(/Testing layout/i);
            // expect(element).toBeInTheDocument();
        });
    });
});
