import React, { useContext, useState } from "react";
import { useNASAService } from "../../service/NASAService.js";
import { Context } from "../../context/Context.jsx";
import { Button, Input } from "@mui/joy";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
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

  const [startYearError, setStartYearError] = useState("");
  const [endYearError, setEndYearError] = useState("");

  const activeFilter = () => {
    setStartYearError("");
    setEndYearError("");

    if(startYearValue  === '' && endYearValue === '') {
      setYearStart(startYear);
      setYearEnd(currentYear);
    } else if (endYearValue === '') {
      setYearStart(startYearValue);
      setYearEnd(currentYear);
    } else {
      setYearStart(startYearValue);
      setYearEnd(endYearValue);
    }
    setSearchParams(`page=${1}`);
    setPage(1);
  }

  const clearFilter = () => {
    setStartYearError("");
    setEndYearError("");
    setYearStart(startYear);
    setYearEnd(currentYear);
    setSearchParams(`page=${1}`);
    setPage(1);
    setStartYearValue('');
    setEndYearValue('');
  }

const handleStartYearChange = (e) => {
  const value = e.target.value;
  setStartYearValue(value);

  if (value < 1 || value > currentYear) {
    setStartYearError("error");
    setStartYearValue(startYearError);
  } else {
    setStartYearError("");
  }
};

const handleEndYearChange = (e) => {
  const value = e.target.value;
  setEndYearValue(value);

  if (value < 1 || value > currentYear) {
    setEndYearError("error");
    setEndYearValue(endYearError);
  } else {
    setEndYearError("");
  }
};

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
          helpertext={startYearError}
          error={startYearError !== ""}
          min="1"
          max={currentYear}
          maxLength={4}
          value={startYearValue}
          onChange={handleStartYearChange}
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
          helpertext={endYearError}
          error={endYearError !== ""}
          min="1"
          max={currentYear}
          maxLength={4}
          value={endYearValue}
          onChange={handleEndYearChange}
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