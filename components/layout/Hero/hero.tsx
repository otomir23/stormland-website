import styles from "./Hero.module.css";
import {Headline} from "../../ui";
import React from "react";

interface HeroProps {
    title: React.ReactNode;
    description: React.ReactNode;
    buttons: React.ReactNode;
    image: string;
}

export default function Hero(props: HeroProps) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Headline>
                    {props.title}
                </Headline>
                <p style={{
                    maxWidth: '40em'
                }}>
                    {props.description}
                </p>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1em'
                }}>
                    {props.buttons}
                </div>
            </div>
            <img src={props.image} className={styles.picture} alt=''/>
        </div>
    )
}