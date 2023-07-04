import React, {useState} from "react";
import { Main } from "../components/pages/Main/Main.jsx";
import { useSearchParams } from "react-router-dom";

export const Context = React.createContext();

export const MainContext = () => {
    const startSearch = 'Earth';
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(startSearch.toLowerCase());
    const [yearStart, setYearStart] = useState();
    const [yearEnd, setYearEnd] = useState();
    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(+searchParams.get('page') || 1);

    return (
        <Context.Provider
            value={
                {
                    search,
                    setSearch,
                    yearStart,
                    setYearStart,
                    yearEnd,
                    setYearEnd,
                    pageSize,
                    setPageSize,
                    page,
                    setPage,
                    startSearch,
                    searchParams,
                    setSearchParams,
                }
            }
        >
            <Main/>
        </Context.Provider>
    )
}