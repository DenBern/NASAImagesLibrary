import React from 'react';
import { Search } from '../../Search/Search.jsx';
import { Gallery } from '../../Gallery/Gallery.jsx';
import { PlanetsButtons } from '../../PlanetsButtons/PlanetsButtons.jsx';

import "./Main.scss";

export const Main = () => {

    return (
        <div className="wrapper">
            <div className="container">
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
                    <div className="search">
                        <Search/>
                    </div>
                    <PlanetsButtons/>
                </header>
                <Gallery/>
            </div>
        </div>
    )
}