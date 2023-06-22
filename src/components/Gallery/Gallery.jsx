import React, { useContext, useEffect } from "react";
import { Context } from "../../Context.jsx";
import { Card } from "./Card/Card.jsx";
import { Divider } from "../Divider/Divider.jsx";
import { useNASAService } from "../../service/NASAService.js";

import { Select, MenuItem, InputLabel } from "@mui/material";

import "./Gallery.scss";

export const Gallery = () => {

    const{search, page, currentYear} = useContext(Context);
    const{getItems, items, totalSearch} = useNASAService();

    const [size, setSize] = React.useState(12);

    const handleChange = (e) => {
        setSize(e.target.value);
    };

    useEffect(() => {
        getItems(search, page, 1, currentYear);
    }, [search]);

    useEffect(() => {
        console.log('size')
        getItems(search, page, 1, currentYear);
    }, [size])

    return (
        <section className="gallery">
            <div className="results">
                <p>Results for <b>{search.toUpperCase()} - {totalSearch}</b></p>
                <div className="size-cards">
                    <p>Page size</p>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={size}
                        onChange={handleChange}
                        >
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={24}>24</MenuItem>
                            <MenuItem value={48}>48</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                    </Select>
                </div>
            </div>
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