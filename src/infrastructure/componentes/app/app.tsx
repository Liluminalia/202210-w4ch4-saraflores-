import HomePage from '../../../feature/pages/home.page';
import { Layout } from '../layout/layout';

export function App() {
    return (
        <>
            <div className="app">
                <Layout>
                    <HomePage></HomePage>
                </Layout>
            </div>
        </>
    );
}
