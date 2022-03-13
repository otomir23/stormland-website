import Head from "next/head";
import Header from "./header";
import React from "react";

interface LayoutProps {
    children?: React.ReactNode;
    title?: string;
}

export default function Layout({children, title = "???"}: LayoutProps) {
    return (
        <div style={{
            minHeight: '100vh',
            height: '1px'
        }}>
            <Head>
                <title>{title} - StormLand</title>
                <meta name="description" content="StormLand - уютный сервер для друзей." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}