import React from "react";
import NextLink from 'next/link'
import styles from './Link.module.css'

export default function Link({children, href}: {children: React.ReactNode, href: string}) {
    return (
        <NextLink href={href}>
            <a className={styles.link}>
                {children}
            </a>
        </NextLink>
    )
}