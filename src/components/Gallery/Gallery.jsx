import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context.jsx";
import { Card } from "./Card/Card.jsx";
import { Divider } from "../Divider/Divider.jsx";
import { useNASAService } from "../../service/NASAService.js";

import { Select, MenuItem, Pagination} from "@mui/material";

import "./Gallery.scss";
import { DateFilter } from "../DateFilter/DateFilter.jsx";

export const Gallery = () => {

    const{
        search, 
        page, 
        setPage, 
        pageSize, 
        setPageSize,
        yearStart,
        yearEnd,
    } = useContext(Context);

    const{getItems, getItemsWithFilters, items, totalSearch} = useNASAService();

    const maxAPILimit = 10000;
    const pages = totalSearch > maxAPILimit 
        ? Math.ceil(maxAPILimit / pageSize ) 
        : Math.ceil(totalSearch / pageSize);

    const handleChangeSize = (e) => {
        setPage(1);
        setPageSize(e.target.value);
    };

    useEffect(() => {
        if(yearStart || yearEnd) {
            getItemsWithFilters(search, page, pageSize, yearStart, yearEnd);
        } else {
            getItems(search, page, pageSize);
        }
    }, [search, pageSize, page, yearStart, yearEnd]);

    return (
        <>
            <section className="gallery">
                <div className="results">
                    <p className="result-text">
                        Results for <b>{search.toUpperCase()}</b>
                    </p>
                    <DateFilter/>
                    <div className="size-cards">
                        <p>Page size</p>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={pageSize}
                            onChange={handleChangeSize}
                            style={
                                {
                                    color: '#fff',
                                    background: '#312E81',
                                }
                            }
                            >
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={50}>50</MenuItem>
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
                                id={item.data[0].nasa_id}
                            />
                        )
                    }
                </div>
                <Pagination
                    page={page}
                    count={pages}
                    onChange={(_, page) => setPage(page)}
                />
            </section>
        </>
    )
}