import React from 'react';
import styles from './header.module.scss';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate();
    return (
        <nav className={styles.nav}>
            <h1 onClick={() => navigate(`/`)}>중국어 단어장</h1>
        </nav >
    )
}

export default Header;