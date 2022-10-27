import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../../../feature/pages/home.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<HomePage></HomePage>}></Route>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
