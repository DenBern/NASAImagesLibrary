import React from 'react';
import { Search } from '../../Search/Search.jsx';
import { Gallery } from '../../Gallery/Gallery.jsx';

import "./Main.scss";
import { PlanetsButtons } from '../../PlanetsButtons/PlanetsButton.jsx';

export const Main = () => {

    return (
        <div className="wrapper">
            <header className="header">
                <div className="title-logo">
                    <div className="logo"></div>
                    <div className="title">
                        <h1>NASA Images Library</h1>
                    </div>
                </div>
                <div className="description">
                    <span className="gradient-text">
                        Unlock the secrets of the universe  
                    </span>
                    <span>
                        and explore our vast file library!
                    </span>
                </div>
                <div className="search-buttons">
                    <Search/>
                </div>
                <PlanetsButtons/>
            </header>
            <Gallery />
        </div>
    )
}