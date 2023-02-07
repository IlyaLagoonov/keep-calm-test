import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import styles from './Header.module.css'


export const Header = () => {
    return (
        <header className={styles.header}>
          <div className={styles.container}>
              <Logo/>

              <a className={styles.number} href="#">+7 (495) 495-49-54 </a>
          </div>
        </header>
    )
}
