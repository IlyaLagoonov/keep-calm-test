import React from 'react';
import styles from './Main.module.css'
import { Heading } from "../Heading/Heading";
import useViewport from "../../hooks/useViewport";
import { MobileSlider } from '../MobileSlider/MobileSlider';
import { Slider } from '../Slider/Slider';


export const Main = () => {
    const { width } = useViewport();
    const breakpoint = 620;
    return (
        <main className={styles.main}>
            <div>
                <div className={styles.wrapper}>
                    <Heading tag='h1' children='ut aliquip&nbsp; ex&nbsp;ea commodo consequat' />
                </div>
                <div className={styles.card}>
                    <picture>
                        <source media='(max-width: 620px)' srcSet='./images/mainMobile.jpg' />
                        <img src='./images/main.jpg' alt="main pic" />
                    </picture>
                    <div className={styles.rightSide}>
                        <Heading tag='h2' children='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
                        <p className={styles.description}>
                            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p className={styles.description}>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.rightCard}>
                        <div className={styles.leftSide}>
                            <Heading tag='h2' children='Lorem ipsum dolor sit amet,consectetur adipiscing elit' />
                            <p className={styles.description}>
                                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p className={styles.description}>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                        <picture>
                            <source media='(max-width: 620px)' srcSet='./images/mainMobile2.jpg' />
                            <img src='./images/main2.jpg' alt='bottom img' />
                        </picture>
                    </div>
                </div>
                <div className={styles.container}>
                    <Heading tag={'h1'} children={'Lorem ipsum dolor sit amet'} />
                </div>
                {width < breakpoint ? <div className={styles.mobileSlider} ><MobileSlider /></div> : <Slider />}
            </div>
            <div className={styles.bottomBlock}>
                <div className={styles.container}>
                    <Heading tag='h1' children='ut aliquip ex ea commodo consequat' />
                </div>
                <div className={styles.card}>
                    <picture>
                        <source media='(max-width: 620px)' srcSet='./images/bottomMobile.jpg' />
                        <img src='./images/bottom.jpg' alt='top img' />
                    </picture>
                    <div className={styles.rightSide}>
                        <Heading tag='h2' children='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
                        <p className={styles.description}>
                            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p className={styles.description}>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.rightCard}>
                        <div className={styles.leftSide}>
                            <Heading tag='h2' children='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
                            <p className={styles.description}>
                                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p className={styles.description}>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                        <picture>
                            <source media='(max-width: 620px)' srcSet='./images/bottomMobile2.jpg' />
                            <img src='./images/bottom2.jpg' alt='top img' />
                        </picture>
                    </div>
                </div>
            </div>
        </main>
    )
}
