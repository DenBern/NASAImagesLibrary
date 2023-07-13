import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context.jsx";
import { Card } from "./Card/Card.jsx";
import { Divider } from "../Divider/Divider.jsx";
import { useNASAService } from "../../service/NASAService.js";
import { DateFilter } from "../DateFilter/DateFilter.jsx";
import { Select, MenuItem, Pagination} from "@mui/material";
import { SkeletonCard } from "../Skeletons/SkeletonCard/SkeletonCard.jsx";
import { EmptyError } from "../EmptyError/EmptyError.jsx";

import "./Gallery.scss";

export const Gallery = () => {
    const {
        search,
        page,
        setPage,
        pageSize,
        setPageSize,
        yearStart,
        yearEnd,
        setSearchParams,
    } = useContext(Context);

    const {
        getItems,
        items,
        totalSearch,
        loadingItems,
        errorItems,
    } = useNASAService();

    const maxAPILimit = 10000;
    const pages = totalSearch > maxAPILimit
        ? Math.ceil(maxAPILimit / pageSize )
        : Math.ceil(totalSearch / pageSize);

    const handleChangeSize = (e) => {
        setPage(1);
        setSearchParams(`page=${1}`);
        setPageSize(e.target.value);
    };

    useEffect(() => {
        getItems(search, page, pageSize, yearStart, yearEnd);
    }, [search, pageSize, page, yearStart, yearEnd]);

    const loadedItems = !loadingItems && !errorItems && items;
    const notFoundResults = !totalSearch && !loadingItems && !errorItems;

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
                        labelId="simple-select-label"
                        id="simple-select"
                        value={pageSize}
                        onChange={handleChangeSize}
                        style={
                            {
                                color: '#fff',
                                background: '#096BDE',
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
                {notFoundResults && <EmptyError errorItems={errorItems}/>}
                {errorItems && <EmptyError errorItems={errorItems}/>}
                {loadingItems && <SkeletonCard pageSize={pageSize}/>}
                {loadedItems &&
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
                }
            </div>
            {totalSearch > pageSize && !errorItems
                ?
                    <Pagination
                        size="small"
                        color="primary"
                        shape="rounded"
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