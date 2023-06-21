import React, {useState} from "react";
import { Main } from "./components/pages/Main/Main.jsx";

export const Context = React.createContext();

export const MainContext = () => {
    const currentYear = new Date().getFullYear();
    const [search, setSearch] = useState('');
    const [yearStart, setYearStart] = useState('');
    const [yearEnd, setYearEnd] = useState('');

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
            }}
        >
            <Main />
        </Context.Provider>
    )
}