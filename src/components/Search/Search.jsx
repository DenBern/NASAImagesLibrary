import React from "react";

import { Input, Button } from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';

import  "./Search.scss";

export const Search = () => {
  return (
      <Input
        style={
          {
            background: 'transparent',
            border: '2px solid rgba(209, 213, 219, 0.7)',
            filter: 'drop-shadow(0px 1.57895px 3.15789px rgba(0, 0, 0, 0.05))',
            borderRadius: '33.1579px',
            width: '505.26px',

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
            style={{
              background: 'none',
            }}
          >
            <SearchIcon/>
          </Button>}
      />
  )
}