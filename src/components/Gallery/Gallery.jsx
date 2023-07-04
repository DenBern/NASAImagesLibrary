import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context.jsx";
import { Card } from "./Card/Card.jsx";
import { Divider } from "../Divider/Divider.jsx";
import { useNASAService } from "../../service/NASAService.js";
import { DateFilter } from "../DateFilter/DateFilter.jsx";
import { Select, MenuItem, Pagination} from "@mui/material";
import { SkeletonCard } from "../Skeletons/SkeletonCard/SkeletonCard.jsx";
import { Empty } from "../Empty/Empty.jsx";

import "./Gallery.scss";

export const Gallery = () => {

    const{
        search, 
        page, 
        setPage, 
        pageSize, 
        setPageSize,
        yearStart,
        yearEnd,
        setSearchParams,
    } = useContext(Context);

    const{
        getItems, 
        items, 
        totalSearch,
        loadingItems,
    } = useNASAService();

    const maxAPILimit = 10000;
    const pages = totalSearch > maxAPILimit 
        ? Math.ceil(maxAPILimit / pageSize ) 
        : Math.ceil(totalSearch / pageSize);

    const handleChangeSize = (e) => {
        setPage(1);
        setSearchParams(`page=${1}`)
        setPageSize(e.target.value);
    };

    useEffect(() => {
        getItems(search, page, pageSize, yearStart, yearEnd);
    }, [search, pageSize, page, yearStart, yearEnd]);

    console.log(totalSearch)

    return (
        <section className="gallery">
            <div className="results">
                <p className="result-text">
                    Total results <b>{totalSearch}</b>
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
                {!totalSearch ? <Empty/> : null}
                {loadingItems ? <SkeletonCard pageSize={pageSize}/>
                : (
                    items.map(item =>
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
                    )
                }
            </div>
            {totalSearch > 0 
                ?
                    <Pagination
                        page={page}
                        count={pages}
                        onChange={(_, page) => {
                                setPage(page);
                                setSearchParams(`page=${page}`)
                            }
                        }
                    />
                : null
            }
        </section>
    )
}