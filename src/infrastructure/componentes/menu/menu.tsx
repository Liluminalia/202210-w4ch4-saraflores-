import { Link } from 'react-router-dom';

export function Menu() {
    const menuOptions = [
        { id: '1', path: '', label: 'Home' },
        { id: '2', path: 'robots', label: 'Robots' },
    ];
    return (
        <nav>
            <ul>
                {menuOptions.map((item) => (
                    <li key={item.id}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
