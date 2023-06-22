import React, { useContext, useEffect } from "react";
import { Context } from "../../Context.jsx";
import { Card } from "./Card/Card.jsx";
import { Divider } from "../Divider/Divider.jsx";
import { useNASAService } from "../../service/NASAService.js";

import { Select, MenuItem, Pagination } from "@mui/material";

import "./Gallery.scss";

export const Gallery = () => {

    const{search, page, setPage, pageSize, setPageSize, currentYear, yearStart} = useContext(Context);
    const{getItems, items, totalSearch} = useNASAService();

    const pages = Math.ceil(totalSearch / pageSize);
    const handleChange = (e) => {
        setPageSize(e.target.value);
    };

    const handleChangePage = (e) => {
        console.log(e.target)
    };

    useEffect(() => {
        getItems(search, page, pageSize, yearStart, currentYear);
    }, [search, pageSize, page]);

    return (
        <>
            <section className="gallery">
                <div className="results">
                    <p>Results for <b>{search.toUpperCase()} - {totalSearch}</b></p>
                    <div className="size-cards">
                        <p>Page size</p>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={pageSize}
                            onChange={handleChange}
                            style={
                                {
                                    color: '#fff',
                                    background: '#312E81',
                                }
                            }
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
            <footer>
                <Pagination
                    page={page}
                    count={pages}
                    onChange={handleChangePage}
                />
            </footer>
        </>
    )
}