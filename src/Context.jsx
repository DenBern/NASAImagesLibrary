import React, {useState} from "react";
import { Main } from "./components/pages/Main/Main.jsx";

export const Context = React.createContext();

export const MainContext = () => {

    const currentYear = new Date().getFullYear();
    const [search, setSearch] = useState('space');
    const [yearStart, setYearStart] = useState(1);
    const [yearEnd, setYearEnd] = useState(currentYear);
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
            }}
        >
            <Main />
        </Context.Provider>
    )
}