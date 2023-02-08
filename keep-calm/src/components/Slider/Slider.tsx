import React, { useRef } from "react";
import styles from './Slider.module.css'
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
    children: any;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1500], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-10, -50, v)}%`);
    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 4000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className={styles.parallax}>
            <motion.div className={styles.scroller} style={{ x }}>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
                <span>{children}</span>
            </motion.div>
        </div>
    );
}

export const Slider = () => {
    return (
        <section className={styles.sectionSlider}>
            <ParallaxText baseVelocity={5}>
                <img src='./images/slide1.png' />
                <img src='./images/slide2.png' />
                <img src='./images/slide3.png' />
                <img src='./images/slide4.png' />
                <img src='./images/slide5.png' />
                <img src='./images/slide6.png' />
                <img src='./images/slide7.png' />
                <img src='./images/slide8.png' />
            </ParallaxText>
        </section>
    )
}
