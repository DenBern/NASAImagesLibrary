import React, { useContext, useState } from "react";
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

  const activeFilter = () => {
    if(startYearValue  === null && endYearValue === null) {
      setYearStart(startYear);
      setYearEnd(currentYear);
    } else if (endYearValue === null) {
      setYearStart(startYearValue);
      setYearEnd(currentYear);
    } else if (startYearValue === null) {
      setYearStart(startYear);
      setYearEnd(endYearValue);
    } else {
      setYearStart(startYearValue);
      setYearEnd(endYearValue);
    }

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
        onClick={clearFilter}
      >
        <DeleteIcon/>
      </Button>
      <div className="date-pickers">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            yearsPerRow={3}
            minDate={dayjs('0001')}
            maxDate={dayjs(`${endYearValue ?? currentYear}`)}
            label={"Year start"}
            views={['year']}
            onChange={(value) => setStartYearValue(value.$y)}
          />
          <MobileDatePicker
            minDate={dayjs(`${startYearValue ?? startYear}`)}
            maxDate={dayjs(`${currentYear}`)}
            label={"Year end"}
            views={['year']}
            onChange={(value) => setEndYearValue(value.$y)}
          />
        </LocalizationProvider>
      </div>
      <Button
        className="btn-filter-search"
        onClick={activeFilter}
      >
        <SearchIcon/>
      </Button>
    </div>
  )
}