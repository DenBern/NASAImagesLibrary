import { useState } from "react";

export const useNASAService = () => {
    const URL = 'https://images-api.nasa.gov/search?q=';

    const currentYear = new Date().getFullYear();

    const [items, setItems] = useState([]);
    const [totalSearch, setTotalSearch] = useState();
    const [image, setImage] = useState();
    const [metaData, setMetaData] = useState();

    const getData = async (url) => {
        let res = await fetch(url);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }

    const getItems = async (search = 'space', page = 1, pageSize = 10) => {
        await getData(`${URL}${search}&page=${page}&page_size=${pageSize}&media_type=image`)
            .then(res => {
                setItems(res.collection.items);
                setTotalSearch(res.collection.metadata.total_hits);
            })
    }

    const getItemsWithFilters = async (search = 'space', page = 1, pageSize = 10, yearStart, yearEnd) => {
        await getData(`${URL}${search}&page=${page}&page_size=${pageSize}&media_type=image&year_start=${yearStart}&year_end=${yearEnd}`)
        .then(res => {
            setItems(res.collection.items);
            setTotalSearch(res.collection.metadata.total_hits);
        })
    }


    const getImage = async (id) => {
        await getData(`https://images-api.nasa.gov/asset/${id}`)
            .then(res => {
                setImage(res.collection.items[0].href);
            })
    }

    const getDescId = async (id) => {
        await getData(`https://images-api.nasa.gov/metadata/${id}`)
        .then(res => getData(res.location))
        .then(obj => {
            setMetaData({
                title: obj['AVAIL:Title'],
                location: obj['AVAIL:Location'],
                photographer: obj['AVAIL:Photographer'],
                description: obj['AVAIL:Description'],
                keywords: obj['AVAIL:Keywords'],
                date: obj['AVAIL:DateCreated'],
            })
        })
    }

    return {
        getItems,
        getItemsWithFilters,
        items, 
        totalSearch,
        currentYear, 
        getImage,
        getDescId,
        metaData,
        image,
    }
}