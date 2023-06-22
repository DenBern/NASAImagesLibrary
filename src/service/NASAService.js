import { useState } from "react";

export const useNASAService = () => {
    const URL = 'https://images-api.nasa.gov/search?q=';

    const currentYear = new Date().getFullYear();

    const[items, setItems] = useState([]);
    const[totalSearch, setTotalSearch] = useState();
    const[image, setImage] = useState();

    const getData = async (url) => {
        let res = await fetch(url);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }

    const getItems = (search = '', page = 1, yearStart = 1, yearEnd = currentYear ) => {
        getData(`${URL}${search}&page=${page}&page_size=${12}&media_type=image&year_start=${yearStart}&year_end=${yearEnd}`)
            .then(res => {
                setItems(res.collection.items)
                setTotalSearch(res.collection.metadata.total_hits)
            })
    }


    const getDetails = (id) => {
        getData(`https://images-api.nasa.gov/asset/${id}`)
            .then(res => {
                setImage(res.collection.items[1].href)
            })
    }

    return {
        getItems, 
        items, 
        totalSearch,
        currentYear, 
        getDetails, 
        image
    }
}