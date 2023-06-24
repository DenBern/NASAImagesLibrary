import React, { useContext, useEffect } from "react";
import { Context } from "../../Context.jsx";
import { Card } from "./Card/Card.jsx";
import { Divider } from "../Divider/Divider.jsx";
import { useNASAService } from "../../service/NASAService.js";

import { Select, MenuItem, Pagination, InputLabel} from "@mui/material";

import "./Gallery.scss";
import { FormControl } from "@mui/joy";

export const Gallery = () => {

    const{search, setSearch, page, setPage, pageSize, setPageSize} = useContext(Context);
    const{getItems, items, totalSearch} = useNASAService();
    const maxAPILimit = 10000;
    const pages = totalSearch > maxAPILimit ? Math.ceil(maxAPILimit / pageSize ) : Math.ceil(totalSearch / pageSize);

    const handleChangeSize = (e) => {
        setPage(1)
        setPageSize(e.target.value);
    };

    const handleChangePlanet = (e) => {
        setPage(1);
        setSearch(e.target.value);
    }

    useEffect(() => {
        getItems(search, page, pageSize);
    }, [search, pageSize, page]);

    return (
        <>
            <section className="gallery">
                <div className="results">
                    <p>
                        Results for <b>{search.toUpperCase()}</b>
                    </p>
                    <div className="wrapper-buttons">
                        Solar system planets
                        <div className="buttons">

                        </div>
                    </div>
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