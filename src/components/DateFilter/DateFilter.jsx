import React, { useContext, useEffect, useState } from "react";
import { useNASAService } from "../../service/NASAService.js";
import { Context } from "../../context/Context.jsx";
import { Button } from "@mui/joy";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';

import "./DateFilter.scss";

export const DateFilter = () => {
  const { startYear, currentYear } = useNASAService();
  const {
    setYearStart,
    setYearEnd,
    setPage,
    setSearchParams,
  } = useContext(Context);

  const [startYearValue, setStartYearValue] = useState(null);
  const [endYearValue, setEndYearValue] = useState(null);
  const [activeFilters, setActiveFilters] = useState(false);

  const activeFilter = (startYearValue, endYearValue) => {
    switch(true) {
      case !startYearValue && !endYearValue:
        setYearStart(startYear);
        setYearEnd(currentYear);
        break;
      case !endYearValue:
        setYearStart(startYearValue);
        setYearEnd(currentYear);
        setActiveFilters(true);
        break;
      case !startYearValue:
        console.log('no start')
        setYearStart(startYear);
        setYearEnd(endYearValue);
        setActiveFilters(true);
        break;
      default:
        setYearStart(startYearValue);
        setYearEnd(endYearValue);
        setActiveFilters(true);
        break;
    }
    setSearchParams(`page=${1}`);
    setPage(1);
  }

  const clearFilter = () => {
    setYearStart(startYear);
    setYearEnd(currentYear);
    setSearchParams(`page=${1}`);
    setPage(1);
    setStartYearValue(null);
    setEndYearValue(null);
    setActiveFilters(false);
  }

  return (
    <div
      className="date-filter"
      style={
        {
          borderColor: `${activeFilters ? "green" : "#096BDE"}`,
        }
      }
      >
      <Button
        className="btn-filter-clear"
        onClick={clearFilter}
      >
        <DeleteIcon/>
      </Button>
      <div className="date-pickers">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            minDate={dayjs('0001')}
            maxDate={dayjs(`${endYearValue ?? currentYear}`)}
            label={"Year start"}
            views={['year']}
            onChange={(value) => setStartYearValue(!value ? startYear : value.$y)}
          />
          <MobileDatePicker
            minDate={dayjs(`${startYearValue ?? startYear}`)}
            maxDate={dayjs(`${currentYear}`)}
            label={"Year end"}
            views={['year']}
            onChange={(value) => setEndYearValue(!value ? currentYear : value.$y)}
          />
        </LocalizationProvider>
      </div>
      <Button
        className="btn-filter-search"
        onClick={() => activeFilter(startYearValue, endYearValue)}
      >
        <SearchIcon/>
      </Button>
    </div>
  )
}