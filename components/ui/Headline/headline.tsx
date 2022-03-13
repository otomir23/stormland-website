import React from "react";

export default function Headline({children}: {children: React.ReactNode}) {
    return (
        <h1 style={{
            fontFamily: 'Gilroy',
            marginBlock: 0
        }}>
            {children}
        </h1>
    )
}