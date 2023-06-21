import React, { useContext, useEffect } from "react";
import { Context } from "../../Context.jsx";
import { Card } from "./Card/Card.jsx";
import { Divider } from "../Divider/Divider.jsx";
import { useNASAService } from "../../service/NASAService.js";

import "./Gallery.scss";

export const Gallery = () => {

    const{search, page, currentYear} = useContext(Context);
    const{getItems, items} = useNASAService();

    useEffect(() => {
        getItems(search, page, 1, currentYear);
    }, [search]);

    return (
        <section className="gallery">
            <Divider/>
            <div className="cards">
                {items.length === 0 
                    ? <p>EMPTY</p>
                    : items.map(item => 
                        <Card 
                            key={item.data[0].nasa_id}
                            img={item.links[0].href}
                            location={item.data[0].location}
                            photographer={item.data[0].photographer}
                            title={item.data[0].title}
                            date={item.data[0].date_created}
                        />
                    )
                }
            </div>
        </section>
    )
}