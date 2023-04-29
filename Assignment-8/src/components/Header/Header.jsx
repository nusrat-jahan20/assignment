import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <nav className="d-flex justify-content-between align-items-center pt-4">
            <h2>Knowledge Cafe</h2>
            <img
                className="h-75 rounded-circle"
                src={'https://randomuser.me/api/portraits/men/11.jpg'}
                alt=""
            />
        </nav>
    );
};

export default Header;
