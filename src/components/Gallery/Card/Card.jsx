import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import "./Card.scss";

export const Card = (props) => {
    const {img, location, photographer, title} = props;
    return (
        <div className="card">
            <img className="card-img" src={img} alt={title}/>
            <div className="card-description">
                <h3>{title}</h3>
                <div className="details">
                    <div className="location">
                        {location 
                            ? (
                                <>
                                    <div className="logo">
                                        <LocationOnIcon/> 
                                    </div>
                                    <span>&#xb7;</span>
                                    <div className="place">
                                        <i>{location}</i>
                                    </div>
                                </>
                                ) 
                            : null
                        }
                    </div>
                    <div className="photographer">
                        {photographer ? (
                            <>
                                <div className="logo">
                                    <PhotoCameraIcon/>
                                </div>
                                <span>&#xb7;</span>
                                <div className="name">
                                    <i>{photographer}</i>
                                </div>
                            </>
                        ) : null
                        }
                    </div>
                </div>
            </div>
                        </div>
    )
}