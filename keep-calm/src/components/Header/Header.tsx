import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Mobile } from './mobile.svg';
import styles from './Header.module.css'
import useViewport from '../../hooks/useViewport';


export const Header = () => {

    const { width } = useViewport();
    const breakpoint = 620;

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo />
                {width < breakpoint ? <Mobile /> : <a className={styles.number} href="tel:+7 (495) 495-49-54">+7 (495) 495-49-54 </a>}
            </div>
        </header>
    )
}
