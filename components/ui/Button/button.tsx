import styles from './Button.module.css'
import cx from 'classnames'
import React, {MouseEventHandler} from "react";
import {useRouter} from "next/router";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    onClick?:  MouseEventHandler<HTMLButtonElement>;
    href?: string;
}

export default function Button({children, onClick, href, variant = "secondary"}: ButtonProps) {
    const router = useRouter();
    return (
        <button className={cx(styles.button, variant === "primary" ? styles.primary : styles.secondary)} onClick={onClick || (href !== undefined ? (() => router.push(href)) : undefined)}>
            {children}
        </button>
    )
}