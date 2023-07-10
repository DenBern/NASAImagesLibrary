import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context.jsx";
import { Button } from "@mui/joy";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useNASAService } from "../../service/NASAService.js";

import "./DateFilter.scss";

export const DateFilter = () => {
  const [startYearValue, setStartYearValue] = useState();
  const [endYearValue, setEndYearValue] = useState();

  const {startYear, currentYear} = useNASAService();
  const {
    yearStart,
    yearEnd,
    setYearStart,
    setYearEnd,
    setPage,
    setSearchParams,
  } = useContext(Context);

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
  }

  // useEffect(() => {
  //   console.log('effect')
  //   setStartYearValue('');
  //   setYearEnd('');
  // }, [yearStart, yearEnd])

  return (
    <div className="date-filter">
      <Button
        className="btn-filter-clear"
        onClick={() => clearFilter()}
      >
        <DeleteIcon/>
      </Button>
      <div
        style={
          {
            display: "flex",
            gap: "10px"
          }
        }
        className="date-pickers"
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Year start"
          views={['year']}
          onChange={(value) => setStartYearValue(value.$y)}
        />
          <DesktopDatePicker
            label={"Year end"}
            views={['year']}
            onChange={(value) => setEndYearValue(value.$y)}
          />
        </LocalizationProvider>
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