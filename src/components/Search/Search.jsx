import React, { useContext, useState } from "react";
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

  return (
    <div className="search-wrapper">
        <Input
          onChange={e => setValue(e.target.value)}
          value={value}
          style={
            {
              background: 'transparent',
              border: '2px solid rgba(209, 213, 219, 0.7)',
              filter: 'drop-shadow(0 1.5px 3px rgba(0, 0, 0, 0.05))',
              borderRadius: '33px',
              width: '505px',

              fontFamily: 'Inter, sans-serif',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '24px',
              lineHeight: '32px',
              color: '#fff',
              padding: '16px 24px',
            }
          }
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