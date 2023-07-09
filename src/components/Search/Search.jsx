import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context.jsx";
import { Input, Button } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";

import  "./Search.scss";

export const Search = () => {
  const {
    search,
    setSearch,
    startSearch,
    setSearchParams,
    setPage} = useContext(Context);

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(search);
  } ,[search])

  return (
    <div className="search-wrapper">
        <Input
          className="search-input"
          onChange={e => setValue(e.target.value)}
          value={value}
          placeholder="Type in here…"
          endDecorator={
              <Button
                onClick={() => {
                    setSearch(value === '' ? startSearch.toLowerCase() : value.toLowerCase());
                    setSearchParams(`page=${1}`);
                    setPage(1);
                  }
                }
                style={{
                  background: 'none',
                }}>
                <SearchIcon/>
              </Button>
            }
        />
          <p className="search-value">
            Found by: <b>{search.toUpperCase()}</b>
          </p>
      </div>
  )
}