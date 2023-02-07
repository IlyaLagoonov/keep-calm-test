import React from 'react';
import styles from './Footer.module.css'


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <small className={styles.copy}>
                    © TEST, 1022–2022
                </small>
            </div>
        </footer>
    )
}
