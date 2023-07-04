import { useState } from "react";

export const useNASAService = () => {
    const _baseURL = 'https://images-api.nasa.gov/';

    const startYear = 1;
    const currentYear = new Date().getFullYear();
    const itemsPerPage = 10;

    const [totalSearch, setTotalSearch] = useState();

    const [items, setItems] = useState([]);
    const [loadingItems, setLoadingItems] = useState(false);
    const [errorItems, setErrorItems] = useState(false);


    const [asset, setAsset] = useState();
    const [loadingAsset, setLoadingAsset] = useState(false);
    const [errorAsset, setErrorAsset] = useState(false);

    const [metaData, setMetaData] = useState();
    const [loadingMetaData, setLoadingMetaData] = useState(false);
    const [errorMetaData, setErrorMetaData] = useState(false);

    const getData = async (url) => {
        let res = await fetch(url);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }

    const getItems = async (search, page, pageSize = itemsPerPage, yearStart = startYear, yearEnd = currentYear) => {
        setErrorItems(false);
        setLoadingItems(true);
        await getData(`${_baseURL}search?q=${search}&page=${page}&page_size=${pageSize}&media_type=image&year_start=${yearStart}&year_end=${yearEnd}`)
            .then(res => {
                setItems(res.collection.items);
                setTotalSearch(res.collection.metadata.total_hits);
                setLoadingItems(false);
            })
            .catch(() => {
                setErrorItems(true);
                setLoadingItems(false);
            })
    }

    const getAsset = async (id) => {
        setErrorAsset(false);
        setLoadingAsset(true);
        await getData(`${_baseURL}asset/${id}`)
            .then(res => {
                setAsset(res.collection.items[1].href);
                setLoadingAsset(false);
            })
            .catch(() => {
                setErrorAsset(true);
                setLoadingAsset(false);
            })
    }

    const getMetaData = async (id) => {
        setErrorMetaData(false);
        setLoadingMetaData(true);
        await getData(`${_baseURL}metadata/${id}`)
        .then(res => getData(res.location))
        .then(obj => {
            setMetaData({
                title: obj['AVAIL:Title'],
                location: obj['AVAIL:Location'],
                photographer: obj['AVAIL:Photographer'],
                secondaryCreator: obj['AVAIL:SecondaryCreator'],
                description: obj['AVAIL:Description'],
                keywords: obj['AVAIL:Keywords'],
                date: obj['AVAIL:DateCreated'],
            });
            setLoadingMetaData(false);
        })
        .catch(() => {
            setLoadingMetaData(false);
            setErrorMetaData(true);
        })
    }

    return {
        getItems,
        items,
        loadingItems,
        errorItems,
        totalSearch,
        currentYear, 
        getAsset,
        asset,
        loadingAsset,
        errorAsset,
        getMetaData,
        metaData,
        loadingMetaData,
        errorMetaData,
    }
}