import React from 'react';
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <h2>{process.env.REACT_APP_APP_NAME}</h2>
        </header>
    );
};

export default Header;