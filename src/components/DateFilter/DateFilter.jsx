import React, { useContext, useState } from "react";
import { Context } from "../../context/Context.jsx";
import { Button, Input } from "@mui/joy";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { useNASAService } from "../../service/NASAService.js";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

import "./DateFilter.scss";

export const DateFilter = () => {
  const { startYear, currentYear } = useNASAService();
  const {
    setYearStart,
    setYearEnd,
    setPage,
    setSearchParams,
  } = useContext(Context);

  const [startYearValue, setStartYearValue] = useState('');
  const [endYearValue, setEndYearValue] = useState('');


  const activeFilter = () => {
    setYearStart(startYearValue);
    setYearEnd(endYearValue);
    setSearchParams(`page=${1}`);
    setPage(1);
  }

  const clearFilter = () => {
    setYearStart(startYear);
    setYearEnd(currentYear);
    setSearchParams(`page=${1}`);
    setPage(1);
    setStartYearValue('');
    setEndYearValue('');
  }

  return (
    <div className="date-filter">
      <Button
        className="btn-filter-clear"
        onClick={() => clearFilter()}
      >
        <DeleteIcon/>
      </Button>
      <div
        className="date-inputs"
        style={
          {
            display: "flex",
            gap: "10px"
          }
        }
      >
        <Input
          value={startYearValue}
          onChange={(e) => setStartYearValue(e.target.value)}
          variant="outlined"
          size="sm"
          placeholder="Year start"
          type="number"
          sx={
            {
              '--Input-focusedInset': 'var(--any, )',
              '--Input-focusedThickness': '0.25rem',
              '--Input-focusedHighlight': 'rgba(13,110,253,.25)',
              '&::before': {
                transition: 'box-shadow .15s ease-in-out',
              },
              '&:focus-within': {
                borderColor: '#86b7fe',
              },
            }
          }
          endDecorator={<CalendarMonthOutlinedIcon/>}
        />
        <Input
          value={endYearValue}
          onChange={(e) => setEndYearValue(e.target.value)}
          variant="outlined"
          size="sm"
          placeholder="Year end"
          type="number"
          sx={
            {
              '--Input-focusedInset': 'var(--any, )',
              '--Input-focusedThickness': '0.25rem',
              '--Input-focusedHighlight': 'rgba(13,110,253,.25)',
              '&::before': {
                transition: 'box-shadow .15s ease-in-out',
              },
              '&:focus-within': {
                borderColor: '#86b7fe',
              },
            }
          }
          endDecorator={<CalendarMonthOutlinedIcon/>}
        />
      </div>
      <Button
        className="btn-filter-search"
        onClick={() => activeFilter()}
      >
        <SearchIcon/>
      </Button>
    </div>
  )
}