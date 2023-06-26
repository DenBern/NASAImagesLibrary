import React, {useState} from "react";
import { Main } from "./components/pages/Main/Main.jsx";

export const Context = React.createContext();

export const MainContext = () => {
    const defaultSearch = 'space';
    const currentYear = new Date().getFullYear();
    const [search, setSearch] = useState(defaultSearch);
    const [yearStart, setYearStart] = useState();
    const [yearEnd, setYearEnd] = useState();
    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(1);

    return (
        <Context.Provider
            value={{
                currentYear,
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
                defaultSearch,
            }}
        >
            <Main />
        </Context.Provider>
    )
}