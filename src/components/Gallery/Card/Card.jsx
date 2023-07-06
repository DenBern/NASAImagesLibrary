import React from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import "./Card.scss";

export const Card = (props) => {
    const {
        img,
        location,
        photographer,
        title,
        id
    } = props;

    return (
        <div className="card">
            <Link
                to={`/${id}`}
                key={id}
            >
                <img className="card-img" src={img} alt={title}/>
            </Link>
            <div className="card-description">
                <h3>{title}</h3>
                <div className="details">
                    <div className="location">
                        {location && (
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
                        }
                    </div>
                    <div className="photographer">
                        {photographer && (
                                <>
                                    <div className="logo">
                                        <PhotoCameraIcon/>
                                    </div>
                                    <span>&#xb7;</span>
                                    <div className="name">
                                        <i>{photographer.replace(/ /g, '') !== '' && photographer}</i>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}