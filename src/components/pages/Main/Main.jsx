import React from "react";

import "./Main.scss";

export const Main = () => {
    return (
        <div className="container">
            <header className="header">
            <div className="header-title-logo">
                <div className="logo"></div>
                <div className="title">
                    <h1>NASA Images Library</h1>
                </div>
            </div>
            <div className="header-description">
                <h2>Find something interesting in our huge image library!</h2>
            </div>
            </header>
        </div>
    )
}