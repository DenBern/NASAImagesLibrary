import React, { useContext, useState } from "react";
import { Context } from "../../context/Context.jsx";
import { Button } from "@mui/joy";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from "@mui/x-date-pickers";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

import "./DateFilter.scss";

export const DateFilter = () => {

  const [startYear, setStartYear] = useState();
  const [endYear, setEndYear] = useState();
  const {
    setYearStart,
    setYearEnd,
    setPage,
    setSearchParams,
    startSearch,
    setSearch,
  } = useContext(Context);

  return (
    <div className="date-filter">
      <Button
        onClick={() => {
          setYearStart();
          setYearEnd();
          setSearchParams(`page=${1}`);
          setPage(1);
          setSearch(startSearch)
        }}
        style={{
          width: '50px',
          height: '50px',
        }}
      >
        <DeleteIcon/>
      </Button>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={"Year start"}
          views={['year']}
          onChange={(value) => setStartYear(value.$y)}
        />
        <DatePicker
          label={"Year end"}
          views={['year']}
          onChange={(value) => setEndYear(value.$y)}
        />
      </LocalizationProvider>
      <Button
        onClick={() => {
          setYearStart(startYear);
          setYearEnd(endYear);
          setSearchParams(`page=${1}`);
          setPage(1);
        }}
        style={{
          width: '50px',
          height: '50px',
        }}
      >
        <SearchIcon/>
      </Button>
    </div>
  )
}