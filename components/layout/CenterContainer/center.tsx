import React from "react";

export default function CenterContainer({children}: {children: React.ReactNode}) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            textAlign: "center",
            height: "calc(100vh - 10em)"
        }}>
            {children}
        </div>
    )
}