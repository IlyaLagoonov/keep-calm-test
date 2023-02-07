import React from 'react';
import styles from './Main.module.css'
import Slider from "../Slider/Slider";
import {Heading} from "../Heading/Heading";


export const Main = () => {
    return (
        <main className={styles.main}>
            <div>
                <div className={styles.wrapper}>
                    <Heading tag='h1' children='ut aliquip ex ea commodo consequat'/>
                </div>
                <div className={styles.card}>
                    <img src='./images/main.png' alt='top img'/>
                    <div className={styles.rightSide}>
                        <Heading tag='h2' children='Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
                        <p>
                            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.rightCard}>
                        <div className={styles.leftSide}>
                            <Heading tag='h2' children='Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
                            <p>
                                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                        <img src='./images/main2.png' alt='bottom img'/>
                    </div>
                </div>
            </div>
            <Slider/>
            <div className={styles.bottomBlock}>
                <div className={styles.wrapper}>
                    <Heading tag='h1' children='ut aliquip ex ea commodo consequat'/>
                </div>
                <div className={styles.card}>
                    <img src='./images/bottom.png' alt='top img'/>
                    <div className={styles.rightSide}>
                        <Heading tag='h2' children='Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
                        <p>
                            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.rightCard}>
                        <div className={styles.leftSide}>
                            <Heading tag='h2' children='Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
                            <p>
                                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                        <img src='./images/bottom2.png' alt='botton img'/>
                    </div>
                </div>
            </div>
        </main>
    )
}
